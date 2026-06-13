"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AdSlot } from "@/components/ad-slot";
import { useSiteSettings } from "@/components/site-settings-provider";
import { displayGptSlotWhenReady, showGptInterstitial, slotType } from "@/lib/google-pubads";
import type { AdSlotSettings } from "@/lib/site-settings.types";

const AUTO_CLOSE_SECONDS = 30;
const SKIP_DELAY_SECONDS = 5;

type GamePlayModalProps = {
  open: boolean;
  title: string;
  playSrc: string;
  onClose: () => void;
};

function isInterstitialActive(slot: AdSlotSettings) {
  if (!slot.enabled || slot.provider === "disabled") {
    return false;
  }

  if (slot.provider === "gpt") {
    return Boolean(slot.gptUnitPath);
  }

  if (slot.provider === "adsense") {
    return Boolean(slot.adsenseClient && slot.adsenseSlot);
  }

  return Boolean(slot.customHtml.trim());
}

export function GamePlayModal({ open, title, playSrc, onClose }: GamePlayModalProps) {
  const { ads } = useSiteSettings();
  const interstitial = ads.gameInterstitial;
  const interstitialEnabled = useMemo(() => isInterstitialActive(interstitial), [interstitial]);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [mounted, setMounted] = useState(false);
  const [showInterstitial, setShowInterstitial] = useState(false);
  const [autoCloseSeconds, setAutoCloseSeconds] = useState(AUTO_CLOSE_SECONDS);
  const [skipCountdownSeconds, setSkipCountdownSeconds] = useState(SKIP_DELAY_SECONDS);

  const skipAvailable = skipCountdownSeconds === 0;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    setAutoCloseSeconds(AUTO_CLOSE_SECONDS);
    setSkipCountdownSeconds(SKIP_DELAY_SECONDS);

    const isNativeInterstitial =
      interstitialEnabled &&
      interstitial.provider === "gpt" &&
      slotType(interstitial) === "interstitial";

    if (isNativeInterstitial) {
      setShowInterstitial(false);
      const timer = window.setTimeout(() => {
        showGptInterstitial(interstitial, ads, () => {
          // Native overlay dismissed or no fill — game already visible
        });
      }, 50);
      return () => window.clearTimeout(timer);
    }

    setShowInterstitial(interstitialEnabled);
  }, [open, playSrc, interstitialEnabled, interstitial, ads]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!showInterstitial) {
      return;
    }

    const timer = window.setTimeout(() => {
      displayGptSlotWhenReady(interstitial, ads);
    }, 50);

    return () => window.clearTimeout(timer);
  }, [showInterstitial, interstitial, ads]);

  const focusGameFrame = useCallback(() => {
    const iframe = iframeRef.current;
    if (!iframe) {
      return;
    }

    iframe.focus();
    try {
      iframe.contentWindow?.focus();
    } catch {
      // Cross-origin focus may be blocked.
    }
  }, []);

  const revealGame = useCallback(() => {
    setShowInterstitial(false);
    focusGameFrame();
  }, [focusGameFrame]);

  const handleSkipAd = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      revealGame();
      requestAnimationFrame(() => focusGameFrame());
    },
    [revealGame, focusGameFrame],
  );

  useEffect(() => {
    if (!showInterstitial) {
      return;
    }

    const timer = window.setInterval(() => {
      setAutoCloseSeconds((seconds) => Math.max(0, seconds - 1));
      setSkipCountdownSeconds((seconds) => Math.max(0, seconds - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [showInterstitial]);

  useEffect(() => {
    if (showInterstitial && autoCloseSeconds === 0) {
      revealGame();
    }
  }, [showInterstitial, autoCloseSeconds, revealGame]);

  const handleClose = useCallback(() => {
    if (showInterstitial) {
      if (skipAvailable) {
        revealGame();
        return;
      }

      onClose();
      return;
    }

    onClose();
  }, [showInterstitial, skipAvailable, revealGame, onClose]);

  if (!open || !mounted) {
    return null;
  }

  return createPortal(
    <div className="game-play-modal is-open" role="dialog" aria-modal="true" aria-label={title}>
      <div className="game-play-modal__panel">
        <button type="button" className="game-play-modal__close" onClick={handleClose}>
          Close
        </button>

        <div className="game-play-modal__stage">
          <iframe
            ref={iframeRef}
            key={playSrc}
            src={playSrc}
            title={title}
            className={`game-play-modal__frame game-play-modal__frame--active${
              showInterstitial ? " game-play-modal__frame--behind" : ""
            }`}
            allow="autoplay; fullscreen; gamepad"
            allowFullScreen
          />

          {showInterstitial ? (
            <div className="game-play-modal__interstitial" role="dialog" aria-label="Advertisement">
              <div className="game-play-modal__interstitial-body">
                <div className="game-play-modal__interstitial-content">
                  <AdSlot slot={interstitial} className="game-interstitial-ad" />
                </div>
              </div>
              <div className="game-play-modal__interstitial-footer">
                <p className="game-play-modal__auto-close">
                  Ad will be closed in {autoCloseSeconds} secs
                </p>
                {skipAvailable ? (
                  <button type="button" className="game-play-modal__skip" onClick={handleSkipAd}>
                    SKIP
                  </button>
                ) : (
                  <p className="game-play-modal__skip-hint">
                    You can skip this in {skipCountdownSeconds} secs
                  </p>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>,
    document.body,
  );
}
