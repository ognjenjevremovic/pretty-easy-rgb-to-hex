"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancie
var assert = require("assert");
var rgbToHEX = require("../..");
//  Should return an Array of numbers
var shouldReturnString = 'Should return a HEX color string ->';
/**
 * @description
 *  Check if the value returns
 *  an array of number values
 *  that represent the RGB color
 *
 * @param {string} info
 * @param {string} value
 * @param {number[]} equalityCheck
 */
function validRGBValue_returnsString(info, equalityCheck) {
    var value = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        value[_i - 2] = arguments[_i];
    }
    it(shouldReturnString + " " + info, function () { return assert.equal(rgbToHEX.apply(void 0, value), equalityCheck); });
}
exports.validRGBValue_returnsString = validRGBValue_returnsString;
//# sourceMappingURL=validate.js.map