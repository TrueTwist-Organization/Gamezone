"use client";

import { useEffect } from "react";
import { BANNER_SLOT_ID, queueBannerAd } from "@/lib/google-pubads";

export function DemoAd() {
  useEffect(() => {
    queueBannerAd();
  }, []);

  return <div id={BANNER_SLOT_ID} className="demo-ad-container" />;
}
