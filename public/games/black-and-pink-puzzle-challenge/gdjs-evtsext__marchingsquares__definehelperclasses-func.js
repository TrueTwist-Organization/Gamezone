
if (typeof gdjs.evtsExt__MarchingSquares__DefineHelperClasses !== "undefined") {
  gdjs.evtsExt__MarchingSquares__DefineHelperClasses.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MarchingSquares__DefineHelperClasses = {};


gdjs.evtsExt__MarchingSquares__DefineHelperClasses.userFunc0x96cc38 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs.__marchingSquaresExtension = gdjs.__marchingSquaresExtension || {};

const parseOperation = function (operation) {
  switch (operation) {
    case "Addition":
      return (value1, value2) => value1 + value2;
    case "Subtraction":
      return (value1, value2) => value1 - value2;
    case "Multiplication":
      return (value1, value2) => value1 * value2;
    case "Division":
      return (value1, value2) => value1 / value2;
    case "Minimum":
      return Math.min;
    case "Maximum":
    default:
      return Math.max;
  }
  return;
}

class HitboxesIterable {
  /**
   * The hitboxes in a rectangular area.
   * @constructor
         * @param {any} behavior
         * @param {integer} xMin The fist column to include.
         * @param {integer} yMin The fist row to include.
         * @param {integer} xMax The last column to include.
         * @param {integer} yMax The last row to include.
   */
  constructor(
    behavior,
    xMin,
    yMin,
    xMax,
    yMax
  ) {
    this.behavior = behavior;
    this.xMin = xMin;
    this.yMin = yMin;
    this.xMax = xMax;
    this.yMax = yMax;
  };

  setBounds(
    xMin,
    yMin,
    xMax,
    yMax
  ) {
    this.xMin = xMin;
    this.yMin = yMin;
    this.xMax = xMax;
    this.yMax = yMax;
  }

  [Symbol.iterator]() {
    // xMin and yMin next increment
    let x = this.xMax;
    let y = this.yMin - 1;
    let hitbox = null;
    let previousHitbox = null;
    /** @type {IteratorReturnResult<gdjs.Polygon>} */
    const result = { done: false, value: undefined };

    return {
      next: () => {
        do {
          x++;
          if (x > this.xMax) {
            y++;
            x = this.xMin;
          }
          if (y > this.yMax) {
            // done
            result.done = true;
            result.value = undefined;
            return result;
          }
          hitbox = this.behavior.getHitbox(x, y);
        }
        while (!hitbox || hitbox === previousHitbox);

        // happen with run-length encoding
        previousHitbox = hitbox;
        result.done = false;
        result.value = hitbox;
        return result;
      },
    };
  };
};

gdjs.__marchingSquaresExtension = gdjs.__marchingSquaresExtension || {};
gdjs.__marchingSquaresExtension.parseOperation = parseOperation;
gdjs.__marchingSquaresExtension.HitboxesIterable = HitboxesIterable;

};
gdjs.evtsExt__MarchingSquares__DefineHelperClasses.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MarchingSquares__DefineHelperClasses.userFunc0x96cc38(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__DefineHelperClasses.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MarchingSquares"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MarchingSquares"),
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__MarchingSquares__DefineHelperClasses.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__MarchingSquares__DefineHelperClasses.registeredGdjsCallbacks = [];