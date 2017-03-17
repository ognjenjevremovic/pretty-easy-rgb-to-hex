"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var pretty_easy_data_types_1 = require("pretty-easy-data-types");
/**
 * @description
 *  Extracts the RGB color properties
 *  from supplied string and parses them
 *  into numbers
 *
 * @export
 * @param {string} value
 * @returns {number[]}
 */
function extractColors_String(value) {
    var colors = value.match(/(0?\.?\d{1,3})\%?\b/g);
    return colors.map(function (color) { return +color; });
}
exports.extractColors_String = extractColors_String;
/**
 * @description
 *  Extracts the RGB color properties
 *  from supplied object and parses them
 *  into numbers
 *
 * @export
 * @param {IRGB} value
 * @returns {number[]}
 */
function extractColors_IRGB(value) {
    return [
        pretty_easy_data_types_1.isString(value.red) ? +value.red : value.red,
        pretty_easy_data_types_1.isString(value.green) ? +value.green : value.green,
        pretty_easy_data_types_1.isString(value.blue) ? +value.blue : value.blue
    ];
}
exports.extractColors_IRGB = extractColors_IRGB;
//# sourceMappingURL=extractColors.js.map