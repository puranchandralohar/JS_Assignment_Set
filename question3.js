//Write a program to read the first and last digit of a number.

let number = parseInt(process.argv[2]);
let firstDigit = Math.floor(number/100);

let lastDigit = number%10;

console.log("First Digit ="+firstDigit+ ", Last Digit = " +lastDigit);

