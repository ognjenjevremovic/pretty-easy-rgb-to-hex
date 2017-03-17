/**
 * @description
 *  Check if the alpha value is valid
 *  if it is greater than or equal to 0
 *  and less than or equal to 100
 *
 * @export
 * @param {number} alpha
 * @returns {boolean}
 */
export const isValidAlpha = (alpha: number): boolean => alpha >=0 && alpha <= 100;
