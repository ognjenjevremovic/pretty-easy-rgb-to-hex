//  Dependancies
import { isObject, isString, isNumber } from '.';


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
export function isRGB(value: any): boolean {
    if(isObject(value)) {
        if(isNumber(+value.red) && isNumber(+value.green) && isNumber(+value.blue)) {
            if(
                (isString(value.red)   || isNumber(value.red))   &&
                (isString(value.green) || isNumber(value.green)) &&
                (isString(value.blue)  || isNumber(value.blue))
            ) return true;
            else return false;
        }
        else {
            return false;
        }
    }
    else return false;
}
