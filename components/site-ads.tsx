"use client";

import Script from "next/script";
import { useEffect } from "react";
import { AdSlot } from "@/components/ad-slot";
import { GPT_SRC, hasActiveGptAds, markGptScriptReady, refreshGooglePubAds } from "@/lib/google-pubads";
import type { AdsSettings } from "@/lib/site-settings.types";

type SiteAdsProps = {
  ads: AdsSettings;
};

export function GptPreloadSlots({ ads }: SiteAdsProps) {
  useEffect(() => {
    refreshGooglePubAds(ads);
  }, [ads]);

  return null;
}

export function SiteAds({ ads }: SiteAdsProps) {
  const needsGpt = hasActiveGptAds(ads);
  const needsAdSense = [ads.headerBanner, ads.bottomAnchor, ads.gameInterstitial].some(
    (slot) => slot.enabled && slot.provider === "adsense" && slot.adsenseClient,
  );

  return (
    <>
      {ads.globalHeadScripts ? (
        <Script id="site-global-head-scripts" strategy="afterInteractive">
          {ads.globalHeadScripts}
        </Script>
      ) : null}
      {needsGpt ? (
        <Script
          id="gpt-loader"
          src={GPT_SRC}
          strategy="afterInteractive"
          crossOrigin="anonymous"
          onReady={() => markGptScriptReady(ads)}
        />
      ) : null}
      {needsAdSense ? (
        <Script
          id="adsense-loader"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(
            ads.headerBanner.adsenseClient ||
              ads.bottomAnchor.adsenseClient ||
              ads.gameInterstitial.adsenseClient,
          )}`}
          strategy="afterInteractive"
          crossOrigin="anonymous"
          async
        />
      ) : null}
      {ads.globalBodyScripts ? (
        <Script id="site-global-body-scripts" strategy="lazyOnload">
          {ads.globalBodyScripts}
        </Script>
      ) : null}
      {needsGpt ? <GptPreloadSlots ads={ads} /> : null}
    </>
  );
}

export function HeaderBannerAd({ ads }: SiteAdsProps) {
  useEffect(() => {
    // Reset element state that may have been set by a previous page's ad render
    const el = document.getElementById(ads.headerBanner.slotId);
    if (el) {
      el.style.display = "";
      el.classList.remove("gpt-ad-slot--unfilled", "gpt-ad-slot--filled");
    }
    refreshGooglePubAds(ads);
  }, [ads]);

  return <AdSlot slot={ads.headerBanner} className="demo-ad-container" />;
}

type DetailBannerProps = SiteAdsProps & { slot: "detailBanner1" | "detailBanner2" };

export function DetailBannerAd({ ads, slot }: DetailBannerProps) {
  const adSlot = ads[slot];

  useEffect(() => {
    if (!adSlot) return;
    const el = document.getElementById(adSlot.slotId);
    if (el) {
      el.style.display = "";
      el.classList.remove("gpt-ad-slot--unfilled", "gpt-ad-slot--filled");
    }
    refreshGooglePubAds(ads);
  }, [ads, adSlot]);

  if (!adSlot || !adSlot.enabled || adSlot.provider === "disabled") {
    return null;
  }

  return <AdSlot slot={adSlot} className="demo-ad-container" />;
}
