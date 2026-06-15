
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior || {};

/**
 * Behavior generated from Marching squares painter
 */
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior = class MarchingSquaresBehavior extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.AreaLeftBound = behaviorData.AreaLeftBound !== undefined ? behaviorData.AreaLeftBound : Number("0") || 0;
    this._behaviorData.AreaTopBound = behaviorData.AreaTopBound !== undefined ? behaviorData.AreaTopBound : Number("0") || 0;
    this._behaviorData.AreaRightBound = behaviorData.AreaRightBound !== undefined ? behaviorData.AreaRightBound : Number("0") || 0;
    this._behaviorData.AreaBottomBound = behaviorData.AreaBottomBound !== undefined ? behaviorData.AreaBottomBound : Number("0") || 0;
    this._behaviorData.CellWidth = behaviorData.CellWidth !== undefined ? behaviorData.CellWidth : Number("20") || 0;
    this._behaviorData.CellHeight = behaviorData.CellHeight !== undefined ? behaviorData.CellHeight : Number("20") || 0;
    this._behaviorData.FillOutside = behaviorData.FillOutside !== undefined ? behaviorData.FillOutside : false;
    this._behaviorData.Threshold = behaviorData.Threshold !== undefined ? behaviorData.Threshold : Number("1") || 0;
    this._behaviorData.MustOnlyDrawScreen = behaviorData.MustOnlyDrawScreen !== undefined ? behaviorData.MustOnlyDrawScreen : false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.AreaLeftBound !== newBehaviorData.AreaLeftBound)
      this._behaviorData.AreaLeftBound = newBehaviorData.AreaLeftBound;
    if (oldBehaviorData.AreaTopBound !== newBehaviorData.AreaTopBound)
      this._behaviorData.AreaTopBound = newBehaviorData.AreaTopBound;
    if (oldBehaviorData.AreaRightBound !== newBehaviorData.AreaRightBound)
      this._behaviorData.AreaRightBound = newBehaviorData.AreaRightBound;
    if (oldBehaviorData.AreaBottomBound !== newBehaviorData.AreaBottomBound)
      this._behaviorData.AreaBottomBound = newBehaviorData.AreaBottomBound;
    if (oldBehaviorData.CellWidth !== newBehaviorData.CellWidth)
      this._behaviorData.CellWidth = newBehaviorData.CellWidth;
    if (oldBehaviorData.CellHeight !== newBehaviorData.CellHeight)
      this._behaviorData.CellHeight = newBehaviorData.CellHeight;
    if (oldBehaviorData.FillOutside !== newBehaviorData.FillOutside)
      this._behaviorData.FillOutside = newBehaviorData.FillOutside;
    if (oldBehaviorData.Threshold !== newBehaviorData.Threshold)
      this._behaviorData.Threshold = newBehaviorData.Threshold;
    if (oldBehaviorData.MustOnlyDrawScreen !== newBehaviorData.MustOnlyDrawScreen)
      this._behaviorData.MustOnlyDrawScreen = newBehaviorData.MustOnlyDrawScreen;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    AreaLeftBound: this._behaviorData.AreaLeftBound,
    AreaTopBound: this._behaviorData.AreaTopBound,
    AreaRightBound: this._behaviorData.AreaRightBound,
    AreaBottomBound: this._behaviorData.AreaBottomBound,
    CellWidth: this._behaviorData.CellWidth,
    CellHeight: this._behaviorData.CellHeight,
    FillOutside: this._behaviorData.FillOutside,
    Threshold: this._behaviorData.Threshold,
    MustOnlyDrawScreen: this._behaviorData.MustOnlyDrawScreen,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.AreaLeftBound !== undefined)
      this._behaviorData.AreaLeftBound = networkSyncData.props.AreaLeftBound;
    if (networkSyncData.props.AreaTopBound !== undefined)
      this._behaviorData.AreaTopBound = networkSyncData.props.AreaTopBound;
    if (networkSyncData.props.AreaRightBound !== undefined)
      this._behaviorData.AreaRightBound = networkSyncData.props.AreaRightBound;
    if (networkSyncData.props.AreaBottomBound !== undefined)
      this._behaviorData.AreaBottomBound = networkSyncData.props.AreaBottomBound;
    if (networkSyncData.props.CellWidth !== undefined)
      this._behaviorData.CellWidth = networkSyncData.props.CellWidth;
    if (networkSyncData.props.CellHeight !== undefined)
      this._behaviorData.CellHeight = networkSyncData.props.CellHeight;
    if (networkSyncData.props.FillOutside !== undefined)
      this._behaviorData.FillOutside = networkSyncData.props.FillOutside;
    if (networkSyncData.props.Threshold !== undefined)
      this._behaviorData.Threshold = networkSyncData.props.Threshold;
    if (networkSyncData.props.MustOnlyDrawScreen !== undefined)
      this._behaviorData.MustOnlyDrawScreen = networkSyncData.props.MustOnlyDrawScreen;
  }

  // Properties:
  
  _getAreaLeftBound() {
    return this._behaviorData.AreaLeftBound !== undefined ? this._behaviorData.AreaLeftBound : Number("0") || 0;
  }
  _setAreaLeftBound(newValue) {
    this._behaviorData.AreaLeftBound = newValue;
  }
  _getAreaTopBound() {
    return this._behaviorData.AreaTopBound !== undefined ? this._behaviorData.AreaTopBound : Number("0") || 0;
  }
  _setAreaTopBound(newValue) {
    this._behaviorData.AreaTopBound = newValue;
  }
  _getAreaRightBound() {
    return this._behaviorData.AreaRightBound !== undefined ? this._behaviorData.AreaRightBound : Number("0") || 0;
  }
  _setAreaRightBound(newValue) {
    this._behaviorData.AreaRightBound = newValue;
  }
  _getAreaBottomBound() {
    return this._behaviorData.AreaBottomBound !== undefined ? this._behaviorData.AreaBottomBound : Number("0") || 0;
  }
  _setAreaBottomBound(newValue) {
    this._behaviorData.AreaBottomBound = newValue;
  }
  _getCellWidth() {
    return this._behaviorData.CellWidth !== undefined ? this._behaviorData.CellWidth : Number("20") || 0;
  }
  _setCellWidth(newValue) {
    this._behaviorData.CellWidth = newValue;
  }
  _getCellHeight() {
    return this._behaviorData.CellHeight !== undefined ? this._behaviorData.CellHeight : Number("20") || 0;
  }
  _setCellHeight(newValue) {
    this._behaviorData.CellHeight = newValue;
  }
  _getFillOutside() {
    return this._behaviorData.FillOutside !== undefined ? this._behaviorData.FillOutside : false;
  }
  _setFillOutside(newValue) {
    this._behaviorData.FillOutside = newValue;
  }
  _toggleFillOutside() {
    this._setFillOutside(!this._getFillOutside());
  }
  _getThreshold() {
    return this._behaviorData.Threshold !== undefined ? this._behaviorData.Threshold : Number("1") || 0;
  }
  _setThreshold(newValue) {
    this._behaviorData.Threshold = newValue;
  }
  _getMustOnlyDrawScreen() {
    return this._behaviorData.MustOnlyDrawScreen !== undefined ? this._behaviorData.MustOnlyDrawScreen : false;
  }
  _setMustOnlyDrawScreen(newValue) {
    this._behaviorData.MustOnlyDrawScreen = newValue;
  }
  _toggleMustOnlyDrawScreen() {
    this._setMustOnlyDrawScreen(!this._getMustOnlyDrawScreen());
  }
}

/**
 * Shared data generated from Marching squares painter
 */
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.SharedData = class MarchingSquaresBehaviorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._MarchingSquares_MarchingSquaresBehaviorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._MarchingSquares_MarchingSquaresBehaviorSharedData = new gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.SharedData(
      initialData
    );
  }
  return instanceContainer._MarchingSquares_MarchingSquaresBehaviorSharedData;
}

// Methods:
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ExtendBehaviorClassContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ExtendBehaviorClassContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ExtendBehaviorClassContext.userFunc0x97e538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const game = runtimeScene.getGame();
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const behavior = objects[0].getBehavior(behaviorName);

const prototype = Object.getPrototypeOf(behavior);
if (!prototype.drawField) {

  prototype.createField = function () {
    /** @type {float} */
    const left = this._getAreaLeftBound();
    /** @type {float} */
    const top = this._getAreaTopBound();
    /** @type {float} */
    const right = this._getAreaRightBound();
    /** @type {float} */
    const bottom = this._getAreaBottomBound();
    /** @type {float} */
    const cellWidth = this._getCellWidth();
    /** @type {float} */
    const cellHeight = this._getCellHeight();

    // Build the scalar field
    const dimX = 1 + Math.ceil((right - left) / cellWidth);
    const dimY = 1 + Math.ceil((bottom - top) / cellHeight);
    const scalarField = new gdjs.__marchingSquaresExtension.ScalarField(dimX, dimY);
    this.scalarField = scalarField;
    
    const coordConverter = new gdjs.__marchingSquaresExtension.CoordConverter(
      cellWidth,
      cellHeight,
      left,
      top,
      right,
      bottom);
    this.coordConverter = coordConverter;

    const heightMap = new gdjs.__marchingSquaresExtension.HeightMap(scalarField, coordConverter);
    this.heightMap = heightMap;

    const marchingSquares = new gdjs.__marchingSquaresExtension.MarchingSquares(scalarField);
    this.marchingSquares = marchingSquares;

    /** @type {gdjs.Polygon[][]} */
    const hitboxTiles = new Array(dimY);
    for (var y = 0; y < dimY; y++) {
      hitboxTiles[y] = new Array(dimX).fill(null);
    }
    this.hitboxTiles = hitboxTiles;
  }

  /**
   * @param pointX {float} in scene basis
   * @param pointY {float} in scene basis
   * @return {boolean} true if the point is inside the contour
   */
  prototype.containsPoint = function (
    pointX,
    pointY,
  ) {
    /** @type {boolean} */
    const drawUnder = this._getFillOutside();

    // It's a bit more precise than the contour
    // so it's not completly accurate.
    return !drawUnder && this.heightMap.getHeight(pointX, pointY) > this._getThreshold() ||
      drawUnder && this.heightMap.getHeight(pointX, pointY) < this._getThreshold();
  }

  /**
   * Draw the field squares
   * @param minX {integer} left
   * @param minY {integer} top
   * @param maxX {integer} right
   * @param maxY {integer} bottom
   */
  prototype.drawField = function (
    minX,
    minY,
    maxX,
    maxY
  ) {
    /** @type {boolean} */
    const drawUnder = this._getFillOutside();
    /** @type {gdjs.ShapePainterRuntimeObject} */
    const shapePainter = this.owner;
    /** @type {float} */
    const threshold = this._getThreshold();

    const fillOpacity = shapePainter.getFillOpacity();
    const outlineSize = shapePainter.getOutlineSize();

    // It draws bands and small polygons.
    // The contour line is in a second loop, it's more efficient
    // than switching the style constantly.

    const that = this;
    // fill
    if (fillOpacity !== 0) {
      shapePainter.setOutlineSize(0);
      this.marchingSquares.fillContour(
        minX,
        minY,
        maxX,
        maxY,
        threshold,
        drawUnder,
        {
          drawRectangle(left, top, right, bottom) {
            shapePainter.drawRectangle(
              that.coordConverter.convertFromGridBasisX(left),
              that.coordConverter.convertFromGridBasisY(top),
              that.coordConverter.convertFromGridBasisX(right),
              that.coordConverter.convertFromGridBasisY(bottom));
          },
          beginPath(x, y) {
            shapePainter.beginFillPath(
              that.coordConverter.convertFromGridBasisX(x),
              that.coordConverter.convertFromGridBasisY(y));
          },
          lineTo(x, y) {
            shapePainter.drawPathLineTo(
              that.coordConverter.convertFromGridBasisX(x),
              that.coordConverter.convertFromGridBasisY(y));
          },
          closePath() {
            shapePainter.closePath();
          },
          endPath() {
            shapePainter.endFillPath();
          },
          onFilledSquareChange(x, y) {

          }
        }
      );
      shapePainter.setOutlineSize(outlineSize);
    }
    // outline
    if (outlineSize !== 0) {
      shapePainter.setFillOpacity(0);
      this.marchingSquares.outlineContour(
        minX,
        minY,
        maxX,
        maxY,
        threshold,
        drawUnder,
        {
          drawRectangle(left, top, right, bottom) {
          },
          beginPath(x, y) {
            shapePainter.beginFillPath(
              that.coordConverter.convertFromGridBasisX(x),
              that.coordConverter.convertFromGridBasisY(y));
          },
          lineTo(x, y) {
            shapePainter.drawPathLineTo(
              that.coordConverter.convertFromGridBasisX(x),
              that.coordConverter.convertFromGridBasisY(y));
          },
          closePath() {
            shapePainter.closePath();
          },
          endPath() {
            shapePainter.endFillPath();
          },
          onFilledSquareChange(x, y) {

          }
        }
      );
    }
    shapePainter.setFillOpacity(fillOpacity);
  }

  /**
   * Update the field hitboxes
   * @param minX {integer} left
   * @param minY {integer} top
   * @param maxX {integer} right
   * @param maxY {integer} bottom
   */
  prototype.updateMarchingSquareHitboxes = function (
    minX,
    minY,
    maxX,
    maxY
  ) {
    /** @type {boolean} */
    const drawUnder = this._getFillOutside();
    /** @type {float} */
    const threshold = this._getThreshold();
    /** @type {gdjs.ShapePainterRuntimeObject} */
    const shapePainter = this.owner;

    const point = this.workingPoint;

    // Move all Polygons to recycledPolygons
    if (this.recycledPolygons.length < shapePainter._defaultHitBoxes.length) {
      const swapPolygons = this.recycledPolygons;
      this.recycledPolygons = shapePainter._defaultHitBoxes;
      shapePainter._defaultHitBoxes = swapPolygons;
    }
    const hitboxes = shapePainter._defaultHitBoxes;
    this.recycledPolygons.push.apply(this, hitboxes);
    hitboxes.length = 0;

    for (const hitboxRowTiles of this.hitboxTiles) {
      hitboxRowTiles.fill(null);
    }
    /** @type {gdjs.Polygon} */
    let currentRectangle = null;
    /** @type {gdjs.Polygon} */
    let currentPolygon = null;
    const that = this;
    this.marchingSquares.fillContour(
      minX,
      minY,
      maxX,
      maxY,
      threshold,
      drawUnder,
      {
        drawRectangle(left, top, right, bottom) {
          left = that.coordConverter.convertFromGridBasisX(left);
          top = that.coordConverter.convertFromGridBasisY(top);
          right = that.coordConverter.convertFromGridBasisX(right);
          bottom = that.coordConverter.convertFromGridBasisY(bottom);
          const vertices = currentRectangle.vertices;

          vertices.length = 4;
          vertices[0] || (vertices[0] = [0, 0]);
          vertices[1] || (vertices[1] = [0, 0]);
          vertices[2] || (vertices[2] = [0, 0]);
          vertices[3] || (vertices[3] = [0, 0]);

          vertices[0][0] = left;
          vertices[0][1] = top;

          vertices[1][0] = right;
          vertices[1][1] = top;

          vertices[2][0] = right;
          vertices[2][1] = bottom;

          vertices[3][0] = left;
          vertices[3][1] = bottom;
          hitboxes.push(currentRectangle);
          currentRectangle = null;
        },
        beginPath(x, y) {
          currentPolygon = that.recycledPolygons.length === 0 ? new gdjs.Polygon() : that.recycledPolygons.pop();
          currentPolygon.vertices.length = 0;
          currentPolygon.vertices.push([
            that.coordConverter.convertFromGridBasisX(x),
            that.coordConverter.convertFromGridBasisY(y)]);
        },
        lineTo(x, y) {
          currentPolygon.vertices.push([
            that.coordConverter.convertFromGridBasisX(x),
            that.coordConverter.convertFromGridBasisY(y)]);
        },
        closePath() {
        },
        endPath(squareX, squareY) {
          hitboxes.push(currentPolygon);
          that.hitboxTiles[squareY][squareX] = currentPolygon;
        },
        onFilledSquareChange(squareX, squareY) {
          if (!currentRectangle) {
            currentRectangle = that.recycledPolygons.length === 0 ? new gdjs.Polygon() : that.recycledPolygons.pop();
          }
          that.hitboxTiles[squareY][squareX] = currentRectangle;
        }
      }
    );

    shapePainter.hitBoxes = hitboxes;
    shapePainter.hitBoxesDirty = false;
    shapePainter.aabb.min[0] = this._getAreaLeftBound();
    shapePainter.aabb.min[1] = this._getAreaTopBound();
    shapePainter.aabb.max[0] = shapePainter.aabb.min[0] + (this.scalarField.dimX() - 1) * this._getCellWidth();
    shapePainter.aabb.max[1] = shapePainter.aabb.min[1] + (this.scalarField.dimY() - 1) * this._getCellHeight();
  }

  /**
   * @param squareX {integer} x grid index
   * @param squareY {integer} y grid index
   * @return {gdjs.Polygon}
   */
  prototype.getHitbox = function (squareX, squareY) {
    return this.hitboxTiles[squareY][squareX];
  }
}



};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ExtendBehaviorClassContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ExtendBehaviorClassContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ExtendBehaviorClassContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ExtendBehaviorClassContext.userFunc0x97e538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ExtendBehaviorClass = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ExtendBehaviorClassContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ExtendBehaviorClassContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ExtendBehaviorClassContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ExtendObjectInstancePrototypeContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ExtendObjectInstancePrototypeContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ExtendObjectInstancePrototypeContext.userFunc0x97e538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const game = runtimeScene.getGame();
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const behavior = objects[0].getBehavior(behaviorName);

/**
 * @type {Iterable<gdjs.Polygon>}
 */
behavior.marchingSquaresHitBoxesIterable = new gdjs.__marchingSquaresExtension.HitboxesIterable(behavior, 0, 0, 0, 0);

/** @type {gdjs.Polygon[]} Avoid allocations when updating hitboxes*/
behavior.recycledPolygons = [];

behavior.owner.updateHitBoxes = function () {
  this.hitBoxesDirty = false;
}

behavior.owner.getHitBoxesAround = function (
  left,
  top,
  right,
  bottom
) {
  const leftIndex = Math.max(0, Math.floor(behavior.coordConverter.convertToGridBasisX(left)));
  const topIndex = Math.max(0, Math.floor(behavior.coordConverter.convertToGridBasisY(top)));
  const rightIndex = Math.min(behavior.scalarField.dimX() - 1, Math.ceil(behavior.coordConverter.convertToGridBasisX(right)));
  const bottomIndex = Math.min(behavior.scalarField.dimY() - 1, Math.ceil(behavior.coordConverter.convertToGridBasisY(bottom)));
  /** @type {Iterable<gdjs.Polygon>} */
  const iterable = behavior.marchingSquaresHitBoxesIterable;
  iterable.setBounds(leftIndex, topIndex, rightIndex, bottomIndex);
  return iterable;
}

};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ExtendObjectInstancePrototypeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ExtendObjectInstancePrototypeContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ExtendObjectInstancePrototypeContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ExtendObjectInstancePrototypeContext.userFunc0x97e538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ExtendObjectInstancePrototype = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ExtendObjectInstancePrototypeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ExtendObjectInstancePrototypeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ExtendObjectInstancePrototypeContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaRightBound() <= (gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaLeftBound()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAreaRightBound((gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).AreaLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaBottomBound() <= (gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaTopBound()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAreaBottomBound((gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaBottomBound()) + gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("__marchingSquares").getChild("IsJavaScriptDefined"), false);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("__marchingSquares").getChild("IsJavaScriptDefined"), true);
}{gdjs.evtsExt__MarchingSquares__DefineScalarFieldPainterLibrary.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__MarchingSquares__DefineHelperClasses.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ExtendBehaviorClass((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ExtendObjectInstancePrototype((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).RebuildField((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreated = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.userFunc0x97e538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const game = runtimeScene.getGame();
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = objects[0].getBehavior(behaviorName);

behavior.heightMap.clear();
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.userFunc0x97e538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearField = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClearFieldContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpsidedownFloodFromContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpsidedownFloodFromContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpsidedownFloodFromContext.userFunc0x97e538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const originX = eventsFunctionContext.getArgument("OriginX");
const originY = eventsFunctionContext.getArgument("OriginY");
const minimum = eventsFunctionContext.getArgument("Minimum");
const thickness = eventsFunctionContext.getArgument("Thickness");
const cappingRadiusRatio = eventsFunctionContext.getArgument("CappingRadiusRatio");

const behavior = objects[0].getBehavior(behaviorName);

behavior.heightMap.unfillFrom(originX, originY, minimum, thickness, cappingRadiusRatio);
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpsidedownFloodFromContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpsidedownFloodFromContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpsidedownFloodFromContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpsidedownFloodFromContext.userFunc0x97e538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpsidedownFloodFrom = function(OriginX, OriginY, Minimum, Thickness, CappingRadiusRatio, parentEventsFunctionContext) {

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
if (argName === "OriginX") return OriginX;
if (argName === "OriginY") return OriginY;
if (argName === "Minimum") return Minimum;
if (argName === "Thickness") return Thickness;
if (argName === "CappingRadiusRatio") return CappingRadiusRatio;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpsidedownFloodFromContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpsidedownFloodFromContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpsidedownFloodFromContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FloodFromContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FloodFromContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FloodFromContext.userFunc0x97e538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const originX = eventsFunctionContext.getArgument("OriginX");
const originY = eventsFunctionContext.getArgument("OriginY");
const maximum = eventsFunctionContext.getArgument("Maximum");
const thickness = eventsFunctionContext.getArgument("Thickness");
const cappingRadiusRatio = eventsFunctionContext.getArgument("CappingRadiusRatio");

const behavior = objects[0].getBehavior(behaviorName);

behavior.heightMap.fillFrom(originX, originY, maximum, thickness, cappingRadiusRatio);
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FloodFromContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FloodFromContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FloodFromContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FloodFromContext.userFunc0x97e538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FloodFrom = function(OriginX, OriginY, Maximum, Thickness, CappingRadiusRatio, parentEventsFunctionContext) {

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
if (argName === "OriginX") return OriginX;
if (argName === "OriginY") return OriginY;
if (argName === "Maximum") return Maximum;
if (argName === "Thickness") return Thickness;
if (argName === "CappingRadiusRatio") return CappingRadiusRatio;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FloodFromContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FloodFromContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FloodFromContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClampFieldContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClampFieldContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClampFieldContext.userFunc0x97e538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const min = eventsFunctionContext.getArgument("Minimum");
const max = eventsFunctionContext.getArgument("Maximum");

const behavior = objects[0].getBehavior(behaviorName);

behavior.heightMap.clamp(min, max);
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClampFieldContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClampFieldContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClampFieldContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClampFieldContext.userFunc0x97e538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClampField = function(Minimum, Maximum, parentEventsFunctionContext) {

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
if (argName === "Minimum") return Minimum;
if (argName === "Maximum") return Maximum;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClampFieldContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClampFieldContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ClampFieldContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.TransformFieldContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.TransformFieldContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.TransformFieldContext.userFunc0x97e538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const a = eventsFunctionContext.getArgument("Coefficient");
const b = eventsFunctionContext.getArgument("Offset");

const behavior = objects[0].getBehavior(behaviorName);

behavior.heightMap.transform(a, b);
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.TransformFieldContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.TransformFieldContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.TransformFieldContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.TransformFieldContext.userFunc0x97e538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.TransformField = function(Coefficient, Offset, parentEventsFunctionContext) {

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
if (argName === "Coefficient") return Coefficient;
if (argName === "Offset") return Offset;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.TransformFieldContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.TransformFieldContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.TransformFieldContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddHillContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddHillContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddHillContext.userFunc0x97e538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const centerX = eventsFunctionContext.getArgument("CenterX");
const centerY = eventsFunctionContext.getArgument("CenterY");
const height = Math.max(1, eventsFunctionContext.getArgument("Height"));
const radius = eventsFunctionContext.getArgument("Radius");
const opacity = eventsFunctionContext.getArgument("Opacity");
const cappingRadiusRatio = eventsFunctionContext.getArgument("CappingRadiusRatio");
const operation = gdjs.__marchingSquaresExtension.parseOperation(eventsFunctionContext.getArgument("Operation"));

const behavior = objects[0].getBehavior(behaviorName);

behavior.heightMap.mergeHill(centerX, centerY, height, radius, opacity, cappingRadiusRatio, operation);
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddHillContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddHillContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddHillContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddHillContext.userFunc0x97e538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddHill = function(CenterX, CenterY, Height, Radius, Opacity, CappingRadiusRatio, Operation, parentEventsFunctionContext) {

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
if (argName === "CenterX") return CenterX;
if (argName === "CenterY") return CenterY;
if (argName === "Height") return Height;
if (argName === "Radius") return Radius;
if (argName === "Opacity") return Opacity;
if (argName === "CappingRadiusRatio") return CappingRadiusRatio;
if (argName === "Operation") return Operation;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddHillContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddHillContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddHillContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.userFunc0x97e538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const centerX = eventsFunctionContext.getArgument("CenterX");
const centerY = eventsFunctionContext.getArgument("CenterY");
const radius = eventsFunctionContext.getArgument("Radius");
const cappingRadiusRatio = eventsFunctionContext.getArgument("CappingRadiusRatio");
const operation = gdjs.__marchingSquaresExtension.parseOperation(eventsFunctionContext.getArgument("Operation"));

const behavior = objects[0].getBehavior(behaviorName);

behavior.heightMap.mergeDisk(centerX, centerY, radius, cappingRadiusRatio, operation);
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.userFunc0x97e538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDisk = function(CenterX, CenterY, Radius, CappingRadiusRatio, Operation, parentEventsFunctionContext) {

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
if (argName === "CenterX") return CenterX;
if (argName === "CenterY") return CenterY;
if (argName === "Radius") return Radius;
if (argName === "CappingRadiusRatio") return CappingRadiusRatio;
if (argName === "Operation") return Operation;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddDiskContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.userFunc0x9c92e8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const centerX = eventsFunctionContext.getArgument("CenterX");
const centerY = eventsFunctionContext.getArgument("CenterY");
const radius = eventsFunctionContext.getArgument("Radius");
const cappingRadiusRatio = eventsFunctionContext.getArgument("CappingRadiusRatio");
const cappingRadius = cappingRadiusRatio * radius;

const behavior = objects[0].getBehavior(behaviorName);

behavior.heightMap.mergeDisk(centerX, centerY, radius, cappingRadiusRatio, (fieldValue, value) => Math.min(fieldValue, 1 / value));
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.userFunc0x9c92e8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDisk = function(CenterX, CenterY, Radius, CappingRadiusRatio, parentEventsFunctionContext) {

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
if (argName === "CenterX") return CenterX;
if (argName === "CenterY") return CenterY;
if (argName === "Radius") return Radius;
if (argName === "CappingRadiusRatio") return CappingRadiusRatio;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskDiskContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddLineContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddLineContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddLineContext.userFunc0x97e538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const startX = eventsFunctionContext.getArgument("StartX");
const startY = eventsFunctionContext.getArgument("StartY");
const endX = eventsFunctionContext.getArgument("EndX");
const endY = eventsFunctionContext.getArgument("EndY");
const thickness = eventsFunctionContext.getArgument("Thickness");
const cappingRadiusRatio = eventsFunctionContext.getArgument("CappingRadiusRatio");
const operation = gdjs.__marchingSquaresExtension.parseOperation(eventsFunctionContext.getArgument("Operation"));

const behavior = objects[0].getBehavior(behaviorName);

behavior.heightMap.mergeSegment(startX, startY, endX, endY, thickness, cappingRadiusRatio, operation);
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddLineContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddLineContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddLineContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddLineContext.userFunc0x97e538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddLine = function(StartX, StartY, EndX, EndY, Thickness, CappingRadiusRatio, Operation, parentEventsFunctionContext) {

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
if (argName === "StartX") return StartX;
if (argName === "StartY") return StartY;
if (argName === "EndX") return EndX;
if (argName === "EndY") return EndY;
if (argName === "Thickness") return Thickness;
if (argName === "CappingRadiusRatio") return CappingRadiusRatio;
if (argName === "Operation") return Operation;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddLineContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddLineContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AddLineContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskLineContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskLineContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskLineContext.userFunc0x97e538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const startX = eventsFunctionContext.getArgument("StartX");
const startY = eventsFunctionContext.getArgument("StartY");
const endX = eventsFunctionContext.getArgument("EndX");
const endY = eventsFunctionContext.getArgument("EndY");
const thickness = eventsFunctionContext.getArgument("Thickness");
const cappingRadiusRatio = eventsFunctionContext.getArgument("CappingRadiusRatio");

const behavior = objects[0].getBehavior(behaviorName);

behavior.heightMap.mergeSegment(startX, startY, endX, endY, thickness, cappingRadiusRatio, (fieldValue, value) => Math.min(fieldValue, 1 / value));
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskLineContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskLineContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskLineContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskLineContext.userFunc0x97e538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskLine = function(StartX, StartY, EndX, EndY, Thickness, CappingRadiusRatio, parentEventsFunctionContext) {

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
if (argName === "StartX") return StartX;
if (argName === "StartY") return StartY;
if (argName === "EndX") return EndX;
if (argName === "EndY") return EndY;
if (argName === "Thickness") return Thickness;
if (argName === "CappingRadiusRatio") return CappingRadiusRatio;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskLineContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskLineContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MaskLineContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.GDFieldObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.userFunc0x97e538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const fieldObjects = eventsFunctionContext.getObjects("FieldObject");
const fieldBehaviorName = eventsFunctionContext.getArgument("FieldBehavior");
const operation = gdjs.__marchingSquaresExtension.parseOperation(eventsFunctionContext.getArgument("Operation"));

const behavior = objects[0].getBehavior(behaviorName);

/** @type {Array<number[]>} */
const fieldValues = behavior.scalarFieldValues;

for (const fieldObject of fieldObjects) {
    const otherBehavior = fieldObject.getBehavior(behaviorName);
    if (!otherBehavior) {
        continue;
    }
    behavior.scalarField.mergeField(otherBehavior.scalarField, operation);
}
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.userFunc0x97e538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeField = function(FieldObject, FieldBehavior, Operation, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "FieldObject": FieldObject
},
  _objectArraysMap: {
"Object": thisObjectList
, "FieldObject": gdjs.objectsListsToArray(FieldObject)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "FieldBehavior": FieldBehavior
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
if (argName === "Operation") return Operation;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.GDFieldObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.MergeFieldContext.GDFieldObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpdateHitboxesContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpdateHitboxesContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpdateHitboxesContext.userFunc0x97e538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const behavior = objects[0].getBehavior(behaviorName);

behavior.updateMarchingSquareHitboxes(0, 0, behavior.scalarField.dimX(), behavior.scalarField.dimY());
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpdateHitboxesContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpdateHitboxesContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpdateHitboxesContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpdateHitboxesContext.userFunc0x97e538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpdateHitboxes = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpdateHitboxesContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpdateHitboxesContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.UpdateHitboxesContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.userFunc0x97e538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const screenWidth = runtimeScene.getGame().getGameResolutionWidth();
const screenHeight = runtimeScene.getGame().getGameResolutionHeight();

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const object = objects[0];
const behavior = object.getBehavior(behaviorName);

if (behavior._behaviorData.MustOnlyDrawScreen) {
    const layer = runtimeScene.getLayer(object.getLayer());
    const screen1 = layer.convertCoords(0, 0);
    const screen2 = layer.convertCoords(screenWidth, 0);
    const screen3 = layer.convertCoords(0, screenHeight);
    const screen4 = layer.convertCoords(screenWidth, screenHeight);

    const screenLeft = Math.min(screen1[0], screen2[0], screen3[0], screen4[0]);
    const screenTop = Math.min(screen1[1], screen2[1], screen3[1], screen4[1]);
    const screenRight = Math.max(screen1[0], screen2[0], screen3[0], screen4[0]);
    const screenBottom = Math.max(screen1[1], screen2[1], screen3[1], screen4[1]);

    const minX = Math.max(0, Math.floor(behavior.coordConverter.convertToGridBasisX(screenLeft)));
    const minY = Math.max(0, Math.floor(behavior.coordConverter.convertToGridBasisY(screenTop)));

    const maxX = Math.min(behavior.scalarField.dimX(), 1 + Math.ceil(behavior.coordConverter.convertToGridBasisX(screenRight)));
    const maxY = Math.min(behavior.scalarField.dimY(), 1 + Math.ceil(behavior.coordConverter.convertToGridBasisY(screenBottom)));

    behavior.drawField(minX, minY, maxX, maxY);
}
else {
    // This is useful for static content or games without scrolling.
    behavior.drawField(0, 0, behavior.scalarField.dimX(), behavior.scalarField.dimY());
}
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.userFunc0x97e538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawField = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DrawFieldContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects2= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCellWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellWidth")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).RebuildField((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidth = function(CellWidth, parentEventsFunctionContext) {

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
if (argName === "CellWidth") return CellWidth;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellWidthContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects2= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCellHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CellHeight")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).RebuildField((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeight = function(CellHeight, parentEventsFunctionContext) {

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
if (argName === "CellHeight") return CellHeight;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetCellHeightContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.RebuildFieldContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.RebuildFieldContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.RebuildFieldContext.userFunc0x97e538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const game = runtimeScene.getGame();
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = objects[0].getBehavior(behaviorName);

/** @type {float} */
const left = behavior._getAreaLeftBound();
/** @type {float} */
const top = behavior._getAreaTopBound();
/** @type {float} */
const right = behavior._getAreaRightBound() || game.getGameResolutionWidth();
/** @type {float} */
const bottom = behavior._getAreaBottomBound() || game.getGameResolutionHeight();
/** @type {float} */
const cellWidth = behavior._getCellWidth();
/** @type {float} */
const cellHeight = behavior._getCellHeight();

behavior.createField();
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.RebuildFieldContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.RebuildFieldContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.RebuildFieldContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.RebuildFieldContext.userFunc0x97e538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.RebuildField = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.RebuildFieldContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.RebuildFieldContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.RebuildFieldContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects2= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFillOutside(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("FillOutside") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFillOutside(true);
}
}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutside = function(FillOutside, parentEventsFunctionContext) {

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
if (argName === "FillOutside") return FillOutside;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetFillOutsideContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.GDObjectObjects2= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThreshold((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Threshold")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThreshold = function(Threshold, parentEventsFunctionContext) {

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
if (argName === "Threshold") return Threshold;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetThresholdContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects2= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAreaLeftBound((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("LeftBound")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAreaTopBound((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TopBound")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAreaRightBound((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("RightBound")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAreaBottomBound((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("BottomBound")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBounds = function(LeftBound, TopBound, RightBound, BottomBound, parentEventsFunctionContext) {

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
if (argName === "LeftBound") return LeftBound;
if (argName === "TopBound") return TopBound;
if (argName === "RightBound") return RightBound;
if (argName === "BottomBound") return BottomBound;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetAreaBoundsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext.GDObjectObjects2= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaLeftBound()); }}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeft = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaLeftContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext.GDObjectObjects2= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaTopBound()); }}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTop = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaTopContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects2= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaRightBound()); }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaLeftBound()) == (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaRightBound()));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaLeftBound()) + gdjs.evtTools.window.getGameResolutionWidth(runtimeScene); }}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRight = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaRightContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects2= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaBottomBound()); }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaTopBound()) == (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaBottomBound()));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAreaTopBound()) + gdjs.evtTools.window.getGameResolutionHeight(runtimeScene); }}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottom = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.AreaBottomContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.GDObjectObjects2= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCellWidth()); }}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidth = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellWidthContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.GDObjectObjects2= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCellHeight()); }}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeight = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CellHeightContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DimensionXContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DimensionXContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DimensionXContext.userFunc0x97e538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const behavior = objects[0].getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.scalarField.dimX();
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DimensionXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DimensionXContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DimensionXContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DimensionXContext.userFunc0x97e538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DimensionX = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DimensionXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DimensionXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DimensionXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DimensionYContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DimensionYContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DimensionYContext.userFunc0x97e538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const behavior = objects[0].getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.scalarField.dimY();
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DimensionYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DimensionYContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DimensionYContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DimensionYContext.userFunc0x97e538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DimensionY = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DimensionYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DimensionYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.DimensionYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.GDObjectObjects2= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThreshold()); }}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThreshold = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContourThresholdContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalXContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalXContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalXContext.userFunc0x97e538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const pointX = eventsFunctionContext.getArgument("PointX");
const pointY = eventsFunctionContext.getArgument("PointY");

const behavior = objects[0].getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.heightMap.getFieldNormal(pointX, pointY)[0];
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalXContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalXContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalXContext.userFunc0x97e538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalX = function(PointX, PointY, parentEventsFunctionContext) {

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
if (argName === "PointX") return PointX;
if (argName === "PointY") return PointY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalXContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalYContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalYContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalYContext.userFunc0x97e538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const pointX = eventsFunctionContext.getArgument("PointX");
const pointY = eventsFunctionContext.getArgument("PointY");

const behavior = objects[0].getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.heightMap.getFieldNormal(pointX, pointY)[1];
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalYContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalYContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalYContext.userFunc0x97e538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalY = function(PointX, PointY, parentEventsFunctionContext) {

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
if (argName === "PointX") return PointX;
if (argName === "PointY") return PointY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalYContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalZContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalZContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalZContext.userFunc0x97e538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const pointX = eventsFunctionContext.getArgument("PointX");
const pointY = eventsFunctionContext.getArgument("PointY");

const behavior = objects[0].getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.heightMap.getFieldNormal(pointX, pointY)[2];
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalZContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalZContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalZContext.userFunc0x97e538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalZ = function(PointX, PointY, parentEventsFunctionContext) {

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
if (argName === "PointX") return PointX;
if (argName === "PointY") return PointY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.NormalZContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetGridValueContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetGridValueContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetGridValueContext.userFunc0x9ca720 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const indexX = eventsFunctionContext.getArgument("IndexX");
const indexY = eventsFunctionContext.getArgument("IndexY");
const value = eventsFunctionContext.getArgument("Value");

const behavior = objects[0].getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.scalarField.set(indexX, indexY, value);
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetGridValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetGridValueContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetGridValueContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetGridValueContext.userFunc0x9ca720(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetGridValue = function(IndexX, IndexY, Value, parentEventsFunctionContext) {

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
if (argName === "IndexX") return IndexX;
if (argName === "IndexY") return IndexY;
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetGridValueContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetGridValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.SetGridValueContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.GridValueContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.GridValueContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.GridValueContext.userFunc0x97e538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const indexX = eventsFunctionContext.getArgument("IndexX");
const indexY = eventsFunctionContext.getArgument("IndexY");

const behavior = objects[0].getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.scalarField.get(indexX, indexY);
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.GridValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.GridValueContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.GridValueContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.GridValueContext.userFunc0x97e538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.GridValue = function(IndexX, IndexY, parentEventsFunctionContext) {

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
if (argName === "IndexX") return IndexX;
if (argName === "IndexY") return IndexY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.GridValueContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.GridValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.GridValueContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.userFunc0x97e538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const pointX = eventsFunctionContext.getArgument("PointX");
const pointY = eventsFunctionContext.getArgument("PointY");

const behavior = objects[0].getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.heightMap.getHeight(pointX, pointY);
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.userFunc0x97e538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValue = function(PointX, PointY, parentEventsFunctionContext) {

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
if (argName === "PointX") return PointX;
if (argName === "PointY") return PointY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.FieldValueContext.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1= [];
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects2= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFillOutside() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1[k] = gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutside = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFillOutsideContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.userFunc0x9ca758 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const pointX = eventsFunctionContext.getArgument("PointX");
const pointY = eventsFunctionContext.getArgument("PointY");
const value = eventsFunctionContext.getArgument("Value");

const behavior = objects[0].getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.heightMap.getHeight(pointX, pointY) > value;
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.userFunc0x9ca758(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValue = function(PointX, PointY, Value, parentEventsFunctionContext) {

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
if (argName === "PointX") return PointX;
if (argName === "PointY") return PointY;
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.CheckFieldValueContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext = {};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.GDObjectObjects1= [];


gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.userFunc0x97e538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");

const pointX = eventsFunctionContext.getArgument("PointX");
const pointY = eventsFunctionContext.getArgument("PointY");

const behavior = objects[0].getBehavior(behaviorName);

eventsFunctionContext.returnValue = behavior.containsPoint(pointX, pointY);
};
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.GDObjectObjects1);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.userFunc0x97e538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPoint = function(PointX, PointY, parentEventsFunctionContext) {

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
if (argName === "PointX") return PointX;
if (argName === "PointY") return PointY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.ContainsPointContext.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("MarchingSquares::MarchingSquaresBehavior", gdjs.evtsExt__MarchingSquares__MarchingSquaresBehavior.MarchingSquaresBehavior);
