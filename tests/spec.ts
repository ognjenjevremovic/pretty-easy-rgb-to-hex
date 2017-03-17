//  Dependancies
import { validRGBValue_returnsString, invalidRGBValue_returnError } from '.';


//  Value passed is not a valid data type
describe('Value passed is not a valid data type', () => {

    //  undefined
    invalidRGBValue_returnError('undefined');
    invalidRGBValue_returnError('undefined', undefined);

    //  null
    invalidRGBValue_returnError('null', null);

    //  boolean
    invalidRGBValue_returnError('boolean', false);
    invalidRGBValue_returnError('boolean', true);

    //  function
    invalidRGBValue_returnError('function', () => {});

    //  arrays
    invalidRGBValue_returnError('array', []);
    invalidRGBValue_returnError('array', ['invalid']);
    invalidRGBValue_returnError('array', ['invalid', 'colors', 'supplied']);
    invalidRGBValue_returnError('array', ['some', 'random', 'values', 25, false]);
    invalidRGBValue_returnError('array', [255, 255, 255, 0.4]);

    //  Date
    invalidRGBValue_returnError('instanceof Date', new Date());

    //  Error
    invalidRGBValue_returnError('instanceof Error', new Error());

});

//  Value passed is an invalid RGB color value representation
describe('Value passed is a valid data type, but invalid RGB(a) color value representation', () => {

    //  More info
    const info: string = 'invalid RGB color representation';

    //  Invalid string values
    invalidRGBValue_returnError(`${info} [string]`, 'color');
    invalidRGBValue_returnError(`${info} [string]`, 'invalid', 'colors', 'supplied');
    invalidRGBValue_returnError(`${info} [string]`, '', '', '', '');
    invalidRGBValue_returnError(`${info} [string]`, '500', '-200', '400');
    invalidRGBValue_returnError(`${info} [string]`, '500', '-200', '400', '0.4');
    invalidRGBValue_returnError(`${info} [string]`, '200', '200', '200', '-5');
    invalidRGBValue_returnError(`${info} [string]`, '300', '300', '300', '.5');

    //  numbers
    invalidRGBValue_returnError(`${info} [number]`, 0);
    invalidRGBValue_returnError(`${info} [number]`, 25);
    invalidRGBValue_returnError(`${info} [number]`, 500, 500, 400);
    invalidRGBValue_returnError(`${info} [number]`, 500, 500, 400, .5);
    invalidRGBValue_returnError(`${info} [number]`, 200, 200, 100, 105);

    //  Object literals
    invalidRGBValue_returnError(`${info} [object]`, {});
    invalidRGBValue_returnError(`${info} [object]`, {foo: 'bar', baz: 'f00'});
    invalidRGBValue_returnError(`${info} [object]`, {red: 'foo', green: 'bar', blue: 'baz'});
    invalidRGBValue_returnError(`${info} [object]`, {red: '300', green: '300', blue: '300'});
    invalidRGBValue_returnError(`${info} [object]`, {red: '300', green: '300', blue: '300', alpha: '.4'});
    invalidRGBValue_returnError(`${info} [object]`, {red: '200', green: '200', blue: '200', alpha: '-4'});
    invalidRGBValue_returnError(`${info} [object]`, {red: '200', green: '200', blue: 'baz'});
});

//  Test - Valid hex color value (Returns an array)
describe('Value passed is a valid HEX color value representation', () => {

    //  More info
    const info = {
        RGBString : {
            noAlpha :   'RGB string, no alpha',
            alpha   :   'RGBA string, alpha'
        },
       RGBObj     : {
            noAlpha :   'RGB object, no alpha',
            alpha   :   'RGB(a) object, alpha'
        },
        strings   : {
            noAlpha :   'strings, no alpha',
            alpha   :   'strings, alpha'
        },
        numbers   : {
            noAlpha :   'numbers, no alpha',
            alpha   :   'numbers, alpha'
        }
    };

    //  Valid RGB(a) string representation of HEX color code
    validRGBValue_returnsString(info.RGBString.noAlpha, '4286F4', 'rgb(  66,  134,244  )');
    validRGBValue_returnsString(info.RGBString.noAlpha, '17AABF', 'rgb(23,170,191   )');
    validRGBValue_returnsString(info.RGBString.alpha,   '1E460B', 'rgba(30,70,   11,   .5 )');
    validRGBValue_returnsString(info.RGBString.alpha,   '5A3C0B', 'rgba(  90,   60,11,40 )');

    //  Valid number representation of HEX color code
    validRGBValue_returnsString(info.RGBObj.noAlpha,    '4286F4', {red: '66', green: '134', blue: '244'});
    validRGBValue_returnsString(info.RGBObj.noAlpha,    '17AABF', {red:  23,  green:  170,  blue: 191});
    validRGBValue_returnsString(info.RGBObj.alpha,      '1E460B', {red: '30', green:  '70', blue: '11', alpha: '.5'});
    validRGBValue_returnsString(info.RGBObj.alpha,      '5A3C0B', {red:  90,  green:  60,   blue: 11, alpha: 40});

    //  Valid string representation of HEX color code (alpha)
    validRGBValue_returnsString(info.strings.noAlpha,   '4286F4', '66', '134', '244');
    validRGBValue_returnsString(info.strings.noAlpha,   '17AABF', '23', '170', '191');
    validRGBValue_returnsString(info.strings.alpha,     '1E460B', '30', '70', '11', '.5');
    validRGBValue_returnsString(info.strings.alpha,     '5A3C0B', '90', '60', '11', '40' );

    //  Valid number representation of HEX color code
    validRGBValue_returnsString(info.numbers.noAlpha,   '4286F4', 66, 134, 244);
    validRGBValue_returnsString(info.numbers.noAlpha,   '17AABF', 23, 170, 191);
    validRGBValue_returnsString(info.numbers.alpha,     '1E460B', 30, 70, 11, .5);
    validRGBValue_returnsString(info.numbers.alpha,     '5A3C0B', 90, 60, 11, 40 );

});
