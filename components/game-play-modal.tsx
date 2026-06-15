"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AdSlot } from "@/components/ad-slot";
import { useSiteSettings } from "@/components/site-settings-provider";
import { displayGptSlotWhenReady, showGptInterstitial, slotType } from "@/lib/google-pubads";
import type { AdSlotSettings } from "@/lib/site-settings.types";

const AUTO_CLOSE_SECONDS = 30;
const SKIP_DELAY_SECONDS = 5;
const MID_GAME_AUTO_CLOSE_SECONDS = 30;
const MID_GAME_SKIP_DELAY_SECONDS = 5;
// Minimum milliseconds between mid-game ads (prevents double-fire)
const MID_GAME_COOLDOWN_MS = 3_000;

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
  const midGameBanner = ads.midGameBanner;
  const interstitialEnabled = useMemo(() => isInterstitialActive(interstitial), [interstitial]);
  const midGameBannerEnabled = useMemo(
    () => Boolean(midGameBanner && isInterstitialActive(midGameBanner)),
    [midGameBanner],
  );

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);
  const [showInterstitial, setShowInterstitial] = useState(false);
  const [autoCloseSeconds, setAutoCloseSeconds] = useState(AUTO_CLOSE_SECONDS);
  const [skipCountdownSeconds, setSkipCountdownSeconds] = useState(SKIP_DELAY_SECONDS);

  const [showMidGame, setShowMidGame] = useState(false);
  const [midGameAutoClose, setMidGameAutoClose] = useState(MID_GAME_AUTO_CLOSE_SECONDS);
  const [midGameSkipCountdown, setMidGameSkipCountdown] = useState(MID_GAME_SKIP_DELAY_SECONDS);
  const midGameSkipAvailable = midGameSkipCountdown === 0;

  // Refs for reading latest state inside event handlers without stale closures
  const showInterstitialRef = useRef(false);
  const showMidGameRef = useRef(false);
  const midGameBannerEnabledRef = useRef(midGameBannerEnabled);
  const midGameLastShownRef = useRef(0);

  useEffect(() => {
    showInterstitialRef.current = showInterstitial;
  }, [showInterstitial]);
  useEffect(() => {
    showMidGameRef.current = showMidGame;
  }, [showMidGame]);
  useEffect(() => {
    midGameBannerEnabledRef.current = midGameBannerEnabled;
  }, [midGameBannerEnabled]);

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
      displayGptSlotWhenReady(interstitial, ads, {
        onEmpty: () => setShowInterstitial(false),
      });
    }, 50);

    return () => window.clearTimeout(timer);
  }, [showInterstitial, interstitial, ads]);

  // Mid-game ad: only when the game calls gdApi.showBanner() (play / start /
  // replay / home). Games relay this via postMessage({ type: 'GM_SHOW_BANNER' }).
  useEffect(() => {
    if (!open) return;

    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type !== "GM_SHOW_BANNER") return;
      if (!midGameBannerEnabledRef.current) return;
      if (showInterstitialRef.current || showMidGameRef.current) return;

      const now = Date.now();
      if (now - midGameLastShownRef.current < MID_GAME_COOLDOWN_MS) return;
      midGameLastShownRef.current = now;

      setShowMidGame(true);
      setMidGameAutoClose(MID_GAME_AUTO_CLOSE_SECONDS);
      setMidGameSkipCountdown(MID_GAME_SKIP_DELAY_SECONDS);
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [open]);

  // Display the mid-game GPT slot when the overlay becomes visible
  useEffect(() => {
    if (!showMidGame || !midGameBanner) {
      return;
    }

    const timer = window.setTimeout(() => {
      displayGptSlotWhenReady(midGameBanner, ads, {
        onEmpty: () => setShowMidGame(false),
      });
    }, 50);

    return () => window.clearTimeout(timer);
  }, [showMidGame, midGameBanner, ads]);

  // Mid-game banner countdown
  useEffect(() => {
    if (!showMidGame) {
      return;
    }

    const timer = window.setInterval(() => {
      setMidGameAutoClose((s) => Math.max(0, s - 1));
      setMidGameSkipCountdown((s) => Math.max(0, s - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [showMidGame]);

  // Auto-close mid-game banner
  useEffect(() => {
    if (showMidGame && midGameAutoClose === 0) {
      setShowMidGame(false);
    }
  }, [showMidGame, midGameAutoClose]);

  const dismissMidGame = useCallback(() => {
    setShowMidGame(false);
  }, []);

  const revealGame = useCallback(() => {
    setShowInterstitial(false);
  }, []);

  const handleSkipAd = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      revealGame();
    },
    [revealGame],
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
        <button
          ref={closeButtonRef}
          type="button"
          className="game-play-modal__close"
          onClick={handleClose}
        >
          Close
        </button>

        <div className="game-play-modal__stage">
          <iframe
            ref={iframeRef}
            key={playSrc}
            src={playSrc}
            title={title}
            className={`game-play-modal__frame game-play-modal__frame--active${
              showInterstitial || showMidGame ? " game-play-modal__frame--behind" : ""
            }`}
            allow="autoplay; fullscreen; gamepad *"
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

          {showMidGame && midGameBanner ? (
            <div className="game-play-modal__interstitial" role="dialog" aria-label="Advertisement">
              <div className="game-play-modal__interstitial-body">
                <div className="game-play-modal__interstitial-content">
                  <AdSlot slot={midGameBanner} className="game-interstitial-ad" />
                </div>
              </div>
              <div className="game-play-modal__interstitial-footer">
                <p className="game-play-modal__auto-close">
                  Ad will be closed in {midGameAutoClose} secs
                </p>
                {midGameSkipAvailable ? (
                  <button type="button" className="game-play-modal__skip" onClick={dismissMidGame}>
                    SKIP
                  </button>
                ) : (
                  <p className="game-play-modal__skip-hint">
                    You can skip this in {midGameSkipCountdown} secs
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
