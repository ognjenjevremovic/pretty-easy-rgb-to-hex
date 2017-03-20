//  Tests
import {
    undefinedValue,
    nullValue,
    booleanValue,
    functionValue,
    dateObjectValue,
    errorObjectValue,
    arrayValue
 } from './invalidDataTypes';
import { invalidNumberValues } from './numbers';
import { invalidStringValues } from './strings';
import { invalidObjectValue } from './object';


//  Invalid data types
export function dataTypes() {
    describe('Value passed is of invalid data type', () => {
        undefinedValue();
        nullValue();
        booleanValue();
        functionValue();
        dateObjectValue();
        errorObjectValue();
        arrayValue();
    });
}

//  Invalid values
export function invalidValues() {
    describe('Value passed is of invalid value', () => {
        invalidNumberValues();
        invalidStringValues();
        invalidObjectValue();
    });
}
