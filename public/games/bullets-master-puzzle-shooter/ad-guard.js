(function () {
  function noop() {}
  function done(cb) {
    if (typeof cb === "function") {
      setTimeout(cb, 0);
    }
  }

  var stub = {
    showBanner: noop,
    showInterstitial: noop,
    showReward: done,
    preloadAd: function () {
      return Promise.resolve();
    },
  };

  Object.defineProperty(window, "sdk", {
    configurable: true,
    get: function () {
      return stub;
    },
    set: function (v) {
      if (v && typeof v === "object") {
        stub = Object.assign(stub, v, {
          showBanner: noop,
          showInterstitial: noop,
          showReward: done,
        });
      }
    },
  });

  window.SDK_OPTIONS = {
    gameId: "local",
    onEvent: noop,
  };

  window.showFullscrenAd = noop;
  window.show_bannerad = noop;
  window.hide_bannerad = noop;
  window.firebase = window.firebase || {
    initializeApp: function () {
      return { analytics: function () { return { logEvent: noop }; } };
    },
    analytics: function () { return { logEvent: noop }; },
  };
  window.comman = window.comman || { GameName: "", GameId: "" };
  window.firebase = window.firebase || {
    initializeApp: function () {
      return { analytics: function () { return { logEvent: noop }; } };
    },
    analytics: function () { return { logEvent: noop }; },
  };
  window.comman = window.comman || { GameName: "", GameId: "" };
  window.firebase = window.firebase || {
    initializeApp: function () {
      return { analytics: function () { return { logEvent: noop }; } };
    },
    analytics: function () { return { logEvent: noop }; },
  };
  window.comman = window.comman || { GameName: "", GameId: "" };
  window.firebase = window.firebase || {
    initializeApp: function () {
      return { analytics: function () { return { logEvent: noop }; } };
    },
    analytics: function () { return { logEvent: noop }; },
  };
  window.comman = window.comman || { GameName: "", GameId: "" };
  window.firebase = window.firebase || {
    initializeApp: function () {
      return { analytics: function () { return { logEvent: noop }; } };
    },
    analytics: function () { return { logEvent: noop }; },
  };
  window.comman = window.comman || { GameName: "", GameId: "" };
  window.firebase = window.firebase || {
    initializeApp: function () {
      return { analytics: function () { return { logEvent: noop }; } };
    },
    analytics: function () { return { logEvent: noop }; },
  };
  window.comman = window.comman || { GameName: "", GameId: "" };
  window.firebase = window.firebase || {
    initializeApp: function () {
      return { analytics: function () { return { logEvent: noop }; } };
    },
    analytics: function () { return { logEvent: noop }; },
  };
  window.comman = window.comman || { GameName: "", GameId: "" };
  window.firebase = window.firebase || {
    initializeApp: function () {
      return { analytics: function () { return { logEvent: noop }; } };
    },
    analytics: function () { return { logEvent: noop }; },
  };
  window.comman = window.comman || { GameName: "", GameId: "" };
  window.firebase = window.firebase || {
    initializeApp: function () {
      return { analytics: function () { return { logEvent: noop }; } };
    },
    analytics: function () { return { logEvent: noop }; },
  };
  window.comman = window.comman || { GameName: "", GameId: "" };
  window.firebase = window.firebase || {
    initializeApp: function () {
      return {};
    },
    analytics: function () {
      return { logEvent: noop };
    },
    remoteConfig: function () {
      return {
        settings: {},
        defaultConfig: {},
        fetchAndActivate: function () {
          return Promise.resolve(false);
        },
        getValue: function () {
          return { asNumber: function () { return 30; }, asString: function () { return ""; } };
        },
      };
    },
  };
  window.comman = window.comman || { GameName: "", GameId: "" };
  window.CheckHasAdBlock = function () {
    return false;
  };

  var blocked =
    /gamemonetize|googlesyndication|doubleclick|googleads|adsbygoogle|imasdk|gstatic\.com\/ima|gamedistribution|gamepush\.js|preload-api/i;
  var create = document.createElement.bind(document);

  document.createElement = function (tag) {
    var el = create(tag);
    if (String(tag).toLowerCase() !== "script") {
      return el;
    }
    var srcDesc = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, "src");
    if (!srcDesc) {
      return el;
    }
    Object.defineProperty(el, "src", {
      set: function (value) {
        if (value && blocked.test(String(value))) {
          return;
        }
        srcDesc.set.call(this, value);
      },
      get: function () {
        return srcDesc.get.call(this);
      },
    });
    return el;
  };
})();
