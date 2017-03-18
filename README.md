# pretty-easy-rgb-to-hex
[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Tests][tests-image]][travis-url]

### *What is pretty-easy-rgb-to-hex?*
***pretty-easy-rgb-to-hex*** *is a simple NodeJS module for converting an RGB(A) color value to it's corresponding HEX value*.

&nbsp;

# Install
This is a [NodeJS](http://www.node.js) module available through the [npm](http://npmjs.org) registry. Installation is done using the **npm install** command:
```sh
$ npm install pretty-easy-rgb-to-hex
```

&nbsp;

# Usage
After installing the module (localy in your project directory), in order to use it in your file you first need to require it.
```javascript
let rgbToHEX = require('pretty-easy-rgb-to-hex');
```
&nbsp;

or if you use TypeScript
```typescript
import rgbToHEX from 'pretty-easy-rgb-to-hex'
```
&nbsp;

The module returns a function for you to call and supply with an RGB(a) color value that you'd like to transform into its' corresponding HEX value.
The function returns a String (HEX value, without a hash [#]), or an instance of Error class if the invalid color value was supplied to the function.
&nbsp;

***Important:***
 * HEX value returned does NOT include the hash [#] - this is intended!,
 * no matter if alpha is passed or not the resulting HEX value will be 6 characters long - this is due to the nature of valid HEX color values that are either 3 or 6 characters long,
 * HEX value returned is always 6 characters long,
 * HEX color value returned consists of CAPITAL (no lowercase),
 * there are 4 valid ways of calling the function (see the example code below)

&nbsp;

## Examples

### Convert RGB(a) color to HEX color
```javascript
/*
*   The module is flexible enough, as it allows you
*   to supply it with different RGB(a) color values,
*   no matter if it is a String, Number values, Object...
*
*   There are 4 valid ways of calling the function
*/

//  Example 1. - single string value 
rgbToHEX('rgb(255, 0, 0)');         //  returns 'FF0000'
rgbToHEX('rgba(255, 0, 0, 1)');     //  returns 'FF0000'
rgbToHEX('255, 0, 0, 1');           //  returns 'FF0000'

//  Example 2. - 3 string values
rgbToHEX('255', '0', '0');          //  returns 'FF0000'

//  Example 3. - 3 number values
rgbToHEX(255, 0, 0);                //  returns 'FF0000'

//  Example 4. - RGB(a) object
rgbToHEX({red: '255', green: '0', blue: '0'});              //  returns 'FF0000'
rgbToHEX({red:   255, green:   0, blue: 0  });              //  returns 'FF0000'
rgbToHEX({red:   255, green:   0, blue: 0  , alpha: 60});   //  returns 'FF0000'
```

&nbsp;

### Consider the following
```javascript
/*
*   The module will return an instance of an Error class,
*   instead of throwing an error and terminating the process
*   and thus making it more dynamic and usable for production
*   where you depend on the user input,
*   if argument passed is not a valid RGB(a) color value.
*
*   Because of this, I advise you to 
*   consider including a utility library,
*   to check the output data type, such as
*             pretty-easy-data-types
*
*   https://www.npmjs.com/package/pretty-easy-data-types
*/
const { 
    isString,       //  check if the value supplied is of type String
    isError         //  check for instance of Error class
} = require('pretty-easy-data-types');
const rgbToHEX  = require('pretty-easy-rgb-to-hex');


//  You can pass any value/data type to a function, 
//  without causing your process to break
const convertToHex = rgbToHEX('this is an invalid value!');

//  Check if the value returned is of type String
//  if it is, prepend the hash on the HEX value
//  else it is an instance of an Error class
//  handle it somehow
const hexColor = isString(convertToHex) ?
    `#${convertToHex}` :
    convertToHex;
if(isError(hexColor)) console.log(`Invalid RGB(a) color value passed: ${hexColor.message}`);
```

&nbsp;

### Want to contribute?
**Great!**
Anyone can help make this project better - check out the [github](https://github.com/ognjenjevremovic/pretty-easy-rgb-to-hex) repository!

### Found a bug?
Please open a an [issue](https://github.com/ognjenjevremovic/pretty-easy-rgb-to-hex/issues).

### License
Copyright (c) 2017 [Ognjen Jevremović](https://github.com/ognjenjevremovic)

Licensed under the [MIT](https://github.com/ognjenjevremovic/pretty-easy-rgb-to-hex/blob/master/LICENSE) License.

[npm-image]: https://img.shields.io/npm/v/pretty-easy-rgb-to-hex.svg
[npm-url]: https://npmjs.org/package/pretty-easy-rgb-to-hex
[travis-image]: https://img.shields.io/travis/ognjenjevremovic/pretty-easy-rgb-to-hex/master.svg
[travis-url]: https://travis-ci.org/ognjenjevremovic/pretty-easy-rgb-to-hex
[tests-image]: https://img.shields.io/badge/test-passing-green.svg