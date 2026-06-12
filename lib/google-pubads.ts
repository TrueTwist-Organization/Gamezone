import type { AdSlotSettings, AdsSettings } from "@/lib/site-settings.types";

export const GPT_SRC = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";

type GoogletagSlot = {
  addService: (service: unknown) => unknown;
  getSlotElementId: () => string;
  defineSizeMapping: (mapping: unknown) => GoogletagSlot;
};

type GoogletagApi = {
  cmd: Array<() => void>;
  sizeMapping: () => {
    addSize: (
      viewport: number[],
      sizes: number[][] | number[],
    ) => ReturnType<GoogletagApi["sizeMapping"]>;
    build: () => unknown;
  };
  defineSlot: (
    adUnitPath: string,
    size: number[][] | number[],
    divId: string,
  ) => GoogletagSlot | null;
  pubads: () => {
    addEventListener: (
      event: string,
      handler: (event: { slot: GoogletagSlot; isEmpty: boolean }) => void,
    ) => void;
    enableSingleRequest: () => void;
  };
  enableServices: () => void;
  display: (divId: string) => void;
};

declare global {
  interface Window {
    googletag?: Partial<GoogletagApi> & Pick<GoogletagApi, "cmd">;
  }
}

let servicesEnabled = false;
let renderListenerAdded = false;
const definedSlotIds = new Set<string>();

function getGoogletag() {
  window.googletag = window.googletag ?? { cmd: [] };
  return window.googletag;
}

function hideSlotWhenEmpty(slot: AdSlotSettings, event: { slot: GoogletagSlot; isEmpty: boolean }) {
  if (event.slot.getSlotElementId() !== slot.slotId) {
    return;
  }

  const container = document.getElementById(slot.slotId);
  if (!container) {
    return;
  }

  if (slot.slotId.includes("bottom-anchor")) {
    document.documentElement.classList.toggle("has-bottom-anchor-ad", !event.isEmpty);
    container.classList.toggle("sticky-anchor-slot--empty", event.isEmpty);
    return;
  }

  if (slot.slotId.includes("interstitial")) {
    container.classList.toggle("game-interstitial-ad--empty", event.isEmpty);
    return;
  }

  container.classList.toggle("demo-ad-container--empty", event.isEmpty);
}

function defineGptSlot(googletag: GoogletagApi, slot: AdSlotSettings, pubads: ReturnType<GoogletagApi["pubads"]>) {
  if (!document.getElementById(slot.slotId) || !slot.gptUnitPath || definedSlotIds.has(slot.slotId)) {
    return;
  }

  const gptSlot = googletag.defineSlot(slot.gptUnitPath, slot.sizes, slot.slotId);
  if (!gptSlot) {
    return;
  }

  definedSlotIds.add(slot.slotId);

  if (slot.mobileSizes?.length && slot.desktopSizes?.length) {
    const mapping = googletag
      .sizeMapping()
      .addSize([1024, 0], slot.desktopSizes)
      .addSize([0, 0], slot.mobileSizes)
      .build();
    gptSlot.defineSizeMapping(mapping).addService(pubads);
    return;
  }

  gptSlot.addService(pubads);
}

export function queueGooglePubAds(ads: AdsSettings) {
  const activeGptSlots = [ads.headerBanner, ads.bottomAnchor, ads.gameInterstitial].filter(
    (slot) => slot.enabled && slot.provider === "gpt" && slot.gptUnitPath,
  );

  if (!activeGptSlots.length) {
    return;
  }

  const googletagQueue = getGoogletag();

  googletagQueue.cmd.push(() => {
    const googletag = window.googletag as GoogletagApi;
    const pubads = googletag.pubads();

    for (const slot of activeGptSlots) {
      defineGptSlot(googletag, slot, pubads);
    }

    if (!renderListenerAdded) {
      renderListenerAdded = true;
      pubads.addEventListener("slotRenderEnded", (event) => {
        for (const slot of activeGptSlots) {
          hideSlotWhenEmpty(slot, event);
        }
      });
    }

    if (!servicesEnabled) {
      servicesEnabled = true;
      pubads.enableSingleRequest();
      googletag.enableServices();
    }
  });

  googletagQueue.cmd.push(() => {
    const googletag = window.googletag as GoogletagApi;
    for (const slot of activeGptSlots) {
      if (document.getElementById(slot.slotId)) {
        googletag.display(slot.slotId);
      }
    }
  });
}

export function hasActiveGptAds(ads: AdsSettings) {
  return [ads.headerBanner, ads.bottomAnchor, ads.gameInterstitial].some(
    (slot) => slot.enabled && slot.provider === "gpt" && Boolean(slot.gptUnitPath),
  );
}
