"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

const AD_SLOT_ID = "demo-ad-container";
const GPT_SRC = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";

type GoogletagApi = {
  cmd: Array<() => void>;
  defineSlot: (
    adUnitPath: string,
    size: number[],
    divId: string,
  ) => { addService: (service: unknown) => unknown };
  pubads: () => unknown;
  enableServices: () => void;
  display: (divId: string) => void;
};

declare global {
  interface Window {
    googletag?: Partial<GoogletagApi> & Pick<GoogletagApi, "cmd">;
  }
}

function initDemoAd(initialized: { current: boolean }) {
  if (initialized.current) {
    return;
  }

  initialized.current = true;
  window.googletag = window.googletag ?? { cmd: [] };
  window.googletag.cmd.push(() => {
    const googletag = window.googletag as GoogletagApi;
    googletag.defineSlot("/6355419/Travel", [300, 250], AD_SLOT_ID)?.addService(googletag.pubads());
    googletag.enableServices();
    googletag.display(AD_SLOT_ID);
  });
}

export function DemoAd() {
  const initialized = useRef(false);

  useEffect(() => {
    initDemoAd(initialized);
  }, []);

  return (
    <>
      <Script
        src={GPT_SRC}
        strategy="afterInteractive"
        onLoad={() => initDemoAd(initialized)}
      />
      <div id={AD_SLOT_ID} className="demo-ad-container" />
    </>
  );
}
