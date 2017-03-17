/**
 * @description
 *  Makes a HEX color value out of an array
 *  of valid RGB values and return it
 *
 * @export
 * @param {number[]} colors
 * @returns {string}
 */
export const hexValue = (colors: number[]): string => colors.map(color => color.toString(16).toLocaleUpperCase()).join('');
