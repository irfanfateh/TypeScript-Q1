// Tests for equality and inequality with strings
var str1 = 'hello';
var str2 = 'HELLO';
console.log(str1 === 'hello'); // true
console.log(str1 === str2); // false
console.log(str1 !== str2); // true
// Tests using the lower case function
var message = 'HeLLo WoRLd';
var lowerCaseMessage = message.toLowerCase();
console.log(lowerCaseMessage === 'hello world'); // true
console.log(message === 'Hello World'); // false
//Tests using numeric
var num1 = 10;
var num2 = 5;
console.log(num1 === 10); // true
console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // true
console.log(num1 >= num2); // true
console.log(num2 < num1); // true
console.log(num2 <= num1); // true
// Tests using "and" and "or" operators
var a = true;
var b = false;
console.log(a && b); // false
console.log(a || b); // true
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
console.log(fruits.indexOf('banana') != -1); // true
console.log(fruits.indexOf('grape') != -1); // false
// Test whether an item is not in an array
var vegetables = ['carrot', 'lettuce', 'broccoli'];
console.log(vegetables.indexOf('tomato') == -1); // true
console.log(vegetables.indexOf('lettuce') == -1); // false
