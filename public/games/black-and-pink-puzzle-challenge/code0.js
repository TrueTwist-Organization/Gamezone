gdjs.Main_95SceneCode = {};
gdjs.Main_95SceneCode.localVariables = [];
gdjs.Main_95SceneCode.GDTextObjects1= [];
gdjs.Main_95SceneCode.GDTextObjects2= [];
gdjs.Main_95SceneCode.GDNewSpriteObjects1= [];
gdjs.Main_95SceneCode.GDNewSpriteObjects2= [];
gdjs.Main_95SceneCode.GDText2Objects1= [];
gdjs.Main_95SceneCode.GDText2Objects2= [];
gdjs.Main_95SceneCode.GDAndObjects1= [];
gdjs.Main_95SceneCode.GDAndObjects2= [];
gdjs.Main_95SceneCode.GDStartObjects1= [];
gdjs.Main_95SceneCode.GDStartObjects2= [];


gdjs.Main_95SceneCode.userFunc0xb585e0 = function GDJSInlineCode(runtimeScene) {
"use strict";
if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
sdk.showBanner();
}
};
gdjs.Main_95SceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Main_95SceneCode.userFunc0xb585e0(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.Main_95SceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp"));
}
{ //Subevents
gdjs.Main_95SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Main_95SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_95SceneCode.GDTextObjects1.length = 0;
gdjs.Main_95SceneCode.GDTextObjects2.length = 0;
gdjs.Main_95SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_95SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_95SceneCode.GDText2Objects1.length = 0;
gdjs.Main_95SceneCode.GDText2Objects2.length = 0;
gdjs.Main_95SceneCode.GDAndObjects1.length = 0;
gdjs.Main_95SceneCode.GDAndObjects2.length = 0;
gdjs.Main_95SceneCode.GDStartObjects1.length = 0;
gdjs.Main_95SceneCode.GDStartObjects2.length = 0;

gdjs.Main_95SceneCode.eventsList1(runtimeScene);
gdjs.Main_95SceneCode.GDTextObjects1.length = 0;
gdjs.Main_95SceneCode.GDTextObjects2.length = 0;
gdjs.Main_95SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_95SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_95SceneCode.GDText2Objects1.length = 0;
gdjs.Main_95SceneCode.GDText2Objects2.length = 0;
gdjs.Main_95SceneCode.GDAndObjects1.length = 0;
gdjs.Main_95SceneCode.GDAndObjects2.length = 0;
gdjs.Main_95SceneCode.GDStartObjects1.length = 0;
gdjs.Main_95SceneCode.GDStartObjects2.length = 0;


return;

}

gdjs['Main_95SceneCode'] = gdjs.Main_95SceneCode;
