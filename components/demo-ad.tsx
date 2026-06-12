"use client";

import Script from "next/script";
import { useRef } from "react";

const AD_SLOT_ID = "demo-ad-container";
const GPT_SRC = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
const DEMO_AD_UNIT = "/6355419/Travel/Europe/France/Paris";

type GoogletagApi = {
  cmd: Array<() => void>;
  defineSlot: (
    adUnitPath: string,
    size: number[],
    divId: string,
  ) => { addService: (service: unknown) => unknown };
  pubads: () => {
    addEventListener: (
      event: string,
      handler: (event: { slot: { getSlotElementId: () => string }; isEmpty: boolean }) => void,
    ) => void;
  };
  enableServices: () => void;
  display: (divId: string) => void;
};

declare global {
  interface Window {
    googletag?: Partial<GoogletagApi> & Pick<GoogletagApi, "cmd">;
  }
}

function queueDemoAd() {
  window.googletag = window.googletag ?? { cmd: [] };
  window.googletag.cmd.push(() => {
    const googletag = window.googletag as GoogletagApi;
    googletag
      .defineSlot(DEMO_AD_UNIT, [300, 250], AD_SLOT_ID)
      ?.addService(googletag.pubads());

    googletag.pubads().addEventListener("slotRenderEnded", (event) => {
      if (event.slot.getSlotElementId() !== AD_SLOT_ID) {
        return;
      }

      const container = document.getElementById(AD_SLOT_ID);
      if (!container) {
        return;
      }

      container.classList.toggle("demo-ad-container--empty", event.isEmpty);
    });

    googletag.enableServices();
  });

  window.googletag.cmd.push(() => {
    const googletag = window.googletag as GoogletagApi;
    googletag.display(AD_SLOT_ID);
  });
}

export function DemoAd() {
  const initialized = useRef(false);

  const loadAd = () => {
    if (initialized.current) {
      return;
    }

    initialized.current = true;
    queueDemoAd();
  };

  return (
    <>
      <Script
        src={GPT_SRC}
        strategy="afterInteractive"
        crossOrigin="anonymous"
        onLoad={loadAd}
      />
      <div id={AD_SLOT_ID} className="demo-ad-container" />
    </>
  );
}
