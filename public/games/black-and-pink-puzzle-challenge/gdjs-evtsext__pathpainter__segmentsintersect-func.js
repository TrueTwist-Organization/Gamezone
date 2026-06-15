
if (typeof gdjs.evtsExt__PathPainter__SegmentsIntersect !== "undefined") {
  gdjs.evtsExt__PathPainter__SegmentsIntersect.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PathPainter__SegmentsIntersect = {};


gdjs.evtsExt__PathPainter__SegmentsIntersect.userFunc0x9ff500 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const ax = eventsFunctionContext.getArgument("Segment1X1");
const ay = eventsFunctionContext.getArgument("Segment1Y1");
const bx = eventsFunctionContext.getArgument("Segment1X2");
const by = eventsFunctionContext.getArgument("Segment1Y2");
const cx = eventsFunctionContext.getArgument("Segment2X1");
const cy = eventsFunctionContext.getArgument("Segment2Y1");
const dx = eventsFunctionContext.getArgument("Segment2X2");
const dy = eventsFunctionContext.getArgument("Segment2Y2");

        // console.log("Test: " + (ax-ax) + " " + (ay-ay) + " -> " + (bx-ax) + " " + (by-ay) +
        // "   " + (cx-ax) + " " + (cy-ay) + " -> " + (dx-ax) + " " + (dy-ay));

    const deltaABx = bx - ax;
    const deltaABy = by - ay;
    const deltaCAx = ax - cx;
    const deltaCAy = ay - cy;
    const deltaCDx = dx - cx;
    const deltaCDy = dy - cy;

    const numerator = deltaCAy * deltaCDx - deltaCAx * deltaCDy;
    const denominator = deltaABx * deltaCDy - deltaABy * deltaCDx;

    // Perform early exit tests.
    if (denominator === 0 && numerator !== 0) {
      // If numerator is zero, then the lines are colinear.
      // Since it isn't, then the lines must be parallel.
      eventsFunctionContext.returnValue = false;
      return;
    }

    // Lines intersect. But do the segments intersect?

    // Forcing float division on both of these via casting of the
    // denominator.
    const factorAB = numerator / denominator;
    const factorCD = (deltaCAy * deltaABx - deltaCAx * deltaABy) / denominator;

    // Determine the type of intersection
    if (
      factorAB >= 0.0 &&
      factorAB <= 1.0 &&
      factorCD >= 0.0 &&
      factorCD <= 1.0
    ) {
        // console.log("Intersection: " + (ax-ax) + " " + (ay-ay) + " -> " + (bx-ax) + " " + (by-ay) +
        // "   " + (cx-ax) + " " + (cy-ay) + " -> " + (dx-ax) + " " + (dy-ay));
          eventsFunctionContext.returnValue = true;
      return; // The two segments intersect.
    }

    // The lines intersect, but segments do not.
    eventsFunctionContext.returnValue = false;

};
gdjs.evtsExt__PathPainter__SegmentsIntersect.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PathPainter__SegmentsIntersect.userFunc0x9ff500(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PathPainter__SegmentsIntersect.func = function(runtimeScene, Segment1X1, Segment1Y1, Segment1X2, Segment1Y2, Segment2X1, Segment2Y1, Segment2X2, Segment2Y2, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
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
if (argName === "Segment1X1") return Segment1X1;
if (argName === "Segment1Y1") return Segment1Y1;
if (argName === "Segment1X2") return Segment1X2;
if (argName === "Segment1Y2") return Segment1Y2;
if (argName === "Segment2X1") return Segment2X1;
if (argName === "Segment2Y1") return Segment2Y1;
if (argName === "Segment2X2") return Segment2X2;
if (argName === "Segment2Y2") return Segment2Y2;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PathPainter__SegmentsIntersect.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__PathPainter__SegmentsIntersect.registeredGdjsCallbacks = [];