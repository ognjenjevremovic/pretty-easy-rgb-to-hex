//  Dependancies
import { isString, isObject, isRGB } from './checks';
import { IModule, IRGB } from './interfaces';
import {
    extractColors_IRGB,
    extractColors_String
} from './extractColors';
import { returnError as error } from './error';
import { hexValue } from './hexValue';


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
export const getHEX: IModule = (...params) => {
    //  Initialize the variables
    let colors  : number[];

    //  RGB(A) css color property value passed
    if(params.length === 1) {
        if(isString(params[0])) colors = extractColors_String(params[0] as string);
        else if(isObject(params[0]) && isRGB(params[0])) colors = extractColors_IRGB(params[0] as IRGB);
        else return error(`Single value passed must be a string representation of a RGB(a) color or an object with { red, green, blue } properties.`);
    }

    //  Array of colors
    //  alpha can be included, but it is not taken in the output
    //  as HEX includes 6 characters
    else if(params.length === 3 || params.length === 4)  colors = params.map(param => +param as number);
    //  Unsupported value
    else return error(`Array must hold number values representing colors red, green, blue.`);

    //  If alpha was passed too
    if(colors.length === 4) colors.pop();

    //  Return HEX value
    return hexValue(colors);
};
