"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var checks_1 = require("./checks");
var extractColors_1 = require("./extractColors");
var error_1 = require("./error");
var hexValue_1 = require("./hexValue");
/**
 * @description
 *  Returns a string representation of a color
 *  in the 6 || 8 character HEX format
 *  from provided RGB(a) value
 *
 * @export
 * @param {any} params
 * @returns
 */
exports.getHEX = function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    //  Initialize the variables
    var colors;
    //  RGB(A) css color property value passed
    if (params.length === 1) {
        if (checks_1.isString(params[0]))
            colors = extractColors_1.extractColors_String(params[0]);
        else if (checks_1.isObject(params[0]) && checks_1.isRGB(params[0]))
            colors = extractColors_1.extractColors_IRGB(params[0]);
        else
            return error_1.returnError("Single value passed must be a string representation of a RGB(a) color or an object with { red, green, blue } properties.");
    }
    else if (params.length === 3 || params.length === 4)
        colors = params.map(function (param) { return +param; });
    else
        return error_1.returnError("Array must hold number values representing colors red, green, blue.");
    //  If alpha was passed too
    if (colors.length === 4)
        colors.pop();
    //  Return HEX value
    return hexValue_1.hexValue(colors);
};
//# sourceMappingURL=getHEX.js.map