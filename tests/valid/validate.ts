//  Dependancie
import * as assert from 'assert';
import * as rgbToHEX from '../..';


//  For test purposes only
declare function rgbToHEX(...params: Array<any>): string;

//  Should return an Array of numbers
const shouldReturnString: string = 'Should return a HEX color string ->';


/**
 * @description
 *  Check if the value returns
 *  an array of number values
 *  that represent the RGB color
 *
 * @param {string} info
 * @param {string} value
 * @param {number[]} equalityCheck
 */
export function validRGBValue_returnsString(info: string, equalityCheck: string, ...value: Array<any>): void {
    it(`${shouldReturnString} ${info}`, () =>  assert.equal(rgbToHEX(...value), equalityCheck));
}
