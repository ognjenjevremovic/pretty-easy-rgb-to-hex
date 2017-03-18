"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancie
var assert = require("assert");
var rgbToHEX = require("../..");
//  Should return an Error
var shouldReturnError = 'Should return an instance of Error ->';
/**
 * @description
 *  Check if the value returns
 *  a new instance of Error
 *  and does not throw it
 *
 * @param {string} info
 * @param {*} [value]
 * @returns {*}
 */
function invalidRGBValue_returnError(info) {
    var value = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        value[_i - 1] = arguments[_i];
    }
    it(shouldReturnError + " " + info, function () {
        //  Does not throw an error
        assert.doesNotThrow(function () { return rgbToHEX(value); }, Error);
        //  But returns an instance of Error class
        assert.deepEqual(function () { return rgbToHEX(value); }, new Error('error'));
    });
}
exports.invalidRGBValue_returnError = invalidRGBValue_returnError;
//# sourceMappingURL=validate.js.map