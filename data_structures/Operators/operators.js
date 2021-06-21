"use strict";

// Rest Pattern and parameters
// Spread operator unpacks elements of array
// Rest operator packs elements in array

const restaurant = {
  name: "Object",
  starterMenu: ["starter1", "starter2", "starter3"],
  mainMenu: ["main1", "main2", "main3"],
  openingHours: {
    mon: {
      open: 10,
      close: 8,
    },
    tue: {
      open: 11,
      close: 9,
    },
    sat: {
      open: 8,
      close: 6,
    },
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};
console.log("Object:", restaurant);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PART 1: DESTRUCTURING

//Spread operator as we are using it on right hand side:
const spreadArray = [1, 2, 3, ...[4, 5]];
console.log("Spread operator:", spreadArray);

//Rest operator as we are using it on Left hand side:

// const [1, 2, ...remainingArray] = [1, 2, 3, 4, 5]; //cannot use integers on LHS as we are using rest where on LHS we store values into variables hence we have to use variables.
const [a, b, ...remainingArray] = [1, 2, 3, 4, 5];
console.log("Rest operator:", a, b, remainingArray);

//using rest and spread operators in array
const [starterMenu1, , starterMenu3, ...remainingMenus] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
//Also here rest  element must be the last element otherwise JS will throw an error for eg:
// const [starterMenu4, , starterMenu5, ...remainingMenus1, error] = [
//     ...restaurant.starterMenu,
//     ...restaurant.mainMenu,
//   ];

console.log(
  "using rest and spread operators both:",
  starterMenu1,
  starterMenu3,
  remainingMenus
);

//using rest and spread operators in objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PART 2: FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(`Sum of numbers ${numbers} is ${sum}`);
  // return sum; //If we want value of sum outside function then we use return
};
add(1, 2);
add(1, 2, 3, 4);
add(1, 2, 3, 4, 5, 6, 7, 8, 9);

const spread = [10, 20, 30];
add(...spread);
// console.log("Sum is:", add(...spread)); //Uncomment the return statement in function to see result

//taking 2 parameters
restaurant.orderPizza(
  "mainIngredient",
  "otherIngredient1",
  "otherIngredient2",
  "otherIngredient3"
);
