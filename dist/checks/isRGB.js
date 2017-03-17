"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var pretty_easy_data_types_1 = require("pretty-easy-data-types");
/**
 * @description
 *  Check if the value passed is a valid
 *  IRGB object containing red, green, blue, alpha?
 *  properties with values of type string or number
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
function isRGB(value) {
    if (pretty_easy_data_types_1.isObject(value)) {
        if (value.red && value.green && value.blue) {
            if ((pretty_easy_data_types_1.isString(value.red) || pretty_easy_data_types_1.isNumber(value.red)) &&
                (pretty_easy_data_types_1.isString(value.green) || pretty_easy_data_types_1.isNumber(value.green)) &&
                (pretty_easy_data_types_1.isString(value.blue) || pretty_easy_data_types_1.isNumber(value.blue)))
                return true;
            else
                return false;
        }
        else {
            return false;
        }
    }
    else
        return false;
}
exports.isRGB = isRGB;
//# sourceMappingURL=isRGB.js.map