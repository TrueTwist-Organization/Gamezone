import type { AdSize, AdSlotSettings, AdsSettings, GptSlotType } from "@/lib/site-settings.types";

export const GPT_SRC = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";

const INTERSTITIAL_TIMEOUT_MS = 45_000;
const INIT_RETRY_MS = 100;
const INIT_MAX_RETRIES = 40;

type GoogletagSlot = {
  addService: (service: unknown) => unknown;
  getSlotElementId: () => string;
  defineSizeMapping: (mapping: unknown) => GoogletagSlot;
};

type GoogletagApi = {
  cmd: Array<() => void>;
  enums?: {
    OutOfPageFormat?: {
      BOTTOM_ANCHOR?: unknown;
      INTERSTITIAL?: unknown;
    };
  };
  sizeMapping: () => {
    addSize: (
      viewport: number[],
      sizes: number[][] | number[],
    ) => ReturnType<GoogletagApi["sizeMapping"]>;
    build: () => unknown;
  };
  defineSlot: (
    adUnitPath: string,
    size: Array<AdSize | number[]>,
    divId: string,
  ) => GoogletagSlot | null;
  defineOutOfPageSlot?: (adUnitPath: string, format: unknown) => GoogletagSlot | null;
  pubads: () => {
    addEventListener: (
      event: string,
      handler: (event: {
        slot: GoogletagSlot;
        isEmpty?: boolean;
        inViewPercentage?: number;
      }) => void,
    ) => void;
    removeEventListener: (
      event: string,
      handler: (event: {
        slot: GoogletagSlot;
        isEmpty?: boolean;
        inViewPercentage?: number;
      }) => void,
    ) => void;
    enableSingleRequest: () => void;
    collapseEmptyDivs: () => void;
  };
  enableServices: () => void;
  display: (target: string | GoogletagSlot) => void;
};

declare global {
  interface Window {
    googletag?: Partial<GoogletagApi> & Pick<GoogletagApi, "cmd">;
  }
}

let gptScriptReady = false;
let servicesEnabled = false;
let renderListenerAdded = false;
let initRetryCount = 0;
let pendingAds: AdsSettings | null = null;
const definedSlotIds = new Set<string>();
const outOfPageSlots = new Map<string, GoogletagSlot>();

function getGoogletag() {
  window.googletag = window.googletag ?? { cmd: [] };
  return window.googletag;
}

export function slotType(slot: AdSlotSettings): GptSlotType {
  return slot.gptSlotType ?? "standard";
}

function gptSizes(slot: AdSlotSettings): Array<AdSize | number[]> {
  return slot.sizes.length ? slot.sizes : [[300, 250]];
}

function numericSizes(sizes: AdSize[]): number[][] {
  return sizes.filter((size): size is [number, number] => size !== "fluid");
}

function activeGptSlots(ads: AdsSettings) {
  const slots: AdSlotSettings[] = [ads.headerBanner, ads.bottomAnchor, ads.gameInterstitial];
  if (ads.detailBanner1) slots.push(ads.detailBanner1);
  if (ads.detailBanner2) slots.push(ads.detailBanner2);
  return slots.filter((slot) => slot.enabled && slot.provider === "gpt" && slot.gptUnitPath);
}

function standardSlotNeedsDom(slot: AdSlotSettings) {
  return slotType(slot) === "standard" && !document.getElementById(slot.slotId);
}

function canInitialize(ads: AdsSettings) {
  // Proceed once at least one standard slot has its DOM element in the page,
  // OR when there are no standard slots at all (all are out-of-page formats).
  // This handles the case where different pages render different slot elements
  // (e.g. home renders headerBanner, game-detail renders detailBanner1/2).
  const standardSlots = activeGptSlots(ads).filter((slot) => slotType(slot) === "standard");
  if (standardSlots.length === 0) return true;
  return standardSlots.some((slot) => !!document.getElementById(slot.slotId));
}

function hideSlotWhenEmpty(slot: AdSlotSettings, event: { slot: GoogletagSlot; isEmpty: boolean }) {
  const type = slotType(slot);

  // Native out-of-page slots are managed entirely by GPT — nothing to do
  if (type === "bottom-anchor" || type === "interstitial") {
    return;
  }

  if (event.slot.getSlotElementId() !== slot.slotId) {
    return;
  }

  const container = document.getElementById(slot.slotId);
  if (!container) {
    return;
  }

  if (!event.isEmpty) {
    container.style.display = "";
    container.classList.add("gpt-ad-slot--filled");
    container.classList.remove("gpt-ad-slot--unfilled");
  } else {
    // collapseEmptyDivs() handles display:none natively — just track the state
    container.classList.add("gpt-ad-slot--unfilled");
    container.classList.remove("gpt-ad-slot--filled");
  }
}

function defineOutOfPageGptSlot(
  googletag: GoogletagApi,
  slot: AdSlotSettings,
  pubads: ReturnType<GoogletagApi["pubads"]>,
  format: unknown,
) {
  if (!slot.gptUnitPath || definedSlotIds.has(slot.slotId) || !googletag.defineOutOfPageSlot || !format) {
    return;
  }

  const outOfPageSlot = googletag.defineOutOfPageSlot(slot.gptUnitPath, format);
  if (!outOfPageSlot) {
    return;
  }

  definedSlotIds.add(slot.slotId);
  outOfPageSlots.set(slot.slotId, outOfPageSlot);
  outOfPageSlot.addService(pubads);
}

function defineGptSlot(googletag: GoogletagApi, slot: AdSlotSettings, pubads: ReturnType<GoogletagApi["pubads"]>) {
  const type = slotType(slot);

  if (type === "bottom-anchor") {
    defineOutOfPageGptSlot(googletag, slot, pubads, googletag.enums?.OutOfPageFormat?.BOTTOM_ANCHOR);
    return;
  }

  if (type === "interstitial") {
    defineOutOfPageGptSlot(googletag, slot, pubads, googletag.enums?.OutOfPageFormat?.INTERSTITIAL);
    return;
  }

  if (!document.getElementById(slot.slotId) || !slot.gptUnitPath || definedSlotIds.has(slot.slotId)) {
    return;
  }

  const gptSlot = googletag.defineSlot(slot.gptUnitPath, gptSizes(slot), slot.slotId);
  if (!gptSlot) {
    return;
  }

  definedSlotIds.add(slot.slotId);

  if (slot.mobileSizes?.length && slot.desktopSizes?.length) {
    const mapping = googletag
      .sizeMapping()
      .addSize([1024, 0], numericSizes(slot.desktopSizes))
      .addSize([0, 0], numericSizes(slot.mobileSizes))
      .build();
    gptSlot.defineSizeMapping(mapping).addService(pubads);
    return;
  }

  gptSlot.addService(pubads);
}

function displayGptSlots(googletag: GoogletagApi, ads: AdsSettings) {
  for (const slot of activeGptSlots(ads)) {
    const type = slotType(slot);

    if (type === "bottom-anchor") {
      const anchorSlot = outOfPageSlots.get(slot.slotId);
      if (anchorSlot) {
        googletag.display(anchorSlot);
      }
      continue;
    }

    if (type === "interstitial") {
      continue;
    }

    const el = document.getElementById(slot.slotId);
    if (el) {
      // Reset display state from any previous render (collapseEmptyDivs sets display:none)
      el.style.display = "";
      el.classList.remove("gpt-ad-slot--unfilled", "gpt-ad-slot--filled");
      googletag.display(slot.slotId);
    }
  }
}

function runGptInit(ads: AdsSettings) {
  if (!gptScriptReady) {
    return;
  }

  if (!canInitialize(ads)) {
    if (initRetryCount < INIT_MAX_RETRIES) {
      initRetryCount += 1;
      window.setTimeout(() => runGptInit(ads), INIT_RETRY_MS);
    }
    return;
  }

  initRetryCount = 0;
  const slots = activeGptSlots(ads);
  if (!slots.length) {
    return;
  }

  const googletagQueue = getGoogletag();
  googletagQueue.cmd.push(() => {
    const googletag = window.googletag as GoogletagApi;
    const pubads = googletag.pubads();

    for (const slot of slots) {
      defineGptSlot(googletag, slot, pubads);
    }

    if (!renderListenerAdded) {
      renderListenerAdded = true;
      pubads.addEventListener("slotRenderEnded", (event) => {
        const currentAds = pendingAds;
        if (!currentAds) {
          return;
        }

        for (const slot of activeGptSlots(currentAds)) {
          hideSlotWhenEmpty(slot, event as { slot: GoogletagSlot; isEmpty: boolean });
        }
      });
    }

    if (!servicesEnabled) {
      servicesEnabled = true;
      pubads.enableSingleRequest();
      pubads.collapseEmptyDivs();
      googletag.enableServices();
    }

    displayGptSlots(googletag, ads);
  });
}

export function markGptScriptReady(ads: AdsSettings) {
  gptScriptReady = true;
  pendingAds = ads;
  runGptInit(ads);
}

export function refreshGooglePubAds(ads: AdsSettings) {
  pendingAds = ads;
  runGptInit(ads);
}

export function displayGptSlotWhenReady(slot: AdSlotSettings, ads: AdsSettings) {
  if (!slot.enabled || slot.provider !== "gpt" || !slot.gptUnitPath || slotType(slot) !== "standard") {
    return;
  }

  pendingAds = ads;

  const googletagQueue = getGoogletag();
  googletagQueue.cmd.push(() => {
    if (!gptScriptReady) {
      return;
    }

    const googletag = window.googletag as GoogletagApi;
    const pubads = googletag.pubads();

    defineGptSlot(googletag, slot, pubads);

    if (!servicesEnabled) {
      servicesEnabled = true;
      pubads.enableSingleRequest();
      googletag.enableServices();
    }

    if (document.getElementById(slot.slotId)) {
      googletag.display(slot.slotId);
    }
  });
}

export function queueGooglePubAds(ads: AdsSettings) {
  refreshGooglePubAds(ads);
}

export function showGptInterstitial(slot: AdSlotSettings, ads: AdsSettings, onComplete: () => void) {
  if (!slot.enabled || slot.provider !== "gpt" || slotType(slot) !== "interstitial" || !slot.gptUnitPath) {
    onComplete();
    return;
  }

  refreshGooglePubAds(ads);

  const googletagQueue = getGoogletag();
  googletagQueue.cmd.push(() => {
    const googletag = window.googletag as GoogletagApi;
    const interstitialSlot = outOfPageSlots.get(slot.slotId);

    if (!interstitialSlot) {
      onComplete();
      return;
    }

    let finished = false;
    const pubads = googletag.pubads();

    const finish = () => {
      if (finished) {
        return;
      }

      finished = true;
      pubads.removeEventListener("slotRenderEnded", onRenderEnded);
      pubads.removeEventListener("slotVisibilityChanged", onVisibilityChanged);
      window.clearTimeout(timeoutId);
      onComplete();
    };

    const onRenderEnded = (event: { slot: GoogletagSlot; isEmpty?: boolean }) => {
      if (event.slot !== interstitialSlot) {
        return;
      }

      if (event.isEmpty) {
        finish();
      }
    };

    const onVisibilityChanged = (event: { slot: GoogletagSlot; inViewPercentage?: number }) => {
      if (event.slot !== interstitialSlot) {
        return;
      }

      if (event.inViewPercentage === 0) {
        finish();
      }
    };

    pubads.addEventListener("slotRenderEnded", onRenderEnded);
    pubads.addEventListener("slotVisibilityChanged", onVisibilityChanged);

    const timeoutId = window.setTimeout(finish, INTERSTITIAL_TIMEOUT_MS);

    googletag.display(interstitialSlot);
  });
}

export function hasActiveGptAds(ads: AdsSettings) {
  return activeGptSlots(ads).length > 0;
}

export function isNativeBottomAnchor(slot: AdSlotSettings) {
  return slot.enabled && slot.provider === "gpt" && slotType(slot) === "bottom-anchor";
}

export function isNativeGptInterstitial(slot: AdSlotSettings) {
  return slot.enabled && slot.provider === "gpt" && slotType(slot) === "interstitial";
}
