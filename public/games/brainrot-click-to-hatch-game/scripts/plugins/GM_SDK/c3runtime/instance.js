"use strict";

{
  C3.Plugins.GM_SDK.Instance = class SingleGlobalInstance extends globalThis.ISDKInstanceBase {
    constructor() {
      super();
      this._gameID = "";
      this._sdkReady = true;
      this._adPlaying = false;
      this._adViewed = false;
      this._preloadedAd = false;
    }

    Release() {
      super.Release();
    }

    SaveToJson() {
      return {};
    }

    LoadFromJson() {}

    ShowAd() {}
  };
}
