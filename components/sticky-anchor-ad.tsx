"use client";

import { useEffect } from "react";
import { refreshGooglePubAds, slotType } from "@/lib/google-pubads";
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

  // Native GPT bottom anchor manages its own DOM — render nothing
  if (slot.provider === "gpt" && slotType(slot) === "bottom-anchor") {
    return null;
  }

  return null;
}
