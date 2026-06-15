
if (typeof gdjs.evtsExt__MarchingSquares__DefineScalarFieldPainterLibrary !== "undefined") {
  gdjs.evtsExt__MarchingSquares__DefineScalarFieldPainterLibrary.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MarchingSquares__DefineScalarFieldPainterLibrary = {};


gdjs.evtsExt__MarchingSquares__DefineScalarFieldPainterLibrary.userFunc0x9cc610 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// This library comes from https://github.com/D8H/scalar-field-painter
// It can be generated with "npm run build" to the dist/ScalarFieldPainter.js

/**
 * A stock to reuse instances and avoid allocation.
 */
class Stock {
    /**
     * Create a stock.
     */
    constructor() {
        this.elements = [];
    }
    /**
     * Get an element to avoid allocation or create a new one if the stock is
     * empty.
     * @param create
     * @returns an element
     */
    getOrCreate(create) {
        return this.elements.pop() || create();
    }
    /**
     * Stock an element to use it later.
     * @param element
     */
    stock(element) {
        this.elements.push(element);
    }
    /**
     * Free all the elements from the stock.
     */
    flush() {
        this.elements.length = 0;
    }
}

const deltas = [
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: 1 },
];
const createNode = () => ({ x: 0, y: 0 });
const createContourNode = () => ({
    x: 0,
    y: 0,
    originX: 0,
    originY: 0,
    value: 0,
});
/**
 *
 */
class FloodFill {
    constructor(scalarField) {
        this.floodStack = [];
        this.nodeStock = new Stock();
        this.contourStack = [];
        this.nextContourStack = [];
        this.contourNodeStock = new Stock();
        this.scalarField = scalarField;
    }
    /**
     * Fill an area from a given location until a maximum field value is reached.
     *
     * The result is the same as drawing circles at every point of the area.
     * This mean that the area will be filled with a value a lot gibber than 1.
     *
     * @param originX {float} in grid basis
     * @param originY {float} in grid basis
     * @param valueMax {float} the value where to stop the flooding
     * @param thickness {float} the thickness of the contour shading.
     * The field will have the value 1 at this given distance from the area.
     * @param cappingRadiusRatio {float} the radius where to stop the contour shading
     * or a maximum otherwise.
     */
    fillFrom(originX, originY, valueMax, thickness, cappingRadiusRatio) {
        const thicknessSq = thickness * thickness;
        const fillingValue = Math.max(valueMax, thicknessSq * 1024 * 1024);
        const cappingRadius = cappingRadiusRatio * thickness;
        const cappingRadiusSq = cappingRadius * cappingRadius;
        const getContourValue = (fieldValue, distanceSq) => {
            const value = thicknessSq / distanceSq;
            return fieldValue < value && distanceSq < cappingRadiusSq ? value : null;
        };
        this.floodFrom(originX, originY, (fieldValue) => fieldValue < valueMax, fillingValue, getContourValue);
        this.shadeContour(getContourValue);
    }
    /**
     * Unfill an area from a given location until a minimum field value is reached.
     *
     * It fills the area with the value 0.
     *
     * @param originX {float} in grid basis
     * @param originY {float} in grid basis
     * @param valueMax {float} the value where to stop the flooding
     * @param thickness {float} the thickness of the contour shading.
     * The field will have the value 1 at this given distance from the area.
     * @param cappingRadiusRatio {float} the radius where to stop the contour shading
     * or a maximum otherwise.
     */
    unfillFrom(originX, originY, valueMin, thickness, cappingRadiusRatio) {
        const fillingValue = 0;
        const thicknessSq = thickness * thickness;
        const cappingRadius = cappingRadiusRatio * thickness;
        const cappingRadiusSq = cappingRadius * cappingRadius;
        const getContourValue = (fieldValue, distanceSq) => {
            const value = distanceSq / thicknessSq;
            return fieldValue > value && distanceSq < cappingRadiusSq ? value : null;
        };
        this.floodFrom(originX, originY, (fieldValue) => fieldValue > valueMin, fillingValue, getContourValue);
        this.shadeContour(getContourValue);
    }
    /**
     * Flood an area from a given location until a condition is reached.
     * @param originX {float} in grid basis
     * @param originY {float} in grid basis
     * @param canFlood {(float) => boolean}
     * @param fillingValue {float}
     * @param getContourValue {(number, number) => number}
     * or a maximum otherwise.
     */
    floodFrom(originX, originY, canFlood, fillingValue, getContourValue) {
        const scalarField = this.scalarField;
        // They should already be empty at this point.
        this.floodStack.length = 0;
        this.contourStack.length = 0;
        this.nextContourStack.length = 0;
        {
            const x = Math.round(originX);
            const y = Math.round(originY);
            if (!scalarField.isInside(x, y)) {
                return;
            }
            const fieldValue = scalarField.get(x, y);
            if (canFlood(fieldValue)) {
                const node = this.nodeStock.getOrCreate(createNode);
                node.x = x;
                node.y = y;
                this.floodStack.push(node);
            }
        }
        while (this.floodStack.length > 0) {
            const node = this.floodStack.pop();
            const x = node.x;
            const y = node.y;
            scalarField.set(x, y, fillingValue);
            for (const delta of deltas) {
                const neighborX = x + delta.x;
                const neighborY = y + delta.y;
                if (!scalarField.isInside(neighborX, neighborY)) {
                    continue;
                }
                const fieldValue = scalarField.get(neighborX, neighborY);
                if (canFlood(fieldValue)) {
                    const neighbor = this.nodeStock.getOrCreate(createNode);
                    neighbor.x = neighborX;
                    neighbor.y = neighborY;
                    this.floodStack.push(neighbor);
                }
                else {
                    this.checkAnAddContourNode(neighborX, neighborY, x, y, getContourValue);
                }
            }
            this.nodeStock.stock(node);
        }
    }
    /**
     * Shade the contour to keep the field somewhat continuous.
     * @param getContourValue
     */
    shadeContour(getContourValue) {
        const scalarField = this.scalarField;
        const swap = this.nextContourStack;
        this.nextContourStack = this.contourStack;
        this.contourStack = swap;
        while (this.contourStack.length > 0) {
            while (this.contourStack.length > 0) {
                const node = this.contourStack.pop();
                if (scalarField.get(node.x, node.y) > node.value) {
                    // This node wasn't the nearest one.
                    continue;
                }
                for (const delta of deltas) {
                    const neighborX = node.x + delta.x;
                    const neighborY = node.y + delta.y;
                    this.checkAnAddContourNode(neighborX, neighborY, node.originX, node.originY, getContourValue);
                }
                this.contourNodeStock.stock(node);
            }
            const swap = this.nextContourStack;
            this.nextContourStack = this.contourStack;
            this.contourStack = swap;
        }
    }
    checkAnAddContourNode(nodeX, nodeY, originX, originY, getContourValue) {
        const scalarField = this.scalarField;
        if (!scalarField.isInside(nodeX, nodeY)) {
            return;
        }
        // Avoid too big values
        const minDistanceSq = 1 / 1024 / 1024;
        const deltaX = nodeX - originX;
        const deltaY = nodeY - originY;
        const distanceSq = Math.max(minDistanceSq, deltaX * deltaX + deltaY * deltaY);
        const value = getContourValue(scalarField.get(nodeX, nodeY), distanceSq);
        if (value !== null) {
            scalarField.set(nodeX, nodeY, value);
            const newNode = this.contourNodeStock.getOrCreate(createContourNode);
            newNode.x = nodeX;
            newNode.y = nodeY;
            newNode.originX = originX;
            newNode.originY = originY;
            newNode.value = value;
            this.nextContourStack.push(newNode);
        }
    }
}

/**
 * @param x1 {float} first point x
 * @param y1 {float} first point y
 * @param x2 {float} second point x
 * @param y2 {float} second point y
 * @return {float} the square distance between 2 points
 */
const getDistanceSq = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return deltaX * deltaX + deltaY * deltaY;
};
/**
 * @param x {float} point x
 * @param y {float} point y
 * @param x1 {float} segment extremity x
 * @param y1 {float} segment extremity y
 * @param x2 {float} segment extremity x
 * @param y2 {float} segment extremity y
 * @return {float} the square distance between a point and a segment
 */
const getDistanceSqToSegment = (x, y, x1, y1, x2, y2) => {
    const length2 = getDistanceSq(x1, y1, x2, y2);
    if (length2 === 0)
        return getDistanceSq(x, y, x1, y1);
    const t = Math.max(0, Math.min(1, ((x - x1) * (x2 - x1) + (y - y1) * (y2 - y1)) / length2));
    return getDistanceSq(x, y, x1 + t * (x2 - x1), y1 + t * (y2 - y1));
};
/**
 * A scalar field.
 */
class ScalarField {
    /**
     * Create a scalar field.
     * @param dimX {integer}
     * @param dimY {integer}
     */
    constructor(dimX, dimY) {
        const fieldValues = new Array(dimY);
        for (var y = 0; y < dimY; y++) {
            fieldValues[y] = new Array(dimX).fill(0);
        }
        this.values = fieldValues;
        this.floodFill = new FloodFill(this);
    }
    /**
     * @return {integer} grid dimension on y
     */
    dimY() {
        return this.values.length;
    }
    /**
     * @return {integer} grid dimension on y
     */
    dimX() {
        const firstColumn = this.values[0];
        return firstColumn ? firstColumn.length : 0;
    }
    isInside(x, y) {
        return x >= 0 && x <= this.dimX() - 1 && y >= 0 && y <= this.dimY() - 1;
    }
    get(x, y) {
        return this.values[y][x];
    }
    /**
     * @param squareX {integer} x grid index
     * @param squareY {integer} y grid index
     * @param value {float} the field value
     */
    set(x, y, value) {
        this.values[y][x] = value;
    }
    /**
     * @param pointX {float} in grid basis
     * @param pointY {float} in grid basis
     * @return {float} the field value
     */
    extrapolate(x, y) {
        const squareX = Math.floor(x);
        const squareY = Math.floor(y);
        if (squareX < 0 ||
            squareY < 0 ||
            // - 1 because the extrapolation uses the next value.
            squareX >= this.dimX() - 1 ||
            squareY >= this.dimY() - 1) {
            return 0;
        }
        // Extrapolate
        let weighedValueSum = 0;
        let weightSum = 0;
        for (let vertexX = squareX; vertexX <= squareX + 1; vertexX++) {
            for (let vertexY = squareY; vertexY <= squareY + 1; vertexY++) {
                const value = this.values[vertexY][vertexX];
                const dx = vertexX - x;
                const dy = vertexY - y;
                if (dx === 0 && dy === 0) {
                    // No interpolation needed.
                    return value;
                }
                else {
                    const distance = Math.hypot(dx, dy);
                    weighedValueSum += value / distance;
                    weightSum += 1 / distance;
                }
            }
        }
        const mean = weighedValueSum / weightSum;
        return mean;
    }
    /**
     * Clear the field by filling it with a give value.
     * @param value {float}
     */
    clear(value = 0) {
        for (let rowValues of this.values) {
            for (let x = 0; x < rowValues.length; x++) {
                rowValues[x] = value;
            }
        }
    }
    /**
     * Cap the field between 2 values.
     * @param min {float}
     * @param max {float}
     */
    clamp(min, max) {
        for (let rowValues of this.values) {
            for (let x = 0; x < rowValues.length; x++) {
                rowValues[x] = Math.min(Math.max(min, rowValues[x]), max);
            }
        }
    }
    /**
     * Apply an affine transformation on each field value.
     * @param a {float} factor
     * @param b {float} offset
     */
    transform(a, b) {
        for (let rowValues of this.values) {
            for (let x = 0; x < rowValues.length; x++) {
                rowValues[x] = a * rowValues[x] + b;
            }
        }
    }
    /**
     * Merge the values from another field.
     * @param scalarField {ScalarField}
     * @param operation {function(float, float):float}
     */
    mergeField(scalarField, operation) {
        const dimX = Math.min(this.dimX(), scalarField.dimX());
        const dimY = Math.min(this.dimY(), scalarField.dimY());
        for (let y = 0; y < dimY; y++) {
            const thisRowValues = this.values[y];
            const otherRowValues = scalarField.values[y];
            for (let x = 0; x < dimX; x++) {
                thisRowValues[x] = operation(thisRowValues[x], otherRowValues[x]);
            }
        }
    }
    /**
     * Merge a disk in the field.
     * @param centerX {float} in grid basis
     * @param centerY {float} in grid basis
     * @param radius {float} in grid basis
     * @param cappingRadiusRatio {float}
     * @param operation {function(float, float):float}
     */
    mergeDisk(centerX, centerY, radius, cappingRadiusRatio, operation) {
        const cappingRadius = cappingRadiusRatio * radius;
        const minX = Math.max(0, Math.floor(centerX - cappingRadius));
        const minY = Math.max(0, Math.floor(centerY - cappingRadius));
        const maxX = Math.min(this.dimX() - 1, Math.ceil(centerX + cappingRadius));
        const maxY = Math.min(this.dimY() - 1, Math.ceil(centerY + cappingRadius));
        const radiusSq = radius * radius;
        // Avoid too big values
        const minDistanceSq = 1 / 1024 / 1024;
        for (let y = minY; y <= maxY; y++) {
            const rowValues = this.values[y];
            for (let x = minX; x <= maxX; x++) {
                const distanceSq = Math.max(minDistanceSq, getDistanceSq(x, y, centerX, centerY));
                rowValues[x] = operation(rowValues[x], radiusSq / distanceSq);
            }
        }
    }
    /**
     * Merge a segment in the field.
     * @param startX {float} in grid basis
     * @param startY {float} in grid basis
     * @param endX {float} in grid basis
     * @param endY {float} in grid basis
     * @param thickness {float} in grid basis
     * @param cappingRadiusRatio {float}
     * @param operation {function(float, float):float}
     */
    mergeSegment(startX, startY, endX, endY, thickness, cappingRadiusRatio, operation) {
        const cappingRadius = cappingRadiusRatio * thickness;
        const minX = Math.max(0, Math.floor(Math.min(startX, endX) - cappingRadius));
        const minY = Math.max(0, Math.floor(Math.min(startY, endY) - cappingRadius));
        const maxX = Math.min(this.dimX() - 1, Math.ceil(Math.max(startX, endX) + cappingRadius));
        const maxY = Math.min(this.dimY() - 1, Math.ceil(Math.max(startY, endY) + cappingRadius));
        const thicknessSq = thickness * thickness;
        // Avoid too big values
        const minDistanceSq = 1 / 1024 / 1024;
        for (let y = minY; y <= maxY; y++) {
            const rowValues = this.values[y];
            for (let x = minX; x <= maxX; x++) {
                const distanceSq = Math.max(minDistanceSq, getDistanceSqToSegment(x, y, startX, startY, endX, endY));
                rowValues[x] = operation(rowValues[x], thicknessSq / distanceSq);
            }
        }
    }
    /**
     * Merge a hill in the field.
     * @param centerX {float} in grid basis
     * @param centerY {float} in grid basis
     * @param height {float}
     * @param radius {float} in grid basis
     * @param opacity {float}
     * @param cappingRadiusRatio {float}
     * @param operation {function(float, float):float}
     */
    mergeHill(centerX, centerY, height, radius, opacity, cappingRadiusRatio, operation) {
        const cappingRadius = cappingRadiusRatio * radius;
        const minX = Math.max(0, Math.floor(centerX - cappingRadius));
        const minY = Math.max(0, Math.floor(centerY - cappingRadius));
        const maxX = Math.min(this.dimX() - 1, Math.ceil(centerX + cappingRadius));
        const maxY = Math.min(this.dimY() - 1, Math.ceil(centerY + cappingRadius));
        const logHeightDividedByRadiusSq = Math.log(height) / (radius * radius);
        const opacityMultipliedByHeight = opacity * height;
        // Avoid too big values
        const minDistanceSq = 1 / 1024 / 1024;
        for (let y = minY; y <= maxY; y++) {
            const rowValues = this.values[y];
            for (let x = minX; x <= maxX; x++) {
                const distanceSq = Math.max(minDistanceSq, getDistanceSq(x, y, centerX, centerY));
                // This is like a gaussian, but parametrized differently.
                rowValues[x] = operation(rowValues[x], opacityMultipliedByHeight *
                    Math.exp(-distanceSq * logHeightDividedByRadiusSq));
            }
        }
    }
    /**
     * Flood an area from a given location until a maximum field value is reached.
     * @param originX {float} in grid basis
     * @param originY {float} in grid basis
     * @param valueMax {float}
     * @param thickness {float}
     * @param cappingRadiusRatio {float} the radius where to stop the contour shading
     * @param isMinimum {boolean} when set to true, the threshold is a minimum
     * or a maximum otherwise.
     */
    fillFrom(originX, originY, valueMax, thickness, cappingRadiusRatio) {
        this.floodFill.fillFrom(originX, originY, valueMax, thickness, cappingRadiusRatio);
    }
    /**
     * Flood an area from a given location until a maximum field value is reached.
     * @param originX {float} in grid basis
     * @param originY {float} in grid basis
     * @param valueMax {float}
     * @param thickness {float}
     * @param cappingRadiusRatio {float} the radius where to stop the contour shading
     * @param isMinimum {boolean} when set to true, the threshold is a minimum
     * or a maximum otherwise.
     */
    unfillFrom(originX, originY, valueMin, thickness, cappingRadiusRatio) {
        this.floodFill.unfillFrom(originX, originY, valueMin, thickness, cappingRadiusRatio);
    }
}

const South = 0;
const East = 1;
const North = 2;
const West = 3;
const SouthWest = 4;
const SouthEast = 5;
const NorthEast = 6;
const NorthWest = 7;
const SouthWestMask = 1;
const SouthEastMask = 2;
const NorthEastMask = 4;
const NorthWestMask = 8;
const marchingSquaresFillVertices = [
    [],
    [South, West, SouthWest],
    [East, South, SouthEast],
    [East, West, SouthWest, SouthEast],
    [North, East, NorthEast],
    [South, SouthWest, West, North, NorthEast, East],
    [South, North, NorthEast, SouthEast],
    [West, North, NorthEast, SouthEast, SouthWest],
    [West, North, NorthWest],
    [North, South, SouthWest, NorthWest],
    [South, West, NorthWest, North, East, SouthEast],
    [North, East, SouthEast, SouthWest, NorthWest],
    [East, West, NorthWest, NorthEast],
    [East, South, SouthWest, NorthWest, NorthEast],
    [South, West, NorthWest, NorthEast, SouthEast],
    [],
];
const marchingSquaresOutlineVertices = [
    [[]],
    [[South, West]],
    [[East, South]],
    [[East, West]],
    [[North, East]],
    [
        [East, South],
        [West, North],
    ],
    [[South, North]],
    [[West, North]],
    [[West, North]],
    [[North, South]],
    [
        [South, West],
        [North, East],
    ],
    [[North, East]],
    [[East, West]],
    [[East, South]],
    [[South, West]],
    [[]],
];
/**
 * A marching square algorithm implementation.
 */
class MarchingSquares {
    /**
     *
     * @param scalarField
     */
    constructor(scalarField) {
        /** {FloatPoint} Avoid memory allocations when returning points */
        this.workingPoint = [0, 0];
        this.scalarField = scalarField;
    }
    /**
     * @param x {integer} the square top in the grid
     * @param y {integer} the square left in the grid
     * @param threshold {float}
     * @return {integer} one of the 16 marching squares cases
     */
    getSquareIndex(x, y, threshold) {
        /** @type {float} */
        let squareIndex = 0;
        if (this.scalarField.get(x, y + 1) > threshold) {
            squareIndex |= SouthWestMask;
        }
        if (this.scalarField.get(x + 1, y + 1) > threshold) {
            squareIndex |= SouthEastMask;
        }
        if (this.scalarField.get(x + 1, y) > threshold) {
            squareIndex |= NorthEastMask;
        }
        if (this.scalarField.get(x, y) > threshold) {
            squareIndex |= NorthWestMask;
        }
        return squareIndex;
    }
    /**
     * Returns the mean between 2 corners weighted by their field value.
     * @param indexX1 {integer} first corner x
     * @param indexY1 {integer} first corner y
     * @param indexX2 {integer} second corner x
     * @param indexY2 {integer} second corner y
     * @param threshold {float}
     * @return {float} x in the grid
     */
    betweenX(indexX1, indexY1, indexX2, indexY2, threshold) {
        const value1 = this.scalarField.get(indexX1, indexY1);
        const value2 = this.scalarField.get(indexX2, indexY2);
        const weight1 = Math.abs(value1 - threshold);
        const weight2 = Math.abs(value2 - threshold);
        return (weight2 * indexX1 + weight1 * indexX2) / (weight1 + weight2);
    }
    /**
     * Returns the mean between 2 corners weighted by their field value.
     * @param indexX1 {integer} first corner x
     * @param indexY1 {integer} first corner y
     * @param indexX2 {integer} second corner x
     * @param indexY2 {integer} second corner y
     * @param threshold {float}
     * @return {float} y in the grid
     */
    betweenY(indexX1, indexY1, indexX2, indexY2, threshold) {
        const value1 = this.scalarField.get(indexX1, indexY1);
        const value2 = this.scalarField.get(indexX2, indexY2);
        const weight1 = Math.abs(value1 - threshold);
        const weight2 = Math.abs(value2 - threshold);
        return (weight2 * indexY1 + weight1 * indexY2) / (weight1 + weight2);
    }
    /**
     * @param side {integer} point location
     * @param indexX {integer} the square top in the grid
     * @param indexY {integer} the square left in the grid
     * @param threshold {float}
     * @param point {FloatPoint} is the result
     */
    calcPoint(side, indexX, indexY, threshold, point) {
        let gridX = 0;
        let gridY = 0;
        switch (side) {
            case South:
                gridY = indexY + 1;
                gridX = this.betweenX(indexX, gridY, indexX + 1, gridY, threshold);
                break;
            case East:
                gridX = indexX + 1;
                gridY = this.betweenY(gridX, indexY, gridX, indexY + 1, threshold);
                break;
            case North:
                gridY = indexY;
                gridX = this.betweenX(indexX, gridY, indexX + 1, gridY, threshold);
                break;
            case West:
                gridX = indexX;
                gridY = this.betweenY(gridX, indexY, gridX, indexY + 1, threshold);
                break;
            case SouthWest:
                gridX = indexX;
                gridY = indexY + 1;
                break;
            case SouthEast:
                gridX = indexX + 1;
                gridY = indexY + 1;
                break;
            case NorthEast:
                gridX = indexX + 1;
                gridY = indexY;
                break;
            case NorthWest:
                gridX = indexX;
                gridY = indexY;
                break;
        }
        point[0] = gridX;
        point[1] = gridY;
    }
    /**
     * Draw the field squares
     * @param minX {integer} left
     * @param minY {integer} top
     * @param maxX {integer} right
     * @param maxY {integer} bottom
     * @param threshold {float}
     * @param drawUnder {boolean}
     * @param shapePainter {ShapePainter}
     */
    fillContour(minX, minY, maxX, maxY, threshold, drawUnder, shapePainter) {
        const point = this.workingPoint;
        // It draws bands and small polygons.
        // The contour line is in a second loop, it's more efficient
        // than switching the style constantly.
        for (let squareY = minY; squareY < maxY - 1; squareY++) {
            // for run-length encoding
            let first15SquareX = -1;
            for (let squareX = minX; squareX < maxX - 1; squareX++) {
                let squareIndex = this.getSquareIndex(squareX, squareY, threshold);
                if (drawUnder) {
                    squareIndex = 15 - squareIndex;
                }
                if (squareIndex === 15) {
                    shapePainter.onFilledSquareChange(squareX, squareY);
                }
                if (first15SquareX === -1 && squareIndex === 15) {
                    first15SquareX = squareX;
                }
                if (first15SquareX !== -1) {
                    if (squareIndex !== 15) {
                        shapePainter.drawRectangle(first15SquareX, squareY, squareX, squareY + 1);
                        first15SquareX = -1;
                    }
                    else if (squareX === maxX - 2) {
                        shapePainter.drawRectangle(first15SquareX, squareY, squareX + 1, squareY + 1);
                        first15SquareX = -1;
                    }
                }
                if (squareIndex !== 0 && squareIndex !== 15) {
                    let fillVertices = marchingSquaresFillVertices[squareIndex];
                    this.calcPoint(fillVertices[0], squareX, squareY, threshold, point);
                    shapePainter.beginPath(point[0], point[1]);
                    for (let index = 1; index < fillVertices.length; index++) {
                        this.calcPoint(fillVertices[index], squareX, squareY, threshold, point);
                        shapePainter.lineTo(point[0], point[1]);
                    }
                    shapePainter.closePath();
                    shapePainter.endPath(squareX, squareY);
                }
            }
        }
    }
    /**
     * Draw the field squares
     * @param minX {integer} left
     * @param minY {integer} top
     * @param maxX {integer} right
     * @param maxY {integer} bottom
     * @param threshold {float}
     * @param drawUnder {boolean}
     * @param shapePainter {ShapePainter}
     */
    outlineContour(minX, minY, maxX, maxY, threshold, drawUnder, shapePainter) {
        const point = this.workingPoint;
        for (let squareY = minY; squareY < maxY - 1; squareY++) {
            for (let squareX = minX; squareX < maxX - 1; squareX++) {
                let squareIndex = this.getSquareIndex(squareX, squareY, threshold);
                if (drawUnder) {
                    squareIndex = 15 - squareIndex;
                }
                if (squareIndex !== 0 && squareIndex !== 15) {
                    for (let outlineVertices of marchingSquaresOutlineVertices[squareIndex]) {
                        this.calcPoint(outlineVertices[0], squareX, squareY, threshold, point);
                        shapePainter.beginPath(point[0], point[1]);
                        for (let index = 1; index < outlineVertices.length; index++) {
                            this.calcPoint(outlineVertices[index], squareX, squareY, threshold, point);
                            shapePainter.lineTo(point[0], point[1]);
                        }
                        shapePainter.endPath(squareX, squareY);
                    }
                }
            }
        }
    }
}

/**
 * A coordinate converter between a surface and a grid.
 */
class CoordConverter {
    /**
     * Create a coordinate converter between a surface and a grid.
     * @param cellWidth {float}
     * @param cellHeight {float}
     * @param left {float}
     * @param top {float}
     * @param right {float}
     * @param bottom {float}
     */
    constructor(cellWidth, cellHeight, left, top, right, bottom) {
        this.cellWidth = cellWidth;
        this.cellHeight = cellHeight;
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
    /**
     * @param x {float} in the scene basis
     * @return {float} x in the grid basis
     */
    convertToGridBasisX(x) {
        return (x - this.left) / this.cellWidth;
    }
    /**
     * @param y {float} in the scene basis
     * @return {float} y in the grid basis
     */
    convertToGridBasisY(y) {
        return (y - this.top) / this.cellHeight;
    }
    /**
     * @param x {float} in the grid basis
     * @return {float} x in the scene basis
     */
    convertFromGridBasisX(x) {
        return x * this.cellWidth + this.left;
    }
    /**
     * @param y {float} in the grid basis
     * @return {float} y in the scene basis
     */
    convertFromGridBasisY(y) {
        return y * this.cellHeight + this.top;
    }
    /**
     * @param distance {float} in the grid basis
     * @return {float} distance in the scene basis
     */
    convertToGridBasisDistance(distance) {
        return distance / this.cellWidth;
    }
}

/**
 * A height map.
 */
class HeightMap {
    /**
     * Create a height map.
     * @param scalarField {ScalarField} a scalar field for the height values.
     * @param coordConverter {CoordConverter} a coordinate converter between the
     * surface and the scalar field grid.
     */
    constructor(scalarField, coordConverter) {
        this.scalarField = scalarField;
        this.coordConverter = coordConverter;
    }
    /**
     * @param pointX {float} in terrain basis
     * @param pointY {float} in terrain basis
     * @param normal {[float, float, float]} the result
     * @return {[float, float, float]} the result
     */
    getFieldNormal(pointX, pointY, normal) {
        if (!normal) {
            normal = [0, 0, 0];
        }
        let x = this.coordConverter.convertToGridBasisX(pointX);
        let y = this.coordConverter.convertToGridBasisY(pointY);
        let squareX = Math.floor(x);
        let squareY = Math.floor(y);
        if (squareX < 0 ||
            squareY < 0 ||
            squareX >= this.scalarField.dimX() ||
            squareY >= this.scalarField.dimY()) {
            return null;
        }
        // This gives very approximating values on borders
        // but it's the easiest way to avoid to be out of bounds.
        // Why 1 but dim - 3?
        // - 1 margin for the normal calculus on both side
        // - 1 extra because extrapolation asks values on right and bottom.
        if (squareX < 1) {
            squareX = 1;
            x = squareX;
        }
        if (squareX > this.scalarField.dimX() - 3) {
            squareX = this.scalarField.dimX() - 3;
            x = squareX;
        }
        if (squareY < 1) {
            squareY = 1;
            y = squareY;
        }
        if (squareY > this.scalarField.dimY() - 3) {
            squareY = this.scalarField.dimY() - 3;
            y = squareY;
        }
        // Extrapolate
        let weighedValueSumX = 0;
        let weighedValueSumY = 0;
        let weighedValueSumZ = 0;
        for (let vertexX = squareX; vertexX <= squareX + 1; vertexX++) {
            for (let vertexY = squareY; vertexY <= squareY + 1; vertexY++) {
                normal[0] = 0;
                normal[1] = 0;
                normal[2] = 0;
                this.addGridPointNormal(vertexX, vertexY, normal);
                const dx = vertexX - x;
                const dy = vertexY - y;
                if (dx === 0 && dy === 0) {
                    // Double break, no interpolation needed.
                    vertexX += 2;
                    vertexY += 2;
                }
                else {
                    const distance = Math.hypot(dx, dy);
                    weighedValueSumX += normal[0] / distance;
                    weighedValueSumY += normal[1] / distance;
                    weighedValueSumZ += normal[2] / distance;
                }
            }
        }
        const length = Math.hypot(normal[0], normal[1], normal[2]);
        normal[0] /= length;
        normal[1] /= length;
        normal[2] /= length;
        return normal;
    }
    /**
     * @param pointX {float} in terrain basis
     * @param pointY {float} in terrain basis
     * @return {float} the field value
     */
    getHeight(pointX, pointY) {
        let x = this.coordConverter.convertToGridBasisX(pointX);
        let y = this.coordConverter.convertToGridBasisY(pointY);
        return this.scalarField.extrapolate(x, y);
    }
    /**
     * Evaluate the normal at a given grid point.
     *
     * The normal is not normalized.
     *
     * @param x {integer} grid index
     * @param y {integer} grid index
     * @param normal {[float, float, float]} the result
     */
    addGridPointNormal(x, y, normal) {
        const z = this.scalarField.get(x, y);
        let rightX = 1;
        const rightY = 0;
        let rightZ = this.scalarField.get(x + 1, y) - z;
        const rightLength = Math.hypot(rightX, rightZ);
        rightX /= rightLength;
        rightZ /= rightLength;
        let leftX = -1;
        const leftY = 0;
        let leftZ = this.scalarField.get(x - 1, y) - z;
        const leftLength = Math.hypot(leftX, leftZ);
        leftX /= leftLength;
        leftZ /= leftLength;
        const bottomX = 0;
        let bottomY = 1;
        let bottomZ = this.scalarField.get(x, y + 1) - z;
        const bottomLength = Math.hypot(bottomY, bottomZ);
        bottomY /= bottomLength;
        bottomZ /= bottomLength;
        const topX = 0;
        let topY = -1;
        let topZ = this.scalarField.get(x, y - 1) - z;
        const topLength = Math.hypot(topY, topZ);
        topY /= topLength;
        topZ /= topLength;
        // The mean of the normal of the 4 triangles around the grid point.
        this.addNormal(topX, topY, topZ, rightX, rightY, rightZ, normal);
        this.addNormal(rightX, rightY, rightZ, bottomX, bottomY, bottomZ, normal);
        this.addNormal(bottomX, bottomY, bottomZ, leftX, leftY, leftZ, normal);
        this.addNormal(leftX, leftY, leftZ, topX, topY, topZ, normal);
    }
    /**
     * @param uX {float}
     * @param uY {float}
     * @param uZ {float}
     * @param vX {float}
     * @param vY {float}
     * @param vZ {float}
     * @param normal {[float, float, float]} the result
     */
    addNormal(uX, uY, uZ, vX, vY, vZ, normal) {
        normal[0] += uY * vZ - uZ * vY;
        normal[1] += uZ * vX - uX * vZ;
        normal[2] += uX * vY - uY * vX;
    }
    /**
     * Clear the field by filling it with a give value.
     * @param value {float}
     */
    clear(value = 0) {
        this.scalarField.clear(value);
    }
    /**
     * Cap the field between 2 values.
     * @param min {float}
     * @param max {float}
     */
    clamp(min, max) {
        this.scalarField.clamp(min, max);
    }
    /**
     * Apply an affine transformation on each field value.
     * @param a {float} factor
     * @param b {float} offset
     */
    transform(a, b) {
        this.scalarField.transform(a, b);
    }
    /**
     * Merge a disk in the field.
     * @param centerX {float} in terrain basis
     * @param centerY {float} in terrain basis
     * @param radius {float} in terrain basis
     * @param cappingRadiusRatio {float}
     * @param operation {function(float, float):float}
     */
    mergeDisk(centerX, centerY, radius, cappingRadiusRatio, operation) {
        this.scalarField.mergeDisk(this.coordConverter.convertToGridBasisX(centerX), this.coordConverter.convertToGridBasisY(centerY), this.coordConverter.convertToGridBasisDistance(radius), cappingRadiusRatio, operation);
    }
    /**
     * Merge a segment in the field.
     * @param startX {float} in terrain basis
     * @param startY {float} in terrain basis
     * @param endX {float} in terrain basis
     * @param endY {float} in terrain basis
     * @param thickness {float} in terrain basis
     * @param cappingRadiusRatio {float}
     * @param operation {function(float, float):float}
     */
    mergeSegment(startX, startY, endX, endY, thickness, cappingRadiusRatio, operation) {
        this.scalarField.mergeSegment(this.coordConverter.convertToGridBasisX(startX), this.coordConverter.convertToGridBasisY(startY), this.coordConverter.convertToGridBasisX(endX), this.coordConverter.convertToGridBasisY(endY), this.coordConverter.convertToGridBasisDistance(thickness), cappingRadiusRatio, operation);
    }
    /**
     * Merge a hill in the field.
     * @param centerX {float} in terrain basis
     * @param centerY {float} in terrain basis
     * @param height {float}
     * @param radius {float} in terrain basis
     * @param opacity {float}
     * @param cappingRadiusRatio {float}
     * @param operation {function(float, float):float}
     */
    mergeHill(centerX, centerY, height, radius, opacity, cappingRadiusRatio, operation) {
        this.scalarField.mergeHill(this.coordConverter.convertToGridBasisX(centerX), this.coordConverter.convertToGridBasisY(centerY), height, this.coordConverter.convertToGridBasisDistance(radius), opacity, cappingRadiusRatio, operation);
    }
    /**
     * Flood an area from a given location until a maximum field value is reached.
     * @param originX {float} in terrain basis
     * @param originY {float} in terrain basis
     * @param valueMax {float}
     * @param thickness {float}
     * @param cappingRadiusRatio {float} the radius where to stop the contour shading
     * @param isMinimum {boolean} when set to true, the threshold is a minimum
     * or a maximum otherwise.
     */
    fillFrom(originX, originY, valueMax, thickness, cappingRadiusRatio) {
        this.scalarField.fillFrom(this.coordConverter.convertToGridBasisX(originX), this.coordConverter.convertToGridBasisY(originY), valueMax, this.coordConverter.convertToGridBasisDistance(thickness), cappingRadiusRatio);
    }
    /**
     * Flood an area from a given location until a maximum field value is reached.
     * @param originX {float} in terrain basis
     * @param originY {float} in terrain basis
     * @param valueMax {float}
     * @param thickness {float}
     * @param cappingRadiusRatio {float} the radius where to stop the contour shading
     * @param isMinimum {boolean} when set to true, the threshold is a minimum
     * or a maximum otherwise.
     */
    unfillFrom(originX, originY, valueMax, thickness, cappingRadiusRatio) {
        this.scalarField.unfillFrom(this.coordConverter.convertToGridBasisX(originX), this.coordConverter.convertToGridBasisY(originY), valueMax, this.coordConverter.convertToGridBasisDistance(thickness), cappingRadiusRatio);
    }
}

gdjs.__marchingSquaresExtension = gdjs.__marchingSquaresExtension || {};
gdjs.__marchingSquaresExtension.CoordConverter = CoordConverter;
gdjs.__marchingSquaresExtension.HeightMap = HeightMap;
gdjs.__marchingSquaresExtension.MarchingSquares = MarchingSquares;
gdjs.__marchingSquaresExtension.ScalarField = ScalarField;

};
gdjs.evtsExt__MarchingSquares__DefineScalarFieldPainterLibrary.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MarchingSquares__DefineScalarFieldPainterLibrary.userFunc0x9cc610(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MarchingSquares__DefineScalarFieldPainterLibrary.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__MarchingSquares__DefineScalarFieldPainterLibrary.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__MarchingSquares__DefineScalarFieldPainterLibrary.registeredGdjsCallbacks = [];