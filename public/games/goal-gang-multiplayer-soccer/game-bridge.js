(function () {
  var store = {};
  function noop() {}
  function ok(cb) {
    if (typeof cb === "function") {
      setTimeout(cb, 0);
    }
  }

  window.CrazyGames = window.CrazyGames || {
    SDK: {
      environment: "local",
      game: {
        gameplayStart: noop,
        gameplayStop: noop,
        happyTime: noop,
        loadingStart: noop,
        loadingStop: noop,
        settings: {
          addEventListener: noop,
          removeEventListener: noop,
        },
      },
      ad: {
        requestAd: function (_type, cb) {
          ok(cb);
        },
        hasAdblock: function () {
          return false;
        },
        prefetchAd: function () {
          return Promise.resolve();
        },
      },
      banner: {
        requestBanner: function (_opts) {
          return Promise.resolve({ banner: null });
        },
        refreshBanner: noop,
        clearBanner: noop,
        clearAllBanners: noop,
      },
      user: {
        getUser: function () {
          return Promise.resolve(null);
        },
        getToken: function () {
          return Promise.resolve(null);
        },
        showAuthPrompt: function () {
          return Promise.resolve(null);
        },
      },
      data: {
        getItem: function (key) {
          return Promise.resolve(Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null);
        },
        setItem: function (key, value) {
          store[key] = value;
          return Promise.resolve();
        },
        removeItem: function (key) {
          delete store[key];
          return Promise.resolve();
        },
      },
    },
    init: function () {
      return Promise.resolve(window.CrazyGames.SDK);
    },
  };

  window.sdk = window.sdk || { showBanner: noop, showInterstitial: noop, showReward: ok };
})();
