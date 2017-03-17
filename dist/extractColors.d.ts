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
export declare function extractColors_String(value: string): number[];
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
export declare function extractColors_IRGB(value: IRGB): number[];
