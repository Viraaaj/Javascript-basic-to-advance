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
