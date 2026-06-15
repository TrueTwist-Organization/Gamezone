gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.GDBallObjects3_1final = [];

gdjs.GameCode.GDMouseTrackObjects1_1final = [];

gdjs.GameCode.forEachIndex3 = 0;

gdjs.GameCode.forEachIndex4 = 0;

gdjs.GameCode.forEachObjects3 = [];

gdjs.GameCode.forEachObjects4 = [];

gdjs.GameCode.forEachTemporary3 = null;

gdjs.GameCode.forEachTemporary4 = null;

gdjs.GameCode.forEachTotalCount3 = 0;

gdjs.GameCode.forEachTotalCount4 = 0;

gdjs.GameCode.GDBallFieldObjects1= [];
gdjs.GameCode.GDBallFieldObjects2= [];
gdjs.GameCode.GDBallFieldObjects3= [];
gdjs.GameCode.GDBallFieldObjects4= [];
gdjs.GameCode.GDBallFieldObjects5= [];
gdjs.GameCode.GDBallExtendedFieldObjects1= [];
gdjs.GameCode.GDBallExtendedFieldObjects2= [];
gdjs.GameCode.GDBallExtendedFieldObjects3= [];
gdjs.GameCode.GDBallExtendedFieldObjects4= [];
gdjs.GameCode.GDBallExtendedFieldObjects5= [];
gdjs.GameCode.GDBallObjects1= [];
gdjs.GameCode.GDBallObjects2= [];
gdjs.GameCode.GDBallObjects3= [];
gdjs.GameCode.GDBallObjects4= [];
gdjs.GameCode.GDBallObjects5= [];
gdjs.GameCode.GDBorderObjects1= [];
gdjs.GameCode.GDBorderObjects2= [];
gdjs.GameCode.GDBorderObjects3= [];
gdjs.GameCode.GDBorderObjects4= [];
gdjs.GameCode.GDBorderObjects5= [];
gdjs.GameCode.GDMouseTrackObjects1= [];
gdjs.GameCode.GDMouseTrackObjects2= [];
gdjs.GameCode.GDMouseTrackObjects3= [];
gdjs.GameCode.GDMouseTrackObjects4= [];
gdjs.GameCode.GDMouseTrackObjects5= [];
gdjs.GameCode.GDExplosionObjects1= [];
gdjs.GameCode.GDExplosionObjects2= [];
gdjs.GameCode.GDExplosionObjects3= [];
gdjs.GameCode.GDExplosionObjects4= [];
gdjs.GameCode.GDExplosionObjects5= [];
gdjs.GameCode.GDTerritoryFieldObjects1= [];
gdjs.GameCode.GDTerritoryFieldObjects2= [];
gdjs.GameCode.GDTerritoryFieldObjects3= [];
gdjs.GameCode.GDTerritoryFieldObjects4= [];
gdjs.GameCode.GDTerritoryFieldObjects5= [];
gdjs.GameCode.GDDeathIconObjects1= [];
gdjs.GameCode.GDDeathIconObjects2= [];
gdjs.GameCode.GDDeathIconObjects3= [];
gdjs.GameCode.GDDeathIconObjects4= [];
gdjs.GameCode.GDDeathIconObjects5= [];
gdjs.GameCode.GDDeathsLabelObjects1= [];
gdjs.GameCode.GDDeathsLabelObjects2= [];
gdjs.GameCode.GDDeathsLabelObjects3= [];
gdjs.GameCode.GDDeathsLabelObjects4= [];
gdjs.GameCode.GDDeathsLabelObjects5= [];
gdjs.GameCode.GDLevelIconObjects1= [];
gdjs.GameCode.GDLevelIconObjects2= [];
gdjs.GameCode.GDLevelIconObjects3= [];
gdjs.GameCode.GDLevelIconObjects4= [];
gdjs.GameCode.GDLevelIconObjects5= [];
gdjs.GameCode.GDLevelObjects1= [];
gdjs.GameCode.GDLevelObjects2= [];
gdjs.GameCode.GDLevelObjects3= [];
gdjs.GameCode.GDLevelObjects4= [];
gdjs.GameCode.GDLevelObjects5= [];
gdjs.GameCode.GDCompletionObjects1= [];
gdjs.GameCode.GDCompletionObjects2= [];
gdjs.GameCode.GDCompletionObjects3= [];
gdjs.GameCode.GDCompletionObjects4= [];
gdjs.GameCode.GDCompletionObjects5= [];
gdjs.GameCode.GDFadingTerritoryFieldObjects1= [];
gdjs.GameCode.GDFadingTerritoryFieldObjects2= [];
gdjs.GameCode.GDFadingTerritoryFieldObjects3= [];
gdjs.GameCode.GDFadingTerritoryFieldObjects4= [];
gdjs.GameCode.GDFadingTerritoryFieldObjects5= [];
gdjs.GameCode.GDFloodFieldObjects1= [];
gdjs.GameCode.GDFloodFieldObjects2= [];
gdjs.GameCode.GDFloodFieldObjects3= [];
gdjs.GameCode.GDFloodFieldObjects4= [];
gdjs.GameCode.GDFloodFieldObjects5= [];
gdjs.GameCode.GDInstructionObjects1= [];
gdjs.GameCode.GDInstructionObjects2= [];
gdjs.GameCode.GDInstructionObjects3= [];
gdjs.GameCode.GDInstructionObjects4= [];
gdjs.GameCode.GDInstructionObjects5= [];
gdjs.GameCode.GDCursorObjects1= [];
gdjs.GameCode.GDCursorObjects2= [];
gdjs.GameCode.GDCursorObjects3= [];
gdjs.GameCode.GDCursorObjects4= [];
gdjs.GameCode.GDCursorObjects5= [];


gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects1});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("SwappedColor", variable);
}
gdjs.GameCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadingTerritoryField"), gdjs.GameCode.GDFadingTerritoryFieldObjects1);
/* Reuse gdjs.GameCode.GDTerritoryFieldObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDFadingTerritoryFieldObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFadingTerritoryFieldObjects1[i].setFillColor(runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}
}{gdjs.GameCode.localVariables[0].getFromIndex(0).setString(runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}{runtimeScene.getScene().getVariables().getFromIndex(4).setString(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString());
}{runtimeScene.getScene().getVariables().getFromIndex(5).setString(gdjs.GameCode.localVariables[0].getFromIndex(0).getAsString());
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}{for(var i = 0, len = gdjs.GameCode.GDTerritoryFieldObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTerritoryFieldObjects1[i].setFillColor(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString());
}
}{for(var i = 0, len = gdjs.GameCode.GDTerritoryFieldObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTerritoryFieldObjects1[i].setFillOpacity(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDFadingTerritoryFieldObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFadingTerritoryFieldObjects1[i].returnVariable(gdjs.GameCode.GDFadingTerritoryFieldObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.GameCode.GDFadingTerritoryFieldObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFadingTerritoryFieldObjects1[i].resetTimer("LevelFading");
}
}}
gdjs.GameCode.localVariables.pop();

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Completion"), gdjs.GameCode.GDCompletionObjects1);
gdjs.copyArray(runtimeScene.getObjects("DeathsLabel"), gdjs.GameCode.GDDeathsLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("Explosion"), gdjs.GameCode.GDExplosionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Level"), gdjs.GameCode.GDLevelObjects1);
gdjs.copyArray(runtimeScene.getObjects("TerritoryField"), gdjs.GameCode.GDTerritoryFieldObjects1);
{for(var i = 0, len = gdjs.GameCode.GDTerritoryFieldObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTerritoryFieldObjects1[i].getBehavior("Territory").Initialize((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].addPolarForce(gdjs.randomFloatInRange(0, 360), 100, 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDCompletionObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCompletionObjects1[i].getBehavior("Text").setText("0%");
}
}{for(var i = 0, len = gdjs.GameCode.GDLevelObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLevelObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.object.pickedObjectsCount(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects1Objects)));
}
}{for(var i = 0, len = gdjs.GameCode.GDDeathsLabelObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDeathsLabelObjects1[i].getBehavior("Text").setText("0");
}
}{for(var i = 0, len = gdjs.GameCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDExplosionObjects1[i].stopEmission();
}
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDExplosionObjects3Objects = Hashtable.newFrom({"Explosion": gdjs.GameCode.GDExplosionObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallFieldObjects2Objects = Hashtable.newFrom({"BallField": gdjs.GameCode.GDBallFieldObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDExplosionObjects2Objects = Hashtable.newFrom({"Explosion": gdjs.GameCode.GDExplosionObjects2});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.GameCode.GDMouseTrackObjects2, gdjs.GameCode.GDMouseTrackObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMouseTrackObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDMouseTrackObjects3[i].getBehavior("PathPainter").VertexIsAdded((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMouseTrackObjects3[k] = gdjs.GameCode.GDMouseTrackObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDMouseTrackObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMouseTrackObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDMouseTrackObjects3[i].getBehavior("PathPainter").HasIntersection((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMouseTrackObjects3[k] = gdjs.GameCode.GDMouseTrackObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDMouseTrackObjects3.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DeathsLabel"), gdjs.GameCode.GDDeathsLabelObjects3);
gdjs.copyArray(runtimeScene.getObjects("Explosion"), gdjs.GameCode.GDExplosionObjects3);
/* Reuse gdjs.GameCode.GDMouseTrackObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDMouseTrackObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDMouseTrackObjects3[i].getBehavior("PathPainter").Abort((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDDeathsLabelObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDDeathsLabelObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(3).getAsString());
}
}{for(var i = 0, len = gdjs.GameCode.GDExplosionObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDExplosionObjects3[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDExplosionObjects3Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BallField"), gdjs.GameCode.GDBallFieldObjects2);
/* Reuse gdjs.GameCode.GDMouseTrackObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMouseTrackObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMouseTrackObjects2[i].getBehavior("PathPainter").HasIntersectionWithBall(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallFieldObjects2Objects, "MarchingSquaresBehavior", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMouseTrackObjects2[k] = gdjs.GameCode.GDMouseTrackObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMouseTrackObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DeathsLabel"), gdjs.GameCode.GDDeathsLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("Explosion"), gdjs.GameCode.GDExplosionObjects2);
/* Reuse gdjs.GameCode.GDMouseTrackObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDMouseTrackObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMouseTrackObjects2[i].getBehavior("PathPainter").Abort((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDDeathsLabelObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDeathsLabelObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(3).getAsString());
}
}{for(var i = 0, len = gdjs.GameCode.GDExplosionObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDExplosionObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDExplosionObjects2Objects, (( gdjs.GameCode.GDMouseTrackObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDMouseTrackObjects2[0].getBehavior("PathPainter").IntersectionX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (( gdjs.GameCode.GDMouseTrackObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDMouseTrackObjects2[0].getBehavior("PathPainter").IntersectionY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), "");
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDExplosionObjects2Objects = Hashtable.newFrom({"Explosion": gdjs.GameCode.GDExplosionObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTerritoryFieldObjects3Objects = Hashtable.newFrom({"TerritoryField": gdjs.GameCode.GDTerritoryFieldObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTerritoryFieldObjects3Objects = Hashtable.newFrom({"TerritoryField": gdjs.GameCode.GDTerritoryFieldObjects3});
gdjs.GameCode.eventsList3 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFloodFieldObjects3Objects = Hashtable.newFrom({"FloodField": gdjs.GameCode.GDFloodFieldObjects3});
gdjs.GameCode.userFunc0xb60340 = function GDJSInlineCode(runtimeScene) {
"use strict";
if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
sdk.showBanner();
}
};
gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameCode.userFunc0xb60340(runtimeScene);

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTerritoryFieldObjects3Objects = Hashtable.newFrom({"TerritoryField": gdjs.GameCode.GDTerritoryFieldObjects3});
gdjs.GameCode.eventsList5 = function(runtimeScene) {

{



}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("SwappedColor", variable);
}
gdjs.GameCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadingTerritoryField"), gdjs.GameCode.GDFadingTerritoryFieldObjects4);
gdjs.copyArray(gdjs.GameCode.GDTerritoryFieldObjects2, gdjs.GameCode.GDTerritoryFieldObjects4);

{for(var i = 0, len = gdjs.GameCode.GDFadingTerritoryFieldObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDFadingTerritoryFieldObjects4[i].setFillColor(runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}
}{gdjs.GameCode.localVariables[0].getFromIndex(0).setString(runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}{runtimeScene.getScene().getVariables().getFromIndex(4).setString(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString());
}{runtimeScene.getScene().getVariables().getFromIndex(5).setString(gdjs.GameCode.localVariables[0].getFromIndex(0).getAsString());
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}{for(var i = 0, len = gdjs.GameCode.GDTerritoryFieldObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDTerritoryFieldObjects4[i].setFillColor(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString());
}
}{for(var i = 0, len = gdjs.GameCode.GDTerritoryFieldObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDTerritoryFieldObjects4[i].setFillOpacity(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDFadingTerritoryFieldObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDFadingTerritoryFieldObjects4[i].returnVariable(gdjs.GameCode.GDFadingTerritoryFieldObjects4[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.GameCode.GDFadingTerritoryFieldObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDFadingTerritoryFieldObjects4[i].resetTimer("LevelFading");
}
}}
gdjs.GameCode.localVariables.pop();

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Completion"), gdjs.GameCode.GDCompletionObjects3);
gdjs.copyArray(runtimeScene.getObjects("FadingTerritoryField"), gdjs.GameCode.GDFadingTerritoryFieldObjects3);
gdjs.copyArray(gdjs.GameCode.GDTerritoryFieldObjects2, gdjs.GameCode.GDTerritoryFieldObjects3);

{for(var i = 0, len = gdjs.GameCode.GDFadingTerritoryFieldObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDFadingTerritoryFieldObjects3[i].getBehavior("MarchingSquaresBehavior").ClearField((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDFadingTerritoryFieldObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDFadingTerritoryFieldObjects3[i].getBehavior("MarchingSquaresBehavior").MergeField(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTerritoryFieldObjects3Objects, "MarchingSquaresBehavior", "Addition", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDFadingTerritoryFieldObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDFadingTerritoryFieldObjects3[i].clear();
}
}{for(var i = 0, len = gdjs.GameCode.GDFadingTerritoryFieldObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDFadingTerritoryFieldObjects3[i].getBehavior("MarchingSquaresBehavior").DrawField((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDTerritoryFieldObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTerritoryFieldObjects3[i].getBehavior("Territory").Initialize((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDCompletionObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCompletionObjects3[i].getBehavior("Text").setText("0%");
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects4Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects4Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects4});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDBallObjects3 */

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDBallObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDBallObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDBallObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDBallObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.GameCode.GDBallObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDBallObjects4[0].getWidth()) > gdjs.GameCode.localVariables[0].getFromIndex(3).getAsNumber());
}
if (isConditionTrue_0) {
{gdjs.GameCode.localVariables[0].getFromIndex(2).setNumber((( gdjs.GameCode.GDBallObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDBallObjects4[0].getAverageForce().getAngle()));
}{gdjs.GameCode.localVariables[0].getFromIndex(0).setNumber((( gdjs.GameCode.GDBallObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDBallObjects4[0].getPointX("")));
}{gdjs.GameCode.localVariables[0].getFromIndex(1).setNumber((( gdjs.GameCode.GDBallObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDBallObjects4[0].getPointY("")));
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects4Objects, gdjs.GameCode.localVariables[0].getFromIndex(0).getAsNumber(), gdjs.GameCode.localVariables[0].getFromIndex(1).getAsNumber(), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects4Objects, gdjs.GameCode.localVariables[0].getFromIndex(0).getAsNumber(), gdjs.GameCode.localVariables[0].getFromIndex(1).getAsNumber(), "");
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].getBehavior("Resizable").setWidth(gdjs.GameCode.localVariables[0].getFromIndex(3).getAsNumber());
}
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].getBehavior("Resizable").setHeight(gdjs.GameCode.localVariables[0].getFromIndex(3).getAsNumber());
}
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects4[i].addPolarForce(gdjs.GameCode.localVariables[0].getFromIndex(2).getAsNumber() + gdjs.randomFloatInRange(-(15), 15), 100, 1);
}
}}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects2});
gdjs.GameCode.eventsList8 = function(runtimeScene) {

{

gdjs.GameCode.GDBallObjects3.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDBallObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects4);
for (var i = 0, k = 0, l = gdjs.GameCode.GDBallObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDBallObjects4[i].getX() < 0 ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDBallObjects4[k] = gdjs.GameCode.GDBallObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDBallObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDBallObjects4.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDBallObjects3_1final.indexOf(gdjs.GameCode.GDBallObjects4[j]) === -1 )
            gdjs.GameCode.GDBallObjects3_1final.push(gdjs.GameCode.GDBallObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects4);
for (var i = 0, k = 0, l = gdjs.GameCode.GDBallObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDBallObjects4[i].getX() > gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDBallObjects4[k] = gdjs.GameCode.GDBallObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDBallObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDBallObjects4.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDBallObjects3_1final.indexOf(gdjs.GameCode.GDBallObjects4[j]) === -1 )
            gdjs.GameCode.GDBallObjects3_1final.push(gdjs.GameCode.GDBallObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects4);
for (var i = 0, k = 0, l = gdjs.GameCode.GDBallObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDBallObjects4[i].getY() < 0 ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDBallObjects4[k] = gdjs.GameCode.GDBallObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDBallObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDBallObjects4.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDBallObjects3_1final.indexOf(gdjs.GameCode.GDBallObjects4[j]) === -1 )
            gdjs.GameCode.GDBallObjects3_1final.push(gdjs.GameCode.GDBallObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects4);
for (var i = 0, k = 0, l = gdjs.GameCode.GDBallObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDBallObjects4[i].getY() > gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDBallObjects4[k] = gdjs.GameCode.GDBallObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDBallObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDBallObjects4.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDBallObjects3_1final.indexOf(gdjs.GameCode.GDBallObjects4[j]) === -1 )
            gdjs.GameCode.GDBallObjects3_1final.push(gdjs.GameCode.GDBallObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDBallObjects3_1final, gdjs.GameCode.GDBallObjects3);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBallObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDBallObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}}

}


{



}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("OriginalBallX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("OriginalBallY", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("OriginalBallAngle", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("NewBallDiameter", variable);
}
gdjs.GameCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects3);
{gdjs.GameCode.localVariables[0].getFromIndex(3).setNumber((( gdjs.GameCode.GDBallObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDBallObjects3[0].getWidth()) / Math.sqrt(2));
}
{ //Subevents
gdjs.GameCode.eventsList7(runtimeScene);} //End of subevents
}
gdjs.GameCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Level"), gdjs.GameCode.GDLevelObjects2);
{for(var i = 0, len = gdjs.GameCode.GDLevelObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDLevelObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.object.pickedObjectsCount(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects)));
}
}}

}


};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp") - runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() > 18000);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList8(runtimeScene);
}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.GameCode.GDMouseTrackObjects2, gdjs.GameCode.GDMouseTrackObjects3);

gdjs.copyArray(gdjs.GameCode.GDTerritoryFieldObjects1, gdjs.GameCode.GDTerritoryFieldObjects3);

{for(var i = 0, len = gdjs.GameCode.GDMouseTrackObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDMouseTrackObjects3[i].getBehavior("PathPainter").DrawPathOnField(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTerritoryFieldObjects3Objects, "MarchingSquaresBehavior", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{



}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FloodField"), gdjs.GameCode.GDFloodFieldObjects3);
gdjs.copyArray(gdjs.GameCode.GDTerritoryFieldObjects1, gdjs.GameCode.GDTerritoryFieldObjects3);

{for(var i = 0, len = gdjs.GameCode.GDFloodFieldObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDFloodFieldObjects3[i].getBehavior("MarchingSquaresBehavior").ClearField((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDFloodFieldObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDFloodFieldObjects3[i].getBehavior("MarchingSquaresBehavior").MergeField(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTerritoryFieldObjects3Objects, "MarchingSquaresBehavior", "Addition", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDBallObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.copyArray(runtimeScene.getObjects("FloodField"), gdjs.GameCode.GDFloodFieldObjects4);
gdjs.GameCode.GDBallObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDBallObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDBallObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.GameCode.GDFloodFieldObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDFloodFieldObjects4[i].getBehavior("MarchingSquaresBehavior").FloodFrom((( gdjs.GameCode.GDBallObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDBallObjects4[0].getPointX("")), (( gdjs.GameCode.GDBallObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDBallObjects4[0].getPointY("")), 1, 20, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FloodField"), gdjs.GameCode.GDFloodFieldObjects3);
gdjs.copyArray(gdjs.GameCode.GDTerritoryFieldObjects1, gdjs.GameCode.GDTerritoryFieldObjects3);

{for(var i = 0, len = gdjs.GameCode.GDFloodFieldObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDFloodFieldObjects3[i].getBehavior("MarchingSquaresBehavior").TransformField(-(1), 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDTerritoryFieldObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTerritoryFieldObjects3[i].getBehavior("MarchingSquaresBehavior").MergeField(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFloodFieldObjects3Objects, "MarchingSquaresBehavior", "Maximum", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Completion"), gdjs.GameCode.GDCompletionObjects3);
gdjs.copyArray(gdjs.GameCode.GDTerritoryFieldObjects1, gdjs.GameCode.GDTerritoryFieldObjects3);

{for(var i = 0, len = gdjs.GameCode.GDTerritoryFieldObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTerritoryFieldObjects3[i].getBehavior("MarchingSquaresBehavior").UpdateHitboxes((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDTerritoryFieldObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTerritoryFieldObjects3[i].clear();
}
}{for(var i = 0, len = gdjs.GameCode.GDTerritoryFieldObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTerritoryFieldObjects3[i].getBehavior("MarchingSquaresBehavior").DrawField((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDCompletionObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCompletionObjects3[i].getBehavior("Text").setText(gdjs.evtTools.common.toString((( gdjs.GameCode.GDTerritoryFieldObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDTerritoryFieldObjects3[0].getBehavior("Territory").Completion((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) + "%");
}
}}

}


{



}


{

gdjs.copyArray(gdjs.GameCode.GDTerritoryFieldObjects1, gdjs.GameCode.GDTerritoryFieldObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.GameCode.GDTerritoryFieldObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDTerritoryFieldObjects2[0].getBehavior("Territory").Completion((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) >= 80);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMouseTrackObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDMouseTrackObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMouseTrackObjects2[i].getBehavior("PathPainter").Abort((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDMouseTrackObjects1, gdjs.GameCode.GDMouseTrackObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMouseTrackObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMouseTrackObjects2[i].getBehavior("PathPainter").PathIsLongEnough((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMouseTrackObjects2[k] = gdjs.GameCode.GDMouseTrackObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMouseTrackObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameCode.GDMouseTrackObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDMouseTrackObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMouseTrackObjects1[i].getBehavior("PathPainter").Reset((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.GameCode.eventsList12 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("MouseTrack"), gdjs.GameCode.GDMouseTrackObjects2);
gdjs.copyArray(runtimeScene.getObjects("TerritoryField"), gdjs.GameCode.GDTerritoryFieldObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMouseTrackObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMouseTrackObjects2[i].getBehavior("PathPainter").PathIsDone((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMouseTrackObjects2[k] = gdjs.GameCode.GDMouseTrackObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMouseTrackObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTerritoryFieldObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDTerritoryFieldObjects2[i].getBehavior("MarchingSquaresBehavior").ContainsPoint(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTerritoryFieldObjects2[k] = gdjs.GameCode.GDTerritoryFieldObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDTerritoryFieldObjects2.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DeathsLabel"), gdjs.GameCode.GDDeathsLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("Explosion"), gdjs.GameCode.GDExplosionObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDDeathsLabelObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDeathsLabelObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(3).getAsString());
}
}{for(var i = 0, len = gdjs.GameCode.GDExplosionObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDExplosionObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDExplosionObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("TerritoryField"), gdjs.GameCode.GDTerritoryFieldObjects1);
gdjs.GameCode.GDMouseTrackObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDMouseTrackObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MouseTrack"), gdjs.GameCode.GDMouseTrackObjects2);
for (var i = 0, k = 0, l = gdjs.GameCode.GDMouseTrackObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMouseTrackObjects2[i].getBehavior("PathPainter").PathIsDone((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDMouseTrackObjects2[k] = gdjs.GameCode.GDMouseTrackObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMouseTrackObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDMouseTrackObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDMouseTrackObjects1_1final.indexOf(gdjs.GameCode.GDMouseTrackObjects2[j]) === -1 )
            gdjs.GameCode.GDMouseTrackObjects1_1final.push(gdjs.GameCode.GDMouseTrackObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("MouseTrack"), gdjs.GameCode.GDMouseTrackObjects2);
for (var i = 0, k = 0, l = gdjs.GameCode.GDMouseTrackObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMouseTrackObjects2[i].getBehavior("PathPainter").VertexIsAdded((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDMouseTrackObjects2[k] = gdjs.GameCode.GDMouseTrackObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMouseTrackObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDMouseTrackObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDMouseTrackObjects1_1final.indexOf(gdjs.GameCode.GDMouseTrackObjects2[j]) === -1 )
            gdjs.GameCode.GDMouseTrackObjects1_1final.push(gdjs.GameCode.GDMouseTrackObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDMouseTrackObjects1_1final, gdjs.GameCode.GDMouseTrackObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTerritoryFieldObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDTerritoryFieldObjects1[i].getBehavior("MarchingSquaresBehavior").ContainsPoint(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTerritoryFieldObjects1[k] = gdjs.GameCode.GDTerritoryFieldObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDTerritoryFieldObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("MouseTrack"), gdjs.GameCode.GDMouseTrackObjects2);
gdjs.copyArray(runtimeScene.getObjects("TerritoryField"), gdjs.GameCode.GDTerritoryFieldObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMouseTrackObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMouseTrackObjects2[i].getBehavior("PathPainter").PathIsStarted((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMouseTrackObjects2[k] = gdjs.GameCode.GDMouseTrackObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMouseTrackObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTerritoryFieldObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDTerritoryFieldObjects2[i].getBehavior("MarchingSquaresBehavior").ContainsPoint(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTerritoryFieldObjects2[k] = gdjs.GameCode.GDTerritoryFieldObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDTerritoryFieldObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMouseTrackObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDMouseTrackObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMouseTrackObjects2[i].getBehavior("PathPainter").Abort((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MouseTrack"), gdjs.GameCode.GDMouseTrackObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMouseTrackObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDMouseTrackObjects2[i].getBehavior("PathPainter").IsDrawingPath((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMouseTrackObjects2[k] = gdjs.GameCode.GDMouseTrackObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDMouseTrackObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.eventsList12(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTerritoryFieldObjects2Objects = Hashtable.newFrom({"TerritoryField": gdjs.GameCode.GDTerritoryFieldObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTerritoryFieldObjects2Objects = Hashtable.newFrom({"TerritoryField": gdjs.GameCode.GDTerritoryFieldObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBorderObjects2Objects = Hashtable.newFrom({"Border": gdjs.GameCode.GDBorderObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBorderObjects2Objects = Hashtable.newFrom({"Border": gdjs.GameCode.GDBorderObjects2});
gdjs.GameCode.eventsList14 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallFieldObjects1Objects = Hashtable.newFrom({"BallField": gdjs.GameCode.GDBallFieldObjects1});
gdjs.GameCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("TerritoryField"), gdjs.GameCode.GDTerritoryFieldObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTerritoryFieldObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBallObjects2 */
/* Reuse gdjs.GameCode.GDTerritoryFieldObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects2[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTerritoryFieldObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Border"), gdjs.GameCode.GDBorderObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBorderObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBallObjects2 */
/* Reuse gdjs.GameCode.GDBorderObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBallObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects2[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBorderObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BallExtendedField"), gdjs.GameCode.GDBallExtendedFieldObjects2);
gdjs.copyArray(runtimeScene.getObjects("BallField"), gdjs.GameCode.GDBallFieldObjects2);
{for(var i = 0, len = gdjs.GameCode.GDBallFieldObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBallFieldObjects2[i].getBehavior("MarchingSquaresBehavior").ClearField((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDBallExtendedFieldObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBallExtendedFieldObjects2[i].getBehavior("MarchingSquaresBehavior").ClearField((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects2);

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDBallObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("BallField"), gdjs.GameCode.GDBallFieldObjects3);
gdjs.GameCode.GDBallObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDBallObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDBallObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.GameCode.GDBallFieldObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBallFieldObjects3[i].getBehavior("MarchingSquaresBehavior").AddDisk((( gdjs.GameCode.GDBallObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDBallObjects3[0].getPointX("")), (( gdjs.GameCode.GDBallObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDBallObjects3[0].getPointY("")), (( gdjs.GameCode.GDBallObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDBallObjects3[0].getWidth()) / 2, 32, "Addition", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BallExtendedField"), gdjs.GameCode.GDBallExtendedFieldObjects1);
gdjs.copyArray(runtimeScene.getObjects("BallField"), gdjs.GameCode.GDBallFieldObjects1);
{for(var i = 0, len = gdjs.GameCode.GDBallExtendedFieldObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallExtendedFieldObjects1[i].getBehavior("MarchingSquaresBehavior").MergeField(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBallFieldObjects1Objects, "MarchingSquaresBehavior", "Maximum", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDBallFieldObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallFieldObjects1[i].getBehavior("MarchingSquaresBehavior").DrawField((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDBallExtendedFieldObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallExtendedFieldObjects1[i].getBehavior("MarchingSquaresBehavior").DrawField((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.GameCode.eventsList16 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDFadingTerritoryFieldObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFadingTerritoryFieldObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFadingTerritoryFieldObjects1[i].timerElapsedTime("LevelFading", 0.5) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFadingTerritoryFieldObjects1[k] = gdjs.GameCode.GDFadingTerritoryFieldObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFadingTerritoryFieldObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDFadingTerritoryFieldObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDFadingTerritoryFieldObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFadingTerritoryFieldObjects1[i].returnVariable(gdjs.GameCode.GDFadingTerritoryFieldObjects1[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDFadingTerritoryFieldObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFadingTerritoryFieldObjects1[i].clear();
}
}}

}


};gdjs.GameCode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FadingTerritoryField"), gdjs.GameCode.GDFadingTerritoryFieldObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFadingTerritoryFieldObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFadingTerritoryFieldObjects1[i].getVariableBoolean(gdjs.GameCode.GDFadingTerritoryFieldObjects1[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFadingTerritoryFieldObjects1[k] = gdjs.GameCode.GDFadingTerritoryFieldObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFadingTerritoryFieldObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDFadingTerritoryFieldObjects1 */
gdjs.copyArray(runtimeScene.getObjects("TerritoryField"), gdjs.GameCode.GDTerritoryFieldObjects1);
{for(var i = 0, len = gdjs.GameCode.GDFadingTerritoryFieldObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFadingTerritoryFieldObjects1[i].setFillOpacity(Math.max(0, 255 - 255 * 2 * (gdjs.GameCode.GDFadingTerritoryFieldObjects1[i].getTimerElapsedTimeInSeconds("LevelFading"))));
}
}{for(var i = 0, len = gdjs.GameCode.GDTerritoryFieldObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTerritoryFieldObjects1[i].setFillOpacity(Math.min(255, 255 * 2 * (( gdjs.GameCode.GDFadingTerritoryFieldObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDFadingTerritoryFieldObjects1[0].getTimerElapsedTimeInSeconds("LevelFading"))));
}
}{for(var i = 0, len = gdjs.GameCode.GDFadingTerritoryFieldObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFadingTerritoryFieldObjects1[i].clear();
}
}{for(var i = 0, len = gdjs.GameCode.GDTerritoryFieldObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTerritoryFieldObjects1[i].clear();
}
}{for(var i = 0, len = gdjs.GameCode.GDFadingTerritoryFieldObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFadingTerritoryFieldObjects1[i].getBehavior("MarchingSquaresBehavior").DrawField((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDTerritoryFieldObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTerritoryFieldObjects1[i].getBehavior("MarchingSquaresBehavior").DrawField((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.GameCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.GameCode.GDCursorObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCursorObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCursorObjects2[i].getX() == 14 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCursorObjects2[k] = gdjs.GameCode.GDCursorObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCursorObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCursorObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCursorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCursorObjects2[i].getBehavior("Tween").addObjectPositionTween2("intro", 121, 585, "linear", 1, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.GameCode.GDCursorObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCursorObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCursorObjects2[i].getX() == 121 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCursorObjects2[k] = gdjs.GameCode.GDCursorObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCursorObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCursorObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCursorObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCursorObjects2[i].setPosition(14,464);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TerritoryField"), gdjs.GameCode.GDTerritoryFieldObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.GameCode.GDTerritoryFieldObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDTerritoryFieldObjects1[0].getBehavior("Territory").Completion((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) > 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.GameCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Instruction"), gdjs.GameCode.GDInstructionObjects1);
{for(var i = 0, len = gdjs.GameCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCursorObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDInstructionObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDInstructionObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.eventsList19 = function(runtimeScene) {

{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList13(runtimeScene);
}


{


gdjs.GameCode.eventsList15(runtimeScene);
}


{


gdjs.GameCode.eventsList17(runtimeScene);
}


{


gdjs.GameCode.eventsList18(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main_Scene", false);
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDBallFieldObjects1.length = 0;
gdjs.GameCode.GDBallFieldObjects2.length = 0;
gdjs.GameCode.GDBallFieldObjects3.length = 0;
gdjs.GameCode.GDBallFieldObjects4.length = 0;
gdjs.GameCode.GDBallFieldObjects5.length = 0;
gdjs.GameCode.GDBallExtendedFieldObjects1.length = 0;
gdjs.GameCode.GDBallExtendedFieldObjects2.length = 0;
gdjs.GameCode.GDBallExtendedFieldObjects3.length = 0;
gdjs.GameCode.GDBallExtendedFieldObjects4.length = 0;
gdjs.GameCode.GDBallExtendedFieldObjects5.length = 0;
gdjs.GameCode.GDBallObjects1.length = 0;
gdjs.GameCode.GDBallObjects2.length = 0;
gdjs.GameCode.GDBallObjects3.length = 0;
gdjs.GameCode.GDBallObjects4.length = 0;
gdjs.GameCode.GDBallObjects5.length = 0;
gdjs.GameCode.GDBorderObjects1.length = 0;
gdjs.GameCode.GDBorderObjects2.length = 0;
gdjs.GameCode.GDBorderObjects3.length = 0;
gdjs.GameCode.GDBorderObjects4.length = 0;
gdjs.GameCode.GDBorderObjects5.length = 0;
gdjs.GameCode.GDMouseTrackObjects1.length = 0;
gdjs.GameCode.GDMouseTrackObjects2.length = 0;
gdjs.GameCode.GDMouseTrackObjects3.length = 0;
gdjs.GameCode.GDMouseTrackObjects4.length = 0;
gdjs.GameCode.GDMouseTrackObjects5.length = 0;
gdjs.GameCode.GDExplosionObjects1.length = 0;
gdjs.GameCode.GDExplosionObjects2.length = 0;
gdjs.GameCode.GDExplosionObjects3.length = 0;
gdjs.GameCode.GDExplosionObjects4.length = 0;
gdjs.GameCode.GDExplosionObjects5.length = 0;
gdjs.GameCode.GDTerritoryFieldObjects1.length = 0;
gdjs.GameCode.GDTerritoryFieldObjects2.length = 0;
gdjs.GameCode.GDTerritoryFieldObjects3.length = 0;
gdjs.GameCode.GDTerritoryFieldObjects4.length = 0;
gdjs.GameCode.GDTerritoryFieldObjects5.length = 0;
gdjs.GameCode.GDDeathIconObjects1.length = 0;
gdjs.GameCode.GDDeathIconObjects2.length = 0;
gdjs.GameCode.GDDeathIconObjects3.length = 0;
gdjs.GameCode.GDDeathIconObjects4.length = 0;
gdjs.GameCode.GDDeathIconObjects5.length = 0;
gdjs.GameCode.GDDeathsLabelObjects1.length = 0;
gdjs.GameCode.GDDeathsLabelObjects2.length = 0;
gdjs.GameCode.GDDeathsLabelObjects3.length = 0;
gdjs.GameCode.GDDeathsLabelObjects4.length = 0;
gdjs.GameCode.GDDeathsLabelObjects5.length = 0;
gdjs.GameCode.GDLevelIconObjects1.length = 0;
gdjs.GameCode.GDLevelIconObjects2.length = 0;
gdjs.GameCode.GDLevelIconObjects3.length = 0;
gdjs.GameCode.GDLevelIconObjects4.length = 0;
gdjs.GameCode.GDLevelIconObjects5.length = 0;
gdjs.GameCode.GDLevelObjects1.length = 0;
gdjs.GameCode.GDLevelObjects2.length = 0;
gdjs.GameCode.GDLevelObjects3.length = 0;
gdjs.GameCode.GDLevelObjects4.length = 0;
gdjs.GameCode.GDLevelObjects5.length = 0;
gdjs.GameCode.GDCompletionObjects1.length = 0;
gdjs.GameCode.GDCompletionObjects2.length = 0;
gdjs.GameCode.GDCompletionObjects3.length = 0;
gdjs.GameCode.GDCompletionObjects4.length = 0;
gdjs.GameCode.GDCompletionObjects5.length = 0;
gdjs.GameCode.GDFadingTerritoryFieldObjects1.length = 0;
gdjs.GameCode.GDFadingTerritoryFieldObjects2.length = 0;
gdjs.GameCode.GDFadingTerritoryFieldObjects3.length = 0;
gdjs.GameCode.GDFadingTerritoryFieldObjects4.length = 0;
gdjs.GameCode.GDFadingTerritoryFieldObjects5.length = 0;
gdjs.GameCode.GDFloodFieldObjects1.length = 0;
gdjs.GameCode.GDFloodFieldObjects2.length = 0;
gdjs.GameCode.GDFloodFieldObjects3.length = 0;
gdjs.GameCode.GDFloodFieldObjects4.length = 0;
gdjs.GameCode.GDFloodFieldObjects5.length = 0;
gdjs.GameCode.GDInstructionObjects1.length = 0;
gdjs.GameCode.GDInstructionObjects2.length = 0;
gdjs.GameCode.GDInstructionObjects3.length = 0;
gdjs.GameCode.GDInstructionObjects4.length = 0;
gdjs.GameCode.GDInstructionObjects5.length = 0;
gdjs.GameCode.GDCursorObjects1.length = 0;
gdjs.GameCode.GDCursorObjects2.length = 0;
gdjs.GameCode.GDCursorObjects3.length = 0;
gdjs.GameCode.GDCursorObjects4.length = 0;
gdjs.GameCode.GDCursorObjects5.length = 0;

gdjs.GameCode.eventsList19(runtimeScene);
gdjs.GameCode.GDBallFieldObjects1.length = 0;
gdjs.GameCode.GDBallFieldObjects2.length = 0;
gdjs.GameCode.GDBallFieldObjects3.length = 0;
gdjs.GameCode.GDBallFieldObjects4.length = 0;
gdjs.GameCode.GDBallFieldObjects5.length = 0;
gdjs.GameCode.GDBallExtendedFieldObjects1.length = 0;
gdjs.GameCode.GDBallExtendedFieldObjects2.length = 0;
gdjs.GameCode.GDBallExtendedFieldObjects3.length = 0;
gdjs.GameCode.GDBallExtendedFieldObjects4.length = 0;
gdjs.GameCode.GDBallExtendedFieldObjects5.length = 0;
gdjs.GameCode.GDBallObjects1.length = 0;
gdjs.GameCode.GDBallObjects2.length = 0;
gdjs.GameCode.GDBallObjects3.length = 0;
gdjs.GameCode.GDBallObjects4.length = 0;
gdjs.GameCode.GDBallObjects5.length = 0;
gdjs.GameCode.GDBorderObjects1.length = 0;
gdjs.GameCode.GDBorderObjects2.length = 0;
gdjs.GameCode.GDBorderObjects3.length = 0;
gdjs.GameCode.GDBorderObjects4.length = 0;
gdjs.GameCode.GDBorderObjects5.length = 0;
gdjs.GameCode.GDMouseTrackObjects1.length = 0;
gdjs.GameCode.GDMouseTrackObjects2.length = 0;
gdjs.GameCode.GDMouseTrackObjects3.length = 0;
gdjs.GameCode.GDMouseTrackObjects4.length = 0;
gdjs.GameCode.GDMouseTrackObjects5.length = 0;
gdjs.GameCode.GDExplosionObjects1.length = 0;
gdjs.GameCode.GDExplosionObjects2.length = 0;
gdjs.GameCode.GDExplosionObjects3.length = 0;
gdjs.GameCode.GDExplosionObjects4.length = 0;
gdjs.GameCode.GDExplosionObjects5.length = 0;
gdjs.GameCode.GDTerritoryFieldObjects1.length = 0;
gdjs.GameCode.GDTerritoryFieldObjects2.length = 0;
gdjs.GameCode.GDTerritoryFieldObjects3.length = 0;
gdjs.GameCode.GDTerritoryFieldObjects4.length = 0;
gdjs.GameCode.GDTerritoryFieldObjects5.length = 0;
gdjs.GameCode.GDDeathIconObjects1.length = 0;
gdjs.GameCode.GDDeathIconObjects2.length = 0;
gdjs.GameCode.GDDeathIconObjects3.length = 0;
gdjs.GameCode.GDDeathIconObjects4.length = 0;
gdjs.GameCode.GDDeathIconObjects5.length = 0;
gdjs.GameCode.GDDeathsLabelObjects1.length = 0;
gdjs.GameCode.GDDeathsLabelObjects2.length = 0;
gdjs.GameCode.GDDeathsLabelObjects3.length = 0;
gdjs.GameCode.GDDeathsLabelObjects4.length = 0;
gdjs.GameCode.GDDeathsLabelObjects5.length = 0;
gdjs.GameCode.GDLevelIconObjects1.length = 0;
gdjs.GameCode.GDLevelIconObjects2.length = 0;
gdjs.GameCode.GDLevelIconObjects3.length = 0;
gdjs.GameCode.GDLevelIconObjects4.length = 0;
gdjs.GameCode.GDLevelIconObjects5.length = 0;
gdjs.GameCode.GDLevelObjects1.length = 0;
gdjs.GameCode.GDLevelObjects2.length = 0;
gdjs.GameCode.GDLevelObjects3.length = 0;
gdjs.GameCode.GDLevelObjects4.length = 0;
gdjs.GameCode.GDLevelObjects5.length = 0;
gdjs.GameCode.GDCompletionObjects1.length = 0;
gdjs.GameCode.GDCompletionObjects2.length = 0;
gdjs.GameCode.GDCompletionObjects3.length = 0;
gdjs.GameCode.GDCompletionObjects4.length = 0;
gdjs.GameCode.GDCompletionObjects5.length = 0;
gdjs.GameCode.GDFadingTerritoryFieldObjects1.length = 0;
gdjs.GameCode.GDFadingTerritoryFieldObjects2.length = 0;
gdjs.GameCode.GDFadingTerritoryFieldObjects3.length = 0;
gdjs.GameCode.GDFadingTerritoryFieldObjects4.length = 0;
gdjs.GameCode.GDFadingTerritoryFieldObjects5.length = 0;
gdjs.GameCode.GDFloodFieldObjects1.length = 0;
gdjs.GameCode.GDFloodFieldObjects2.length = 0;
gdjs.GameCode.GDFloodFieldObjects3.length = 0;
gdjs.GameCode.GDFloodFieldObjects4.length = 0;
gdjs.GameCode.GDFloodFieldObjects5.length = 0;
gdjs.GameCode.GDInstructionObjects1.length = 0;
gdjs.GameCode.GDInstructionObjects2.length = 0;
gdjs.GameCode.GDInstructionObjects3.length = 0;
gdjs.GameCode.GDInstructionObjects4.length = 0;
gdjs.GameCode.GDInstructionObjects5.length = 0;
gdjs.GameCode.GDCursorObjects1.length = 0;
gdjs.GameCode.GDCursorObjects2.length = 0;
gdjs.GameCode.GDCursorObjects3.length = 0;
gdjs.GameCode.GDCursorObjects4.length = 0;
gdjs.GameCode.GDCursorObjects5.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
