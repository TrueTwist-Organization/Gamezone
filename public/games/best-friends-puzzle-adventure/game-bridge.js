(function () {
  window.SDK_OPTIONS = {
    gameId: "local",
    onEvent: function (event) {
      if (!event || !event.name) return;
      if (event.name === "SDK_GAME_START" && window.game) {
        game.sound.mute = false;
        game.paused = false;
      }
      if (event.name === "SDK_GAME_PAUSE" && window.game) {
        game.sound.mute = true;
      }
    },
  };

  setTimeout(function () {
    if (window.SDK_OPTIONS && typeof window.SDK_OPTIONS.onEvent === "function") {
      window.SDK_OPTIONS.onEvent({ name: "SDK_GAME_START" });
    }
  }, 100);
})();
