//  Dependancies
import { isString } from 'pretty-easy-data-types';
import { IRGB } from './interfaces';


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
export function extractColors_String(value: string): number[] {
    const colors: string[] = value.match(/(0?\.?\d{1,3})\%?\b/g);

    return colors.map(color => +color);
}

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
export function extractColors_IRGB(value: IRGB): number[] {
    return [
        isString(value.red)     ? +value.red as number  : value.red as number,
        isString(value.green)   ? +value.green as number: value.green as number,
        isString(value.blue)    ? +value.blue as number : value.blue as number
    ];
}
