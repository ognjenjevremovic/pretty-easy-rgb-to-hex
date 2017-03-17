"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description
 *  Makes a HEX color value out of an array
 *  of valid RGB values and return it
 *
 * @export
 * @param {number[]} colors
 * @returns {string}
 */
exports.hexValue = function (colors) { return colors.map(function (color) {
    var stringColor = color.toString(16).toLocaleUpperCase();
    return stringColor.length === 1 ? '0' + stringColor : stringColor;
}).join(''); };
//# sourceMappingURL=hexValue.js.map