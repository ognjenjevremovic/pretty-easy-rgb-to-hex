/**
 * @description
 *  Makes a HEX color value out of an array
 *  of valid RGB values and return it
 *
 * @export
 * @param {number[]} colors
 * @returns {string}
 */
export const hexValue = (colors: number[]): string => colors.map(color => {
    const stringColor = color.toString(16).toLocaleUpperCase();

    return stringColor.length === 1 ? '0' + stringColor : stringColor;
}).join('');
