/**
 * by @xennia316
 */

// Boolean ( true or false)
// null (Empty object)
// undefined (Variable with no value)
// number (Of type number)
// Bigint (Similar to number but much longer)
// String (Letters and punctuations). Declared with double or single quotes
// Symbol

// Checking type of variable
let bon = "Bonvic";
console.log(typeof bon);
// Above code displays string

let bigint = 1234567890000000000000;
console.log(typeof bigint);
// Above code displayes bigint

let undefined;
console.log(typeof undefined);
// Above code displayes undefined

//Type conversions
//Converting integers to stringd
let In_to_string = String(10);
console.log(In_to_string);
console.log(typeof In_to_string);

//Converting int to string
console.log(parseInt(In_to_string));

//Concatenating two strings
let sentence = "20" + 10;
console.log(sentence);

//Coverts string data types to bool
let bool = true;
let stringToBool = "10";
console.log(Boolean(stringToBool));