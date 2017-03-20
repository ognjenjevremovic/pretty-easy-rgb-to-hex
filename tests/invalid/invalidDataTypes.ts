//  Dependancies
import { invalidRGBValue_returnError } from './validate';


//  undefined
export function undefinedValue() {
    describe('undefined value', () => {
        invalidRGBValue_returnError('from undefined value');
        invalidRGBValue_returnError('from undefined value', undefined);
    });
}

//  null
export function nullValue() {
    describe('null value', () => {
        invalidRGBValue_returnError('from null value', null);
    });
}

//  boolean
export function booleanValue() {
    describe('boolean value', () => {
        invalidRGBValue_returnError('from boolean value', true);
        invalidRGBValue_returnError('from boolean balue', false);
    });
}

//  function
export function functionValue() {
    describe('Function', () => {
        invalidRGBValue_returnError('from function', () => { });
        invalidRGBValue_returnError('from function', () => true);
        invalidRGBValue_returnError('from function', () => 'rgb(12, 12, 50)');
    });
}

//  instance of Date class
export function dateObjectValue() {
    describe('instance of Date class', () => {
        invalidRGBValue_returnError('from date object', new Date());
    });
}

//  instance of Error class
export function errorObjectValue() {
    describe('instance of Error class', () => {
        invalidRGBValue_returnError('from error object', new Error('invalid value'));
    });
}

//  Array
export function arrayValue() {
    describe('Array', () => {
        invalidRGBValue_returnError('from Array', []);
        invalidRGBValue_returnError('from Array', [   '',   2,  34 ]);
        invalidRGBValue_returnError('from Array', [  255, 132,  45 ]);
        invalidRGBValue_returnError('from Array', [ '50',  60,   0 ]);
    });
}
