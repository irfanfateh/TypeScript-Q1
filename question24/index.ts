// Tests for equality and inequality with strings
let str1: string = 'hello';
let str2: string = 'HELLO';

console.log(str1 === 'hello'); // true
console.log(str1 === str2); // false
console.log(str1 !== str2); // true

// Tests using the lower case function
let message: string = 'HeLLo WoRLd';
let lowerCaseMessage: string = message.toLowerCase();

console.log(lowerCaseMessage === 'hello world'); // true
console.log(message === 'Hello World'); // false

//Tests using numeric
let num1: number = 10;
let num2: number = 5;

console.log(num1 === 10); // true
console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // true
console.log(num1 >= num2); // true
console.log(num2 < num1); // true
console.log(num2 <= num1); // true

// Tests using "and" and "or" operators
let a: boolean = true;
let b: boolean = false;

console.log(a && b); // false
console.log(a || b); // true

// Test whether an item is in an array
let fruits: string[] = ['apple', 'banana', 'orange'];

console.log(fruits.indexOf('banana')!=-1); // true
console.log(fruits.indexOf('grape')!=-1); // false

// Test whether an item is not in an array
let vegetables: string[] = ['carrot', 'lettuce', 'broccoli'];

console.log(vegetables.indexOf('tomato')==-1); // true
console.log(vegetables.indexOf('lettuce')==-1); // false
