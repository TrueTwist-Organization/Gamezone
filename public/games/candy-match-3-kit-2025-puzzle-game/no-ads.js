// Ad-free patch — block ad networks only; allow game SDK/asset CDNs
(function () {
  "use strict";

  var noop = function () {};
  var noopPromise = function () {
    return Promise.resolve(true);
  };

  /** Invoke any callback args so games don't hang waiting for ad completion. */
  function instantAdDone() {
    var args = arguments;
    for (var i = 0; i < args.length; i++) {
      if (typeof args[i] === "function") {
        try {
          args[i]();
        } catch (e) {}
      }
    }
    return Promise.resolve(true);
  }

  // Only block known ad/analytics endpoints — NOT game asset CDNs (yyggames, lofgames game JS)
  var adHosts = [
    "api.gamemonetize.com/sdk.js",
    "doubleclick.net",
    "googlesyndication.com",
    "googleadservices.com",
    "google-analytics.com",
    "googletagmanager.com",
    "eponesh.com",
    "gs.eponesh.com",
    "gamepush.com",
    "crazygames.com/ads",
    "gamedistribution.com",
    "cloudflareinsights.com",
  ];

  function isAdUrl(url) {
    if (!url) return false;
    var s = String(url).toLowerCase();
    return adHosts.some(function (h) {
      return s.indexOf(h) !== -1;
    });
  }

  window.sdk = window.sdk || {
    showBanner: noop,
    showAd: noop,
    preloadAd: noop,
    showFullscreen: noopPromise,
    showRewarded: noopPromise,
  };

  window.SDK_OPTIONS = window.SDK_OPTIONS || {
    gameId: "",
    onEvent: function (event) {
      if (!event || !event.name) return;
      if (event.name === "SDK_GAME_START" && window.SendMessage) {
        try {
          window.SendMessage("GameMonetize", "ResumeGame");
        } catch (e) {}
      }
    },
  };

  function hookAdSDKs() {
    if (window.sdk) {
      window.sdk.showBanner = noop;
      window.sdk.showAd = noop;
      window.sdk.preloadAd = noop;
      window.sdk.showFullscreen = noopPromise;
      window.sdk.showRewarded = noopPromise;
    }

    if (window.YYGGames) {
      window.YYGGames.showInterstitial = instantAdDone;
      window.YYGGames.showReward = instantAdDone;
      window.YYGGames.showBanner = noop;
      window.YYGGames.showAd = noop;
      if (window.YYGGames.sdk) {
        window.YYGGames.sdk.showInterstitial = instantAdDone;
        window.YYGGames.sdk.showReward = instantAdDone;
      }
    }

    if (window.lg) {
      window.lg.showAd = instantAdDone;
      window.lg.showInterstitial = instantAdDone;
      window.lg.showRewarded = instantAdDone;
      window.lg.showRewardedAd = instantAdDone;
      window.lg.preloadAd = noopPromise;
      if (!window.lg._initWrapped && typeof window.lg.initSDKFunctions === "function") {
        var origLgInit = window.lg.initSDKFunctions;
        window.lg.initSDKFunctions = function () {
          try {
            origLgInit.apply(this, arguments);
          } catch (e) {}
          window.lg.showAd = instantAdDone;
          window.lg.showInterstitial = instantAdDone;
          window.lg.showRewarded = instantAdDone;
          window.lg.showRewardedAd = instantAdDone;
          window.lg.preloadAd = noopPromise;
        };
        window.lg._initWrapped = true;
      }
    }
  }

  hookAdSDKs();
  setInterval(hookAdSDKs, 500);

  var origCreateElement = document.createElement.bind(document);
  document.createElement = function (tag) {
    var el = origCreateElement(tag);
    if (String(tag).toLowerCase() === "script") {
      var desc = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, "src");
      if (desc && desc.set) {
        var origSet = desc.set;
        Object.defineProperty(el, "src", {
          set: function (v) {
            if (isAdUrl(v)) return;
            origSet.call(this, v);
          },
          get: function () {
            return this.getAttribute("src") || "";
          },
        });
      }
    }
    return el;
  };

  var origFetch = window.fetch;
  if (origFetch) {
    window.fetch = function (input, init) {
      var url = typeof input === "string" ? input : input && input.url;
      if (isAdUrl(url)) return Promise.resolve(new Response("{}", { status: 200 }));
      return origFetch.apply(this, arguments);
    };
  }

  var origOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url) {
    if (isAdUrl(url)) {
      this._blockedAd = true;
      url = "data:text/plain,blocked";
    }
    return origOpen.apply(this, arguments);
  };

  var origSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function () {
    if (this._blockedAd) {
      var self = this;
      setTimeout(function () {
        Object.defineProperty(self, "status", { value: 200 });
        Object.defineProperty(self, "responseText", { value: "{}" });
        if (self.onload) self.onload();
        if (self.onreadystatechange) {
          self.readyState = 4;
          self.onreadystatechange();
        }
      }, 0);
      return;
    }
    return origSend.apply(this, arguments);
  };

  var hookSendMessage = function () {
    if (typeof window.SendMessage !== "function" || window.SendMessage._adFree) return;
    var orig = window.SendMessage;
    window.SendMessage = function (obj, method, value) {
      if (obj === "GameMonetize") {
        if (method === "PauseGame" || method === "QuitGame") {
          if (method === "PauseGame") {
            setTimeout(function () {
              orig("GameMonetize", "ResumeGame");
            }, 0);
          }
          return;
        }
      }
      return orig.apply(this, arguments);
    };
    window.SendMessage._adFree = true;
  };

  hookSendMessage();
  setInterval(hookSendMessage, 500);
})();
