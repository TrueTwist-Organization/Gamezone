"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import type { AdSlotSettings } from "@/lib/site-settings.types";

type AdSlotProps = {
  slot: AdSlotSettings;
  className?: string;
};

function gptSlotStyle(slot: AdSlotSettings): CSSProperties {
  if (slot.slotId === "bottom-anchor-ad") {
    return { width: "100%", maxWidth: 728, minHeight: 50 };
  }

  if (slot.slotId.includes("interstitial")) {
    return { minWidth: 300, minHeight: 250 };
  }

  // Provide 600px container so a 300x600 creative renders without SafeFrame expansion
  return { minWidth: 300, minHeight: 600 };
}

export function AdSlot({ slot, className }: AdSlotProps) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!slot.enabled || slot.provider !== "adsense" || initialized.current) {
      return;
    }

    if (!slot.adsenseClient || !slot.adsenseSlot) {
      return;
    }

    initialized.current = true;
    try {
      ((window as Window & { adsbygoogle?: unknown[] }).adsbygoogle =
        (window as Window & { adsbygoogle?: unknown[] }).adsbygoogle || []).push({});
    } catch {
      // Ad blockers may block AdSense initialization.
    }
  }, [slot]);

  if (!slot.enabled || slot.provider === "disabled") {
    return null;
  }

  if (slot.provider === "custom" && slot.customHtml.trim()) {
    return (
      <div
        className={className}
        data-ad-slot={slot.slotId}
        dangerouslySetInnerHTML={{ __html: slot.customHtml }}
      />
    );
  }

  if (slot.provider === "adsense") {
    if (!slot.adsenseClient || !slot.adsenseSlot) {
      return null;
    }

    return (
      <ins
        className={`adsbygoogle ${className ?? ""}`.trim()}
        style={{ display: "block" }}
        data-ad-client={slot.adsenseClient}
        data-ad-slot={slot.adsenseSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    );
  }

  if (slot.provider === "gpt") {
    return (
      <div
        id={slot.slotId}
        className={className}
        data-ad-slot={slot.slotId}
        style={gptSlotStyle(slot)}
      />
    );
  }

  return null;
}
