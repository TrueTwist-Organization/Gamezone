export type AdProvider = "gpt" | "adsense" | "custom" | "disabled";

export type AdSize = [number, number];

export type AdSlotSettings = {
  enabled: boolean;
  provider: AdProvider;
  slotId: string;
  label: string;
  gptUnitPath: string;
  sizes: AdSize[];
  mobileSizes?: AdSize[];
  desktopSizes?: AdSize[];
  adsenseClient: string;
  adsenseSlot: string;
  customHtml: string;
};

export type AdsSettings = {
  gptNetworkCode: string;
  globalHeadScripts: string;
  globalBodyScripts: string;
  headerBanner: AdSlotSettings;
  bottomAnchor: AdSlotSettings;
  gameInterstitial: AdSlotSettings;
};

export type SiteBranding = {
  name: string;
  tagline: string;
  description: string;
  copyrightYear: number;
};

export type HomepageSettings = {
  heroGameId: string;
};

export type SiteSettings = {
  site: SiteBranding;
  ads: AdsSettings;
  homepage: HomepageSettings;
  updatedAt: string;
};
