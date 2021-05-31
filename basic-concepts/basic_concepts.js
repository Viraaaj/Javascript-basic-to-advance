// Datatypes
console.log("20 is:", typeof 20);
console.log("number is:", typeof "number");
console.log("true is:", typeof true);

undefined = "This";
console.log("variable without keyword is:", typeof undefined);

let dynamicTyping = true;
console.log("dynamicTyping first defined with keyword:", typeof dynamicTyping);

dynamicTyping = 20;
console.log(
  "dynamicTyping later defined without keyword:",
  typeof dynamicTyping
);

console.log("Bug in JS regarding type of null:", typeof null);

//Keywords
// let
let number = 20;
console.log("Assigned value at first:", number);

number = 30;
console.log("Assigned value later:", number);
// Only the value of let variable can be changed
// If you want to change variable in program use let

// ------------------------------------------------------------------------------------------------

// const
const constVariable = 20;
console.log("Assigned value of constVariable at first:", constVariable);

// constVariable = 30;
// console.log("Assigned value of constVariable later:", constVariable);
//  cant change value of const variable once it is declared
// we cant declare empty const variable

// ------------------------------------------------------------------------------------------------

//Var
var varVariable = "var1";
console.log("Assigned value of varVariable at first:", varVariable);

varVariable = "var2";
console.log("Assigned value of varVariable later:", varVariable);

//without any variable
noVariable = "Hello";
console.log("noVariable", noVariable);
// we can declare a variable without a keyword also but this is not a good practise

//Operators
let x = 10;
console.log("Initial value of x:", x);

x = 10 + 5;
console.log("Value of 10+5:", x);

x += 10; // x = x + 10
console.log("Value of x += 10 :", x);

x -= 10; // x = x - 10
console.log("Value of x -= 10 :", x);

x *= 10; // x = x * 10
console.log("Value of x *= 10 :", x);

x /= 10; // x = x / 10
console.log("Value of x /= 10 :", x);

x = x ** 2; // x square
console.log("Value of x ** 2 :", x);

x++;
console.log("Value of x++:", x);

x--;
console.log("Value of x--:", x);

console.log("Final value of x:", x);

//Template literals
const name = "john";
const job = "developer";
const birthYear = 1998;
const year = 2021;

const concat =
  "I am " + name + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(concat);

// we can replace above method by ES6 template liter
const newName = `I am ${name}, a ${year - birthYear} year old ${job}!`;
console.log("template literal:", newName);

console.log(" move to \n new line ");
console.log(` move to new line
template literal`);
