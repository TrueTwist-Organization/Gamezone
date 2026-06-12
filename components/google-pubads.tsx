"use client";

import Script from "next/script";
import { useRef } from "react";
import { GPT_SRC, queueGooglePubAds } from "@/lib/google-pubads";

export function GooglePubAds() {
  const initialized = useRef(false);

  const loadAds = () => {
    if (initialized.current) {
      return;
    }

    initialized.current = true;
    window.setTimeout(() => {
      queueGooglePubAds();
    }, 100);
  };

  return (
    <Script
      src={GPT_SRC}
      strategy="afterInteractive"
      crossOrigin="anonymous"
      onLoad={loadAds}
    />
  );
}
