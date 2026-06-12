export const GPT_SRC = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
export const BANNER_AD_UNIT = "/6355419/Travel/Europe/France/Paris";
export const STICKY_ANCHOR_AD_UNIT = "/6355419/Travel/Europe";
export const BANNER_SLOT_ID = "demo-ad-container";
export const STICKY_ANCHOR_SLOT_ID = "bottom-anchor-ad";

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
let stickyQueued = false;
let bannerQueued = false;

function getGoogletag() {
  window.googletag = window.googletag ?? { cmd: [] };
  return window.googletag;
}

function enableServicesOnce(googletag: GoogletagApi) {
  if (servicesEnabled) {
    return;
  }

  servicesEnabled = true;
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
}

function hideSlotWhenEmpty(slotId: string, event: { slot: GoogletagSlot; isEmpty: boolean }) {
  if (event.slot.getSlotElementId() !== slotId) {
    return;
  }

  const container = document.getElementById(slotId);
  if (!container) {
    return;
  }

  if (slotId === STICKY_ANCHOR_SLOT_ID) {
    const bar = container.closest(".sticky-anchor-bar");
    bar?.classList.toggle("sticky-anchor-bar--empty", event.isEmpty);
    document.documentElement.classList.toggle("has-bottom-anchor-ad", !event.isEmpty);
    return;
  }

  container.classList.toggle("demo-ad-container--empty", event.isEmpty);
}

export function queueStickyBottomAd() {
  if (stickyQueued || !document.getElementById(STICKY_ANCHOR_SLOT_ID)) {
    return;
  }

  stickyQueued = true;
  const googletagQueue = getGoogletag();

  googletagQueue.cmd.push(() => {
    const googletag = window.googletag as GoogletagApi;
    const stickySlot = googletag.defineSlot(
      STICKY_ANCHOR_AD_UNIT,
      [
        [320, 50],
        [728, 90],
      ],
      STICKY_ANCHOR_SLOT_ID,
    );

    if (!stickySlot) {
      return;
    }

    const mapping = googletag
      .sizeMapping()
      .addSize([1024, 0], [[728, 90]])
      .addSize([0, 0], [[320, 50]])
      .build();

    stickySlot.defineSizeMapping(mapping).addService(googletag.pubads());

    googletag.pubads().addEventListener("slotRenderEnded", (event) => {
      hideSlotWhenEmpty(STICKY_ANCHOR_SLOT_ID, event);
    });

    if (!document.getElementById(BANNER_SLOT_ID)) {
      enableServicesOnce(googletag);
    }
  });

  googletagQueue.cmd.push(() => {
    const googletag = window.googletag as GoogletagApi;
    googletag.display(STICKY_ANCHOR_SLOT_ID);
  });
}

export function queueBannerAd() {
  if (bannerQueued || !document.getElementById(BANNER_SLOT_ID)) {
    return;
  }

  bannerQueued = true;
  const googletagQueue = getGoogletag();

  googletagQueue.cmd.push(() => {
    const googletag = window.googletag as GoogletagApi;
    const bannerSlot = googletag.defineSlot(BANNER_AD_UNIT, [300, 250], BANNER_SLOT_ID);

    if (!bannerSlot) {
      return;
    }

    bannerSlot.addService(googletag.pubads());

    googletag.pubads().addEventListener("slotRenderEnded", (event) => {
      hideSlotWhenEmpty(BANNER_SLOT_ID, event);
    });

    enableServicesOnce(googletag);
  });

  googletagQueue.cmd.push(() => {
    const googletag = window.googletag as GoogletagApi;
    googletag.display(BANNER_SLOT_ID);
  });
}

export function queueGooglePubAds() {
  queueStickyBottomAd();
  queueBannerAd();
}
