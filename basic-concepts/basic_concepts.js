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

// Type Conversion and Coercion
// Type Conversion: When we manually convert type
// Type Coercion: When JS manually convert type

//Typer conversion
const inputYear = "1991";
console.log("inputYear", inputYear + 10); // it will log 199110 cause we take input as a string
console.log("inputYear conversion", Number(inputYear) + 10); // it will print 2001 cause we converted string to number
console.log("both cases", Number(inputYear), inputYear);

console.log("NaN", Number("String"));
console.log("Type of NaN:", typeof NaN);

console.log("Convert number to string", String(50));

// Type Coercion
console.log(" I am " + 20 + " years old"); // Js will automatically convert
console.log("using - in string", "10" - "3" - "2");
console.log("using + in string", "10" + "3" + "2");
console.log("using * in string", "10" * "3" * "2");
console.log("using / in string", "10" / "3" / "2");
console.log("using comparison in string", "10" > "1");

//There are only 5 falsy vallues in JS
// Falsy values: The values that we cannot convert in other form
// There values will become false when converted to boolean
console.log("boolean value of 0", Boolean(0));
console.log("boolean value of undefined", Boolean(undefined));
console.log("boolean value of null", Boolean(null));
console.log("boolean value of NaN", Boolean(NaN));
console.log("boolean value of", Boolean(""));

console.log("boolean value of String", Boolean("String"));
console.log("boolean value of {}", Boolean({}));

// Bug
// Though we defined height below example will run else loop cause of value 0 and this is a bug

let height = 0;
if (height) {
  console.log("Not a bug");
} else {
  console.log("Its a bug");
}
