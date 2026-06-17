"use client";

import { useEffect } from "react";

const GAME_PAGE_CONVERSION_SEND_TO = "AW-18173439172/A3FyCNLDsrEcEMTZ4tlD";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function GoogleAdsGamePageConversion() {
  useEffect(() => {
    window.gtag?.("event", "conversion", {
      send_to: GAME_PAGE_CONVERSION_SEND_TO,
      value: 0.5,
      currency: "INR",
    });
  }, []);

  return null;
}
