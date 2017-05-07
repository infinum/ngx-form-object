"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contains_helper_1 = require("./contains.helper");
describe('Helper - contains', function () {
    var items = ['Tomato', 'Potato', 'Salt'];
    var comparisonFunction = function (currentItem, searchedItem) {
        return currentItem === searchedItem;
    };
    it('should return true if array contains word Potato', function () {
        var result = contains_helper_1.contains(items, 'Potato');
        expect(result).toBeTruthy();
    });
    it('should return false if array doesn\'t contain word Meat', function () {
        var result = contains_helper_1.contains(items, 'Meat');
        expect(result).toBeFalsy();
    });
    it('should return true if array contains something macthed in comparisonFunction', function () {
        var result = contains_helper_1.contains(items, 'Salt', comparisonFunction);
        expect(result).toBeTruthy();
    });
});
