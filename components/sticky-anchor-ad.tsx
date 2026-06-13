"use client";

import { useEffect, useState } from "react";
import { AdSlot } from "@/components/ad-slot";
import { refreshGooglePubAds } from "@/lib/google-pubads";
import type { AdsSettings } from "@/lib/site-settings.types";

type StickyAnchorAdProps = {
  ads: AdsSettings;
};

export function StickyAnchorAd({ ads }: StickyAnchorAdProps) {
  const slot = ads.bottomAnchor;

  useEffect(() => {
    refreshGooglePubAds(ads);
  }, [ads]);

  if (!slot.enabled || slot.provider === "disabled") {
    return null;
  }

  return <StickyAnchorBar slot={slot} />;
}

function StickyAnchorBar({ slot }: { slot: AdsSettings["bottomAnchor"] }) {
  const [collapsed, setCollapsed] = useState(false);

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
    <aside className="sticky-anchor-bar sticky-anchor-bar--hidden" aria-label="Advertisement">
      <button
        type="button"
        className="sticky-anchor-collapse"
        aria-label="Collapse bottom ad"
        onClick={() => setCollapsed(true)}
      >
        <span aria-hidden="true">▼</span>
      </button>
      <AdSlot slot={slot} className="sticky-anchor-slot sticky-anchor-slot--empty" />
    </aside>
  );
}
