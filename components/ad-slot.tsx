"use client";

import { useEffect, useRef } from "react";
import type { AdSlotSettings } from "@/lib/site-settings.types";

type AdSlotProps = {
  slot: AdSlotSettings;
  className?: string;
};

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
    return <div id={slot.slotId} className={className} data-ad-slot={slot.slotId} />;
  }

  return null;
}
