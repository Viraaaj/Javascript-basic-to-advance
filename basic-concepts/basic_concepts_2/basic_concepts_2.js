//Strict mode
"use strict"; //For activating strict mode

let hasDriverLicense = false;
let passTest = true;

if (passTest) {
  hasDriversLicense = true; // text is different here so if we use strict mode it will log this error.
}

if (hasDriverLicense) {
  console.log("Strict mode test");
}

const interface = "JS feature"; // we cannot use certain variables which are same as JS features.

//Functions
function logger() {
  console.log("First function");
}
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log("apples, oranges:", apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice; // we returned a value here hence this function has some value that we used in below example
}
const appleJuice = fruitProcessor(5, 2); // value of returned juice is stored here in function and if we want that value we can store function in variable
console.log(appleJuice);
console.log(fruitProcessor(5, 2)); // It is same as above

const appleOrangeJuice = fruitProcessor(2, 8);
console.log(appleOrangeJuice);

//Function declaration and function expression

// 1. Function declaration:
function calcAge(birthYear) {
  return 2021 - birthYear;
}
const age = calcAge(1990);
console.log("Function declaration:", age);

// 2. Function expression:
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};
const age2 = calcAge2(1990);
console.log("Function expression:", age2);
