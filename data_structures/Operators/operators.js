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

//Short circuiting

// OR
console.log("-----------------------OR--------------------------");
// It will check if the value is truthy or not if first value is truthy it will log that immediately
// if all values are falsy it will log last value in this case it doesn't matter if last value is falsy or truthy'
console.log("Integer is truthy hence it will log", 12 || "Hello");
console.log("string is truthy hence it will log", "Hello" || 12);
console.log("string is truthy hence it will log", "" || "Hello");
console.log("boolean is truthy hence it will log", true || 0);
console.log(
  "none of these are truthy but it will log last value coz of short circuiting",
  undefined || null
);
console.log(
  "It will log first truthy value",
  undefined || null || 0 || "Hello" || 12 || ""
);

// using short circuiting instead of ternery operator
// restaurant.x = 10;
// restaurant.x = 0; //If we set value of x = 0  here then it will log not present as 0 is falsy

const isPresent = restaurant.x ? restaurant.x : "Not present";
console.log("Using ternery:", isPresent);

const isPresentShort = restaurant.x || "Not present";
console.log("Using short circuiting:", isPresentShort);

// AND
console.log("-----------------------AND--------------------------");

console.log("First value is truthy:", 12 && null);
console.log("First value is falsy:", null && "" && 12 && "Hello");

//If the first value is truthy and all values are also truthy, then it will log the last value
console.log("First value is truthy:", 12 && "Hello");
console.log("First value is truthy:", 12 && "Hello" && true);

//If the first value is falsy it will log first value
console.log("First value is falsy:", "" && "Hello");
console.log("First value is falsy:", undefined && null);

//If the first value is truthy and there are some values which are falsy, then it will log the first falsy value
console.log("First value is truthy:", 12 && "Hello" && undefined && null);

//In simple words:
console.log(
  "If value is truthy => continue => if value is falsy => stops and log that value"
);

// Example
function y() {
  console.log("EXISTS");
}
// if (y) {
//   console.log("Y exists if loop");
//   y();
// }
y && y();

//Nullish
console.log(
  "-----------------------NULLISH COALESCING--------------------------"
);
//Nullish will check if the value is nullish or not and if the value is nullish it will print error otherwise it will print the value.
//Nullish = nulll, undefined

// restaurant.z = 10;
// restaurant.z = 0;
// restaurant.z = null;
// restaurant.z = undefined;

const checkZ = restaurant.z || "Not present";
console.log("Checking z: ", checkZ);

const checkZNullish = restaurant.z ?? "Not present";
console.log("Checking z using nullish: ", checkZNullish);

//Coding Challenge
console.log(
  "-----------------------CODING CHALLENGE--------------------------"
);
// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [player1, player2] = game.players;
console.log("Team 1:", player1);
console.log("Team 2:", player2);

const [goalKeeper1, ...fieldPlayers1] = player1;
console.log("Goalkeeper of team1:", goalKeeper1);
console.log("Other players of team1:", fieldPlayers1);

const [goalKeeper2, ...fieldPlayers2] = player2;
console.log("Goalkeeper of team2:", goalKeeper2);
console.log("Other players of team2:", fieldPlayers2);

const allPlayers = [...player1, ...player2];
console.log("All players of team1 and team2:", allPlayers);

const finalPlayers1 = [...player1, "Thiago", "Coutinho", "Perisic"];
console.log("Final players of team1:", finalPlayers1);

const { team1, x: draw, team2 } = game.odds;
console.log("team1:", team1);
console.log("draw:", draw);
console.log("team2:", team2);

const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(`${players[i]} scored a goal!!`);
  }
  console.log(`${players.length} total goals were scored!!`);
};
printGoals(...game.scored);

team1 < team2 && console.log("Team 1 is the winner");
team1 > team2 && console.log("Team 2 is the winner");
