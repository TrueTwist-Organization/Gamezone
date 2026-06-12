export const GPT_SRC = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
export const BANNER_AD_UNIT = "/6355419/Travel/Europe/France/Paris";
export const ANCHOR_AD_UNIT = "/6355419/Travel";
export const BANNER_SLOT_ID = "demo-ad-container";

type GoogletagSlot = {
  addService: (service: unknown) => unknown;
  getSlotElementId: () => string;
};

type GoogletagApi = {
  cmd: Array<() => void>;
  enums: {
    OutOfPageFormat: {
      BOTTOM_ANCHOR: string | number;
    };
  };
  defineSlot: (
    adUnitPath: string,
    size: number[],
    divId: string,
  ) => GoogletagSlot | null;
  defineOutOfPageSlot: (
    adUnitPath: string,
    format: string | number,
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
let anchorQueued = false;
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

export function queueBottomAnchorAd() {
  if (anchorQueued) {
    return;
  }

  anchorQueued = true;
  const googletagQueue = getGoogletag();

  googletagQueue.cmd.push(() => {
    const googletag = window.googletag as GoogletagApi;
    const anchorSlot = googletag.defineOutOfPageSlot(
      ANCHOR_AD_UNIT,
      googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR,
    );

    if (anchorSlot) {
      anchorSlot.addService(googletag.pubads());
      document.documentElement.classList.add("has-bottom-anchor-ad");
    }

    if (!document.getElementById(BANNER_SLOT_ID)) {
      enableServicesOnce(googletag);
    }
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
      if (event.slot.getSlotElementId() !== BANNER_SLOT_ID) {
        return;
      }

      const container = document.getElementById(BANNER_SLOT_ID);
      container?.classList.toggle("demo-ad-container--empty", event.isEmpty);
    });

    enableServicesOnce(googletag);
  });

  googletagQueue.cmd.push(() => {
    const googletag = window.googletag as GoogletagApi;
    googletag.display(BANNER_SLOT_ID);
  });
}

export function queueGooglePubAds() {
  queueBottomAnchorAd();
  queueBannerAd();
}
