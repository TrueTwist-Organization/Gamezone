(function(){
function noop(){};function invoke(cb,p){if(typeof cb==="function")cb(p||{type:3});}
window.TDGA=new Proxy({},{get:function(){return noop;}});
window.JumpGame={startup:function(){}};
window.h5splash=window.h5splash||{init:function(){},hideLoading:function(){},setBackgroundColor:function(){},setGameLogoScale:function(){},setProgressBackgroundColor:function(){},setProgressValueColor:function(){},setProgressBorderColor:function(){}};
window.vigoo={Login:function(cb){setTimeout(function(){invoke(cb,{appid:"local",openid:"local-player",token:"local"});},100);},
HideLoading:function(){},ShowBannerAdv:function(){},HideBannerAdv:function(){},
ShowExcitationVideoAdv:function(cb){invoke(cb);},ShowScreenVideo:function(_,cb){invoke(cb);},ShowTitleAdv:function(cb){invoke(cb);}};
window.bundle=window.bundle||{init:function(){return Promise.resolve();}};
window.YYGGames=window.YYGGames||{assetManager:{enableVersionControl:function(){return Promise.resolve();}},init:function(){},start:function(){},showReward:function(cb){cb&&cb();},setAppName:function(){},setConfig:function(){},disbaleStorage:function(){},
showLoadingSourceScene:function(){},onLoadingFinished:function(){},assetManager:{enableVersionControl:function(){return Promise.resolve();}},
sdk:function(){return this;},on:function(){return this;},load:function(){return Promise.resolve();}};
window.comman=window.comman||{GameName:"",GameId:""};
window.sdk=window.sdk||{showBanner:noop,showInterstitial:noop,showReward:noop};
window.firebase=window.firebase||{initializeApp:function(){return{analytics:function(){return{logEvent:noop}}};},analytics:function(){return{logEvent:noop}}};
})();