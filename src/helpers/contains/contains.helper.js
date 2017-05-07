"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function contains(arr, item, comparisonFunction) {
    if (comparisonFunction) {
        return arr.some(function (arrItem) { return comparisonFunction(arrItem, item); });
    }
    else {
        return arr.indexOf(item) !== -1;
    }
}
exports.contains = contains;
