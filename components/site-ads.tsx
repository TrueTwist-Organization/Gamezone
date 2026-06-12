"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { AdSlot } from "@/components/ad-slot";
import { GPT_SRC, hasActiveGptAds, queueGooglePubAds } from "@/lib/google-pubads";
import type { AdsSettings } from "@/lib/site-settings.types";

type SiteAdsProps = {
  ads: AdsSettings;
};

export function SiteAds({ ads }: SiteAdsProps) {
  const initialized = useRef(false);
  const needsGpt = hasActiveGptAds(ads);
  const needsAdSense = [ads.headerBanner, ads.bottomAnchor, ads.gameInterstitial].some(
    (slot) => slot.enabled && slot.provider === "adsense" && slot.adsenseClient,
  );

  const loadGpt = () => {
    if (initialized.current) {
      return;
    }

    initialized.current = true;
    window.setTimeout(() => {
      queueGooglePubAds(ads);
    }, 100);
  };

  return (
    <>
      {ads.globalHeadScripts ? (
        <Script id="site-global-head-scripts" strategy="afterInteractive">
          {ads.globalHeadScripts}
        </Script>
      ) : null}
      {needsGpt ? (
        <Script
          src={GPT_SRC}
          strategy="afterInteractive"
          crossOrigin="anonymous"
          onLoad={loadGpt}
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
    </>
  );
}

export function HeaderBannerAd({ ads }: SiteAdsProps) {
  useEffect(() => {
    queueGooglePubAds(ads);
  }, [ads]);

  return <AdSlot slot={ads.headerBanner} className="demo-ad-container" />;
}
