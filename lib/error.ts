/**
 * @description
 *  Returns a instance of an Error class
 *  with a message from an input
 *
 * @export
 * @param {string} info
 * @returns {Error}
 */
export const returnError = (info: string): Error => new Error(info);
