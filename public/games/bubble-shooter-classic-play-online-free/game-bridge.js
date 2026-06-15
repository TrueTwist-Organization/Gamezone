(function () {
  function noop() {}

  function invoke(callback, payload) {
    if (typeof callback === "function") {
      callback(payload || { type: 3 });
    }
  }

  window.TDGA = new Proxy(
    {},
    {
      get: function () {
        return noop;
      },
    }
  );

  window.JumpGame = {
    startup: function () {},
  };

  window.vigoo = {
    Login: function (callback) {
      setTimeout(function () {
        invoke(callback, {
          appid: "local",
          openid: "local-player",
          token: "local",
        });
      }, 100);
    },
    HideLoading: function () {},
    ShowBannerAdv: function () {},
    HideBannerAdv: function () {},
    ShowExcitationVideoAdv: function (callback) {
      invoke(callback);
    },
    ShowScreenVideo: function (_title, callback) {
      invoke(callback);
    },
    ShowTitleAdv: function (callback) {
      invoke(callback);
    },
  };
})();
