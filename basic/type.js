// Type Conversion and Coercion

// type conversion

const inputYear = '1991';
console.log(Number(inputYear), inputYear); // Number, String
console.log(Number(inputYear) + 18); // Number

console.log(Number('Jonas')); // NaN
console.log(typeof NaN); // Number

console.log(String(23), 23) 

// type coercion

console.log('I am ' + 22 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);