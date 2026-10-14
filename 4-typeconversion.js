//converting one data type into another is called typeconversion. In JavaScript, there are two types of type conversion: implicit and explicit.

//1. Implicit Type Conversion (Type Coercion): JavaScript automatically converts one data type to another when performing operations involving different data types. This is known as type coercion.
let num = 10;
console.log("55" + 5); // Output: "555" (string concatenation)
console.log("55" - 5); // Output: 50 (number subtraction)

//2. Explicit Type Conversion: In explicit type conversion, we manually convert one data type to another using built-in functions or methods.
let str = "123";
let num2 = Number(str); // Convert string to number
console.log(num2); // Output: 123
let value = Boolean(num2); // Convert number to boolean
console.log(value); // Output: true
let str2 = "";
console.log(Boolean(str2)); // Output: false (empty string is falsy)

let str3 = "Hello";
console.log(Number(str3)); // Output: NaN (Not a Number, as "Hello" cannot be converted to a number)