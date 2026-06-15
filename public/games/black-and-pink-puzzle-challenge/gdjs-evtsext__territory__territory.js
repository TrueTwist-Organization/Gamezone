
gdjs.evtsExt__Territory__Territory = gdjs.evtsExt__Territory__Territory || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__Territory__Territory.Territory = class Territory extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Territory__Territory.Territory.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.MarchingSquaresBehavior = behaviorData.MarchingSquaresBehavior !== undefined ? behaviorData.MarchingSquaresBehavior : "";
    this._behaviorData.BorderSize = behaviorData.BorderSize !== undefined ? behaviorData.BorderSize : Number("19") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.MarchingSquaresBehavior !== newBehaviorData.MarchingSquaresBehavior)
      this._behaviorData.MarchingSquaresBehavior = newBehaviorData.MarchingSquaresBehavior;
    if (oldBehaviorData.BorderSize !== newBehaviorData.BorderSize)
      this._behaviorData.BorderSize = newBehaviorData.BorderSize;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    MarchingSquaresBehavior: this._behaviorData.MarchingSquaresBehavior,
    BorderSize: this._behaviorData.BorderSize,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.MarchingSquaresBehavior !== undefined)
      this._behaviorData.MarchingSquaresBehavior = networkSyncData.props.MarchingSquaresBehavior;
    if (networkSyncData.props.BorderSize !== undefined)
      this._behaviorData.BorderSize = networkSyncData.props.BorderSize;
  }

  // Properties:
  
  _getMarchingSquaresBehavior() {
    return this._behaviorData.MarchingSquaresBehavior !== undefined ? this._behaviorData.MarchingSquaresBehavior : "";
  }
  _setMarchingSquaresBehavior(newValue) {
    this._behaviorData.MarchingSquaresBehavior = newValue;
  }
  _getBorderSize() {
    return this._behaviorData.BorderSize !== undefined ? this._behaviorData.BorderSize : Number("19") || 0;
  }
  _setBorderSize(newValue) {
    this._behaviorData.BorderSize = newValue;
  }
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__Territory__Territory.Territory.SharedData = class TerritorySharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Territory__Territory.Territory.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Territory_TerritorySharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Territory_TerritorySharedData = new gdjs.evtsExt__Territory__Territory.Territory.SharedData(
      initialData
    );
  }
  return instanceContainer._Territory_TerritorySharedData;
}

// Methods:
gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext = {};
gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.GDObjectObjects1= [];
gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.GDObjectObjects2= [];


gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("MarchingSquaresBehavior")).ClearField((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("MarchingSquaresBehavior")).AddLine(0, 0, 0, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderSize(), 1.5, "Maximum", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("MarchingSquaresBehavior")).AddLine(0, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene), gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderSize(), 1.5, "Maximum", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("MarchingSquaresBehavior")).AddLine(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene), gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), 0, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderSize(), 1.5, "Maximum", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("MarchingSquaresBehavior")).AddLine(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), 0, 0, 0, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderSize(), 1.5, "Maximum", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("MarchingSquaresBehavior")).UpdateHitboxes((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.GDObjectObjects1[i].clear();
}
}{for(var i = 0, len = gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("MarchingSquaresBehavior")).DrawField((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__Territory__Territory.Territory.prototype.Initialize = function(parentEventsFunctionContext) {

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
, "MarchingSquaresBehavior": this._getMarchingSquaresBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Territory"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Territory"),
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

gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Territory__Territory.Territory.prototype.InitializeContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext = {};
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects1= [];
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects2= [];
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects3= [];
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects4= [];
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects5= [];
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects6= [];
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects7= [];


gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects6);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects6.length;i<l;++i) {
    if ( gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects6[i].getBehavior(eventsFunctionContext.getBehaviorName("MarchingSquaresBehavior")).CheckFieldValue(eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(2).getAsNumber(), 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects6[k] = gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects6[i];
        ++k;
    }
}
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects6.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).add(1);
}}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(2).add((gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - 3 * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderSize()) / 9);
}}

}


};gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let stopDoWhile_0 = false;
do {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(2).getAsNumber() < gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderSize());
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(1).add((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 3 * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderSize()) / 9);
}}

}


};gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let stopDoWhile_0 = false;
do {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() < gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderSize());
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{eventsFunctionContext.localVariables[0].getFromIndex(2).setNumber(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderSize() * 3 / 2);
}
{ //Subevents: 
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(); }}}

}


};gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Completion", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("X", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Y", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBorderSize() * 3 / 2);
}
{ //Subevents
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__Territory__Territory.Territory.prototype.Completion = function(parentEventsFunctionContext) {

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
, "MarchingSquaresBehavior": this._getMarchingSquaresBehavior()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Territory"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Territory"),
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

gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects5.length = 0;
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects6.length = 0;
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects7.length = 0;

gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects5.length = 0;
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects6.length = 0;
gdjs.evtsExt__Territory__Territory.Territory.prototype.CompletionContext.GDObjectObjects7.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Territory__Territory.Territory.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Territory::Territory", gdjs.evtsExt__Territory__Territory.Territory);
