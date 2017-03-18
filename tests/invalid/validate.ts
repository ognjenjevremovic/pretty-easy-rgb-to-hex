//  Dependancie
import * as assert from 'assert';
import * as rgbToHEX from '../..';


//  For test purposes only
declare function rgbToHEX(...params: Array<any>): Error;

//  Should return an Error
const shouldReturnError: string = 'Should return an instance of Error ->';


/**
 * @description
 *  Check if the value returns
 *  a new instance of Error
 *  and does not throw it
 *
 * @param {string} info
 * @param {*} [value]
 * @returns {*}
 */
export function invalidRGBValue_returnError(info: string, ...value: Array<any>): void {
    it(`${shouldReturnError} ${info}`, () => {
        //  Does not throw an error
        assert.doesNotThrow(() => rgbToHEX(value), Error);
        //  But returns an instance of Error class
        assert.deepEqual(() => rgbToHEX(value), new Error('error'));
    });
}
