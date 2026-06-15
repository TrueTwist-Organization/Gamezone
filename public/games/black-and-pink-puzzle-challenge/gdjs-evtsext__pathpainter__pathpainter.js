
gdjs.evtsExt__PathPainter__PathPainter = gdjs.evtsExt__PathPainter__PathPainter || {};

/**
 * Behavior generated from Path painter
 */
gdjs.evtsExt__PathPainter__PathPainter.PathPainter = class PathPainter extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.State = "Idle";
    this._behaviorData.CellWidth = behaviorData.CellWidth !== undefined ? behaviorData.CellWidth : Number("10") || 0;
    this._behaviorData.CellHeight = behaviorData.CellHeight !== undefined ? behaviorData.CellHeight : Number("10") || 0;
    this._behaviorData.MinPathLength = behaviorData.MinPathLength !== undefined ? behaviorData.MinPathLength : Number("32") || 0;
    this._behaviorData.MarchingSquareIntersectionX = Number("") || 0;
    this._behaviorData.MarchingSquareIntersectionY = Number("") || 0;
    this._behaviorData.PathLength = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.State !== newBehaviorData.State)
      this._behaviorData.State = newBehaviorData.State;
    if (oldBehaviorData.CellWidth !== newBehaviorData.CellWidth)
      this._behaviorData.CellWidth = newBehaviorData.CellWidth;
    if (oldBehaviorData.CellHeight !== newBehaviorData.CellHeight)
      this._behaviorData.CellHeight = newBehaviorData.CellHeight;
    if (oldBehaviorData.MinPathLength !== newBehaviorData.MinPathLength)
      this._behaviorData.MinPathLength = newBehaviorData.MinPathLength;
    if (oldBehaviorData.MarchingSquareIntersectionX !== newBehaviorData.MarchingSquareIntersectionX)
      this._behaviorData.MarchingSquareIntersectionX = newBehaviorData.MarchingSquareIntersectionX;
    if (oldBehaviorData.MarchingSquareIntersectionY !== newBehaviorData.MarchingSquareIntersectionY)
      this._behaviorData.MarchingSquareIntersectionY = newBehaviorData.MarchingSquareIntersectionY;
    if (oldBehaviorData.PathLength !== newBehaviorData.PathLength)
      this._behaviorData.PathLength = newBehaviorData.PathLength;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    State: this._behaviorData.State,
    CellWidth: this._behaviorData.CellWidth,
    CellHeight: this._behaviorData.CellHeight,
    MinPathLength: this._behaviorData.MinPathLength,
    MarchingSquareIntersectionX: this._behaviorData.MarchingSquareIntersectionX,
    MarchingSquareIntersectionY: this._behaviorData.MarchingSquareIntersectionY,
    PathLength: this._behaviorData.PathLength,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.State !== undefined)
      this._behaviorData.State = networkSyncData.props.State;
    if (networkSyncData.props.CellWidth !== undefined)
      this._behaviorData.CellWidth = networkSyncData.props.CellWidth;
    if (networkSyncData.props.CellHeight !== undefined)
      this._behaviorData.CellHeight = networkSyncData.props.CellHeight;
    if (networkSyncData.props.MinPathLength !== undefined)
      this._behaviorData.MinPathLength = networkSyncData.props.MinPathLength;
    if (networkSyncData.props.MarchingSquareIntersectionX !== undefined)
      this._behaviorData.MarchingSquareIntersectionX = networkSyncData.props.MarchingSquareIntersectionX;
    if (networkSyncData.props.MarchingSquareIntersectionY !== undefined)
      this._behaviorData.MarchingSquareIntersectionY = networkSyncData.props.MarchingSquareIntersectionY;
    if (networkSyncData.props.PathLength !== undefined)
      this._behaviorData.PathLength = networkSyncData.props.PathLength;
  }

  // Properties:
  
  _getState() {
    return this._behaviorData.State !== undefined ? this._behaviorData.State : "Idle";
  }
  _setState(newValue) {
    this._behaviorData.State = newValue;
  }
  _getCellWidth() {
    return this._behaviorData.CellWidth !== undefined ? this._behaviorData.CellWidth : Number("10") || 0;
  }
  _setCellWidth(newValue) {
    this._behaviorData.CellWidth = newValue;
  }
  _getCellHeight() {
    return this._behaviorData.CellHeight !== undefined ? this._behaviorData.CellHeight : Number("10") || 0;
  }
  _setCellHeight(newValue) {
    this._behaviorData.CellHeight = newValue;
  }
  _getMinPathLength() {
    return this._behaviorData.MinPathLength !== undefined ? this._behaviorData.MinPathLength : Number("32") || 0;
  }
  _setMinPathLength(newValue) {
    this._behaviorData.MinPathLength = newValue;
  }
  _getMarchingSquareIntersectionX() {
    return this._behaviorData.MarchingSquareIntersectionX !== undefined ? this._behaviorData.MarchingSquareIntersectionX : Number("") || 0;
  }
  _setMarchingSquareIntersectionX(newValue) {
    this._behaviorData.MarchingSquareIntersectionX = newValue;
  }
  _getMarchingSquareIntersectionY() {
    return this._behaviorData.MarchingSquareIntersectionY !== undefined ? this._behaviorData.MarchingSquareIntersectionY : Number("") || 0;
  }
  _setMarchingSquareIntersectionY(newValue) {
    this._behaviorData.MarchingSquareIntersectionY = newValue;
  }
  _getPathLength() {
    return this._behaviorData.PathLength !== undefined ? this._behaviorData.PathLength : Number("") || 0;
  }
  _setPathLength(newValue) {
    this._behaviorData.PathLength = newValue;
  }
}

/**
 * Shared data generated from Path painter
 */
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.SharedData = class PathPainterSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._PathPainter_PathPainterSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._PathPainter_PathPainterSharedData = new gdjs.evtsExt__PathPainter__PathPainter.PathPainter.SharedData(
      initialData
    );
  }
  return instanceContainer._PathPainter_PathPainterSharedData;
}

// Methods:
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Done" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Idle");
}
}}

}


};gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
{
const variable1 = new gdjs.Variable();
variable1.setNumber(0);
variable.addChild("X", variable1);
}
{
const variable1 = new gdjs.Variable();
variable1.setNumber(0);
variable.addChild("Y", variable1);
}
variables._declare("Vertex", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(0).getChild("X").setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}{eventsFunctionContext.localVariables[0].getFromIndex(0).getChild("Y").setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}{gdjs.evtTools.variable.variablePushCopy(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0), eventsFunctionContext.localVariables[0].getFromIndex(0));
}}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathIsLongEnough((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Done");
}
}}

}


{

/* Reuse gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).PathIsLongEnough((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Abort((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (Math.floor(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCellWidth()) != Math.floor(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableChildCount(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0)) - 1).getChild("X").getAsNumber() / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCellWidth()));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (Math.floor(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCellHeight()) != Math.floor(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableChildCount(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0)) - 1).getChild("Y").getAsNumber() / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCellHeight()));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("NewVertex");
}
}{for(var i = 0, len = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathLength(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathLength() + (gdjs.evtTools.common.distanceBetweenPositions(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableChildCount(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0)) - 1).getChild("X").getAsNumber(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableChildCount(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0)) - 1).getChild("Y").getAsNumber(), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0))));
}
}
{ //Subevents
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Drawing" ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Starting" ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "NewVertex" ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Drawing");
}
}
{ //Subevents
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
{
const variable1 = new gdjs.Variable();
variable1.setNumber(0);
variable.addChild("X", variable1);
}
{
const variable1 = new gdjs.Variable();
variable1.setNumber(0);
variable.addChild("Y", variable1);
}
variables._declare("Vertex", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(0).getChild("X").setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}{eventsFunctionContext.localVariables[0].getFromIndex(0).getChild("Y").setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}{gdjs.evtTools.variable.variablePushCopy(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0), eventsFunctionContext.localVariables[0].getFromIndex(0));
}{gdjs.evtTools.variable.variablePushCopy(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0), eventsFunctionContext.localVariables[0].getFromIndex(0));
}}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Starting");
}
}{gdjs.evtTools.variable.variableClearChildren(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0));
}
{ //Subevents
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Idle" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


{


gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PathPainter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PathPainter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.eventsList8(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


const valueIteratorReference3 = eventsFunctionContext.localVariables[0].getFromIndex(0);
const iterableReference3 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0);
if(!iterableReference3.isPrimitive()) {
for(
    const iteratorKey3 in 
    iterableReference3.getType() === "structure"
      ? iterableReference3.getAllChildren()
      : iterableReference3.getType() === "array"
        ? iterableReference3.getAllChildrenArray()
        : []
) {
    const structureChildVariable3 = iterableReference3.getChild(iteratorKey3)
    valueIteratorReference3.castTo(structureChildVariable3.getType())
    if(structureChildVariable3.isPrimitive()) {
        valueIteratorReference3.setValue(structureChildVariable3.getValue());
    } else if (structureChildVariable3.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference3.replaceChildren(structureChildVariable3.getAllChildren());
    } else if (structureChildVariable3.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference3.replaceChildrenArray(structureChildVariable3.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.copyArray(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects3[i].drawPathLineTo(eventsFunctionContext.localVariables[0].getFromIndex(0).getChild("X").getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(0).getChild("Y").getAsNumber());
}
}}
}
}

}


};gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
{
const variable1 = new gdjs.Variable();
variable1.setNumber(0);
variable.addChild("X", variable1);
}
{
const variable1 = new gdjs.Variable();
variable1.setNumber(0);
variable.addChild("Y", variable1);
}
variables._declare("Vertex", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].setOutlineColor("255;255;255");
}
}{for(var i = 0, len = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].beginFillPath(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(0).getChild("X").getAsNumber(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(0).getChild("Y").getAsNumber());
}
}
{ //Subevents
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].drawPathLineTo(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].endFillPath();
}
}}

}


};gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableChildCount(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0)) > 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Drawing" ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Starting" ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "NewVertex" ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.eventsList4(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PathPainter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PathPainter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext = {};
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects1= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2= [];


gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Drawing" ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2[k] = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects1_1final.push(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Starting" ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2[k] = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects1_1final.push(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "NewVertex" ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2[k] = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects1_1final.push(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects1_1final, gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPath = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PathPainter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PathPainter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IsDrawingPathContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsStartedContext = {};
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsStartedContext.GDObjectObjects1= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsStartedContext.GDObjectObjects2= [];


gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsStartedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsStartedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsStartedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsStartedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Starting" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsStartedContext.GDObjectObjects1[k] = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsStartedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsStartedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsStarted = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PathPainter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PathPainter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsStartedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsStartedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsStartedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsStartedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsStartedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.VertexIsAddedContext = {};
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.VertexIsAddedContext.GDObjectObjects1= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.VertexIsAddedContext.GDObjectObjects2= [];


gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.VertexIsAddedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.VertexIsAddedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.VertexIsAddedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.VertexIsAddedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "NewVertex" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.VertexIsAddedContext.GDObjectObjects1[k] = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.VertexIsAddedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.VertexIsAddedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.VertexIsAdded = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PathPainter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PathPainter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.VertexIsAddedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.VertexIsAddedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.VertexIsAddedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.VertexIsAddedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.VertexIsAddedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsDoneContext = {};
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsDoneContext.GDObjectObjects1= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsDoneContext.GDObjectObjects2= [];


gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsDoneContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsDoneContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsDoneContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsDoneContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Done" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsDoneContext.GDObjectObjects1[k] = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsDoneContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsDoneContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsDone = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PathPainter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PathPainter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsDoneContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsDoneContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsDoneContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsDoneContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsDoneContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.ResetContext = {};
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.ResetContext.GDObjectObjects1= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.ResetContext.GDObjectObjects2= [];


gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.ResetContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
{
const variable1 = new gdjs.Variable();
variable1.setNumber(0);
variable.addChild("X", variable1);
}
{
const variable1 = new gdjs.Variable();
variable1.setNumber(0);
variable.addChild("Y", variable1);
}
variables._declare("Vertex", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(0).getChild("X").setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}{eventsFunctionContext.localVariables[0].getFromIndex(0).getChild("Y").setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}{gdjs.evtTools.variable.variablePushCopy(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0), eventsFunctionContext.localVariables[0].getFromIndex(0));
}{gdjs.evtTools.variable.variablePushCopy(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0), eventsFunctionContext.localVariables[0].getFromIndex(0));
}}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.ResetContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.ResetContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.ResetContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.ResetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsDrawingPath((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.ResetContext.GDObjectObjects1[k] = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.ResetContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.ResetContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.ResetContext.GDObjectObjects1 */
{gdjs.evtTools.variable.variableClearChildren(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0));
}{for(var i = 0, len = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.ResetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.ResetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Drawing");
}
}{for(var i = 0, len = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.ResetContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.ResetContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathLength(0);
}
}
{ //Subevents
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.ResetContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.Reset = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PathPainter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PathPainter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.ResetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.ResetContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.ResetContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.ResetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.ResetContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.AbortContext = {};
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.AbortContext.GDObjectObjects1= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.AbortContext.GDObjectObjects2= [];


gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.AbortContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.AbortContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.AbortContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.AbortContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Idle");
}
}{for(var i = 0, len = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.AbortContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.AbortContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPathLength(0);
}
}{gdjs.evtTools.variable.variableClearChildren(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0));
}}

}


};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.Abort = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PathPainter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PathPainter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.AbortContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.AbortContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.AbortContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.AbortContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.AbortContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionContext = {};
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionContext.GDObjectObjects1= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionContext.GDObjectObjects2= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionContext.GDObjectObjects3= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionContext.GDObjectObjects4= [];


gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PathPainter__SegmentsIntersect.func(runtimeScene, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableChildCount(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0)) - 3).getChild("X").getAsNumber(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(gdjs.evtTools.variable.getVariableChildCount(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0)) - 3).getChild("Y").getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(1).getChild("X").getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(1).getChild("Y").getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(2).getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(3).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(2).setNumber(eventsFunctionContext.localVariables[0].getFromIndex(1).getChild("X").getAsNumber());
}{eventsFunctionContext.localVariables[0].getFromIndex(3).setNumber(eventsFunctionContext.localVariables[0].getFromIndex(1).getChild("Y").getAsNumber());
}}

}


};gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


const keyIteratorReference2 = eventsFunctionContext.localVariables[0].getFromIndex(0);
const valueIteratorReference2 = eventsFunctionContext.localVariables[0].getFromIndex(1);
const iterableReference2 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0);
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() < gdjs.evtTools.variable.getVariableChildCount(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0)) - 3);
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}
}

}


};gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Index", variable);
}
{
const variable = new gdjs.Variable();
{
const variable1 = new gdjs.Variable();
variable1.setNumber(0);
variable.addChild("X", variable1);
}
{
const variable1 = new gdjs.Variable();
variable1.setNumber(0);
variable.addChild("Y", variable1);
}
variables._declare("Vertex", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("PreviousVertexX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("PreviousVertexY", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(2).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(0).getChild("X").getAsNumber());
}{eventsFunctionContext.localVariables[0].getFromIndex(3).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(0).getChild("Y").getAsNumber());
}
{ //Subevents
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableChildCount(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0)) > 5);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersection = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PathPainter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PathPainter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionContext.GDObjectObjects4.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext = {};
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDObjectObjects1= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDObjectObjects2= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDObjectObjects3= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDObjectObjects4= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects1= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects2= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects3= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects4= [];


gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("MarchingSquare"), gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("MarchingSquareBehavior")).ContainsPoint(eventsFunctionContext.localVariables[0].getFromIndex(2).getChild("X").getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(2).getChild("Y").getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects3[k] = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMarchingSquareIntersectionX(eventsFunctionContext.localVariables[0].getFromIndex(2).getChild("X").getAsNumber());
}
}{for(var i = 0, len = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMarchingSquareIntersectionY(eventsFunctionContext.localVariables[0].getFromIndex(2).getChild("Y").getAsNumber());
}
}{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(eventsFunctionContext.localVariables[0].getFromIndex(2).getChild("X").getAsNumber());
}{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber(eventsFunctionContext.localVariables[0].getFromIndex(2).getChild("Y").getAsNumber());
}}

}


};gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


const keyIteratorReference2 = eventsFunctionContext.localVariables[0].getFromIndex(3);
const valueIteratorReference2 = eventsFunctionContext.localVariables[0].getFromIndex(2);
const iterableReference2 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0);
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(3).getAsNumber() < gdjs.evtTools.variable.getVariableChildCount(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0)) - 3);
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}
}

}


};gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("PreviousVertexX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("PreviousVertexY", variable);
}
{
const variable = new gdjs.Variable();
{
const variable1 = new gdjs.Variable();
variable1.setNumber(0);
variable.addChild("X", variable1);
}
{
const variable1 = new gdjs.Variable();
variable1.setNumber(0);
variable.addChild("Y", variable1);
}
variables._declare("Vertex", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Index", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(0).getChild("X").getAsNumber());
}{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(0).getChild("Y").getAsNumber());
}
{ //Subevents
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("MarchingSquare"), gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("MarchingSquareBehavior")).ContainsPoint(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects1[k] = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMarchingSquareIntersectionX(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMarchingSquareIntersectionY(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBall = function(MarchingSquare, MarchingSquareBehavior, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "MarchingSquare": MarchingSquare
},
  _objectArraysMap: {
"Object": thisObjectList
, "MarchingSquare": gdjs.objectsListsToArray(MarchingSquare)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "MarchingSquareBehavior": MarchingSquareBehavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PathPainter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PathPainter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects2.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects3.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects4.length = 0;

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects2.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects3.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.HasIntersectionWithBallContext.GDMarchingSquareObjects4.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IntersectionXContext = {};
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IntersectionXContext.GDObjectObjects1= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IntersectionXContext.GDObjectObjects2= [];


gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IntersectionXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMarchingSquareIntersectionX(); }}}

}


};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IntersectionX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PathPainter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PathPainter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IntersectionXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IntersectionXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IntersectionXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IntersectionXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IntersectionXContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IntersectionYContext = {};
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IntersectionYContext.GDObjectObjects1= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IntersectionYContext.GDObjectObjects2= [];


gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IntersectionYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMarchingSquareIntersectionY(); }}}

}


};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IntersectionY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PathPainter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PathPainter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IntersectionYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IntersectionYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IntersectionYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IntersectionYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.IntersectionYContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.DrawPathOnFieldContext = {};
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.DrawPathOnFieldContext.GDObjectObjects1= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.DrawPathOnFieldContext.GDObjectObjects2= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.DrawPathOnFieldContext.GDMarchingSquareObjectObjects1= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.DrawPathOnFieldContext.GDMarchingSquareObjectObjects2= [];


gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.DrawPathOnFieldContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.DrawPathOnFieldContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


const valueIteratorReference2 = eventsFunctionContext.localVariables[0].getFromIndex(0);
const iterableReference2 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0);
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.copyArray(eventsFunctionContext.getObjects("MarchingSquareObject"), gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.DrawPathOnFieldContext.GDMarchingSquareObjectObjects2);

let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.DrawPathOnFieldContext.GDMarchingSquareObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.DrawPathOnFieldContext.GDMarchingSquareObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("MarchingSquareBehavior")).AddLine(eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(2).getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(0).getChild("X").getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(0).getChild("Y").getAsNumber(), 10, 1.5, "Maximum", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber(eventsFunctionContext.localVariables[0].getFromIndex(0).getChild("X").getAsNumber());
}{eventsFunctionContext.localVariables[0].getFromIndex(2).setNumber(eventsFunctionContext.localVariables[0].getFromIndex(0).getChild("Y").getAsNumber());
}}
}
}

}


};gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.DrawPathOnFieldContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
{
const variable1 = new gdjs.Variable();
variable1.setNumber(0);
variable.addChild("X", variable1);
}
{
const variable1 = new gdjs.Variable();
variable1.setNumber(0);
variable.addChild("Y", variable1);
}
variables._declare("Vertex", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("PreviousVertexX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("PreviousVertexY", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableChildCount(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0)) > 5);
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(0).getChild("X").getAsNumber());
}{eventsFunctionContext.localVariables[0].getFromIndex(2).setNumber(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(0).getChild("Y").getAsNumber());
}
{ //Subevents
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.DrawPathOnFieldContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.DrawPathOnField = function(MarchingSquareObject, MarchingSquareBehavior, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "MarchingSquareObject": MarchingSquareObject
},
  _objectArraysMap: {
"Object": thisObjectList
, "MarchingSquareObject": gdjs.objectsListsToArray(MarchingSquareObject)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "MarchingSquareBehavior": MarchingSquareBehavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PathPainter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PathPainter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.DrawPathOnFieldContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.DrawPathOnFieldContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.DrawPathOnFieldContext.GDMarchingSquareObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.DrawPathOnFieldContext.GDMarchingSquareObjectObjects2.length = 0;

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.DrawPathOnFieldContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.DrawPathOnFieldContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.DrawPathOnFieldContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.DrawPathOnFieldContext.GDMarchingSquareObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.DrawPathOnFieldContext.GDMarchingSquareObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsLongEnoughContext = {};
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsLongEnoughContext.GDObjectObjects1= [];
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsLongEnoughContext.GDObjectObjects2= [];


gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsLongEnoughContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPathLength() >= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMinPathLength());
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsLongEnough = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PathPainter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PathPainter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsLongEnoughContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsLongEnoughContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsLongEnoughContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsLongEnoughContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PathPainter__PathPainter.PathPainter.prototype.PathIsLongEnoughContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("PathPainter::PathPainter", gdjs.evtsExt__PathPainter__PathPainter.PathPainter);
