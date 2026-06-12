"use client";

import { useEffect, useState } from "react";
import { AdSlot } from "@/components/ad-slot";
import { queueGooglePubAds } from "@/lib/google-pubads";
import type { AdsSettings } from "@/lib/site-settings.types";

type StickyAnchorAdProps = {
  ads: AdsSettings;
};

export function StickyAnchorAd({ ads }: StickyAnchorAdProps) {
  const [collapsed, setCollapsed] = useState(false);
  const slot = ads.bottomAnchor;

  useEffect(() => {
    queueGooglePubAds(ads);
  }, [ads]);

  if (!slot.enabled || slot.provider === "disabled") {
    return null;
  }

  if (collapsed) {
    return (
      <button
        type="button"
        className="sticky-anchor-reopen"
        aria-label="Show bottom ad"
        onClick={() => setCollapsed(false)}
      >
        <span aria-hidden="true">▲</span>
      </button>
    );
  }

  return (
    <aside className="sticky-anchor-bar" aria-label="Advertisement">
      <button
        type="button"
        className="sticky-anchor-collapse"
        aria-label="Collapse bottom ad"
        onClick={() => setCollapsed(true)}
      >
        <span aria-hidden="true">▼</span>
      </button>
      <AdSlot slot={slot} className="sticky-anchor-slot" />
    </aside>
  );
}
