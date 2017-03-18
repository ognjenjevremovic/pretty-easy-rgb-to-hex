"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var _1 = require(".");
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
    if (_1.isObject(value)) {
        if (_1.isNumber(+value.red) && _1.isNumber(+value.green) && _1.isNumber(+value.blue)) {
            if ((_1.isString(value.red) || _1.isNumber(value.red)) &&
                (_1.isString(value.green) || _1.isNumber(value.green)) &&
                (_1.isString(value.blue) || _1.isNumber(value.blue)))
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