export const embedContentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:",
  "worker-src 'self' blob:",
  "connect-src 'self' blob: data:",
  "img-src 'self' data: blob:",
  "media-src 'self' blob: data:",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "frame-src 'none'",
  "object-src 'none'",
].join("; ");

const gamemonetizeSdkStubPath = "/embed/sdk/gamemonetize.js";

export const embedGamemonetizeSdkBootstrap = `<script>
(function () {
  if (window.__gdSdkBootstrap) return;
  window.__gdSdkBootstrap = true;

  function fireSdkReady(options) {
    if (!options || !options.onEvent || window.__gdSdkReadyFired) return;
    window.__gdSdkReadyFired = true;
    options.onEvent({ name: "AD_SDK_LOADER_READY" });
    options.onEvent({ name: "SDK_READY" });
  }

  function installStub(options) {
    if (window.gdApi) {
      fireSdkReady(options);
      return window.gdApi;
    }

    try {
      localStorage.setItem("gd_tag", "");
      localStorage.setItem("gd_midroll", "0");
    } catch (e) {}

    function EventBus() {
      this.listeners = [];
      this.gameId = options && options.gameId ? options.gameId : "";
    }
    EventBus.prototype.subscribe = function (event, cb) {
      this.listeners.push({ event: event, cb: cb });
    };
    EventBus.prototype.broadcast = function (event, data) {
      for (var i = 0; i < this.listeners.length; i++) {
        if (this.listeners[i].event === event) this.listeners[i].cb(data);
      }
    };

    function GdApi(opts) {
      this.options = opts || {};
      this.whitelabelPartner = null;
      this.eventBus = new EventBus();
      this.adRequestTimer = null;
      this.videoAdInstance = null;
      this.readyPromise = Promise.resolve(this);
    }

    GdApi.prototype.showBanner = function () {
      var opts = this.options;
      if (!opts || !opts.onEvent) return;
      opts.onEvent({ name: "SDK_GAME_PAUSE" });
      opts.onEvent({ name: "COMPLETE" });
      opts.onEvent({ name: "SDK_GAME_START" });
    };
    GdApi.prototype.play = function () {};
    GdApi.prototype.onResumeGame = function (cb) {
      if (typeof cb === "function") cb();
    };
    GdApi.prototype.onPauseGame = function () {};
    GdApi.prototype.customLog = function () {};
    GdApi.prototype.openConsole = function () {};

    var api = new GdApi(options);
    window.gdApi = api;
    window.sdk = api;
    fireSdkReady(options);
    return api;
  }

  window.__installGameMonetizeSdkStub = installStub;

  var currentOptions = window.SDK_OPTIONS;
  if (currentOptions) installStub(currentOptions);

  var storedOptions = currentOptions;
  Object.defineProperty(window, "SDK_OPTIONS", {
    configurable: true,
    enumerable: true,
    get: function () {
      return storedOptions;
    },
    set: function (value) {
      storedOptions = value;
      installStub(value);
    },
  });
})();
</script>`;

export const embedAdBlockerScript = `<script>
(function () {
  var sdkStub = "${gamemonetizeSdkStubPath}";
  var blocked = /doubleclick|googlesyndication|googletagmanager|google-analytics|imasdk|adservice|adsystem|adnxs|taboola|outbrain|pubads|gampad|goog_\\d+/i;
  var gamemonetizeBlock =
    /gamemonetize|api\\.gamemonetize\\.com|html5\\.gamemonetize/i;

  function normalizeScriptUrl(value) {
    if (typeof value !== "string") return value;
    if (/api\\.gamemonetize\\.com\\/sdk\\.js/i.test(value)) return sdkStub;
    if (value.indexOf("//api.gamemonetize.com/sdk.js") !== -1) return sdkStub;
    return value;
  }

  function isBlocked(value) {
    if (typeof value !== "string") return false;
    if (/api\\.gamemonetize\\.com\\/sdk\\.js/i.test(value)) return false;
    if (value.indexOf("//api.gamemonetize.com/sdk.js") !== -1) return false;
    return blocked.test(value) || gamemonetizeBlock.test(value);
  }

  function patchSetter(proto, prop) {
    var desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (!desc || !desc.set) return;
    Object.defineProperty(proto, prop, {
      set: function (value) {
        value = normalizeScriptUrl(value);
        if (isBlocked(value)) return;
        desc.set.call(this, value);
      },
      get: desc.get,
      configurable: true,
    });
  }

  patchSetter(HTMLScriptElement.prototype, "src");
  patchSetter(HTMLIFrameElement.prototype, "src");
})();
</script>`;

export const gamemonetizeSdkStubSource = `(function () {
  if (typeof window.__installGameMonetizeSdkStub === "function") {
    window.__installGameMonetizeSdkStub(window.SDK_OPTIONS);
    return;
  }
  if (window.SDK_OPTIONS && typeof window.SDK_OPTIONS.onEvent === "function") {
    window.SDK_OPTIONS.onEvent({ name: "AD_SDK_LOADER_READY" });
    window.SDK_OPTIONS.onEvent({ name: "SDK_READY" });
  }
})();`;

const adUrlPattern =
  /https?:\/\/(?:api\.gamemonetize\.com|imasdk\.googleapis\.com|pagead2\.googlesyndication\.com|www\.googletagmanager\.com|www\.google-analytics\.com|(?:www\.)?gamemonetize\.com|pubads\.g\.doubleclick\.net)[^"'\\s]*/gi;

export function sanitizeEmbeddedJavaScript(source: string): string {
  if (!/gamemonetize|imasdk|doubleclick|googlesyndication/i.test(source)) {
    return source;
  }

  return source.replace(adUrlPattern, "");
}
