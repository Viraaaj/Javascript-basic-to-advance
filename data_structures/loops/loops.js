//For loop
console.log("Lifting weight 1");
console.log("Lifting weight 2");

// for loops keeps running till condition is true
//for below eg: 1 is starting point, <=30 is condition, ++ is increment
for (let repeatation = 1; repeatation <= 10; repeatation++) {
  console.log("Lifting weight:", repeatation);
}

//For loop in array
const types = [];
const array = [
  "joohn",
  "developer",
  30,
  ["friend1", "friend2", "friend3", "friend4"],
  true,
];

for (let i = 0; i < array.length; i++) {
  console.log("whole array using for loop:", array[i]);
  console.log("type of elements in array:", typeof array[i]);

  //filling empty array with type of elements in existing array
  //   types[i] = typeof array[i];

  //Method 2
  types.push(typeof array[i]);
}

console.log("Empty array to get type of elements in array:", types);

//Example
const years = [1990, 2000, 2005, 2010];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i]);
}
console.log("Birth years:", years);
console.log("calculated ages:", ages);

//Continue and break
// continue is to exit current iteration of loop and continue to next one
// break is used to completely terminate whole loop
const statements = [
  "joohn",
  "developer",
  30,
  ["friend1", "friend2", "friend3", "friend4"],
  true,
  "string for checking",
];

console.log("ONLY STRINGS HERE CONTINUE STATEMENT");
for (let i = 0; i < statements.length; i++) {
  if (typeof statements[i] !== "string") {
    continue;
  }
  console.log("continue and break:", statements[i], typeof statements[i]);
}

console.log("ONLY Numbers HERE BREAK STATEMENT");
for (let i = 0; i < statements.length; i++) {
  if (typeof statements[i] === "number") {
    break;
  }
  console.log("continue and break:", statements[i], typeof statements[i]);
}

//Backward looping
const backwardLoop = [
  "jack",
  "developer",
  30,
  ["friend1", "friend2", "friend3", "friend4"],
];

for (let i = backwardLoop.length - 1; i >= 0; i--) {
  console.log("backwardLoop:", i, backwardLoop, backwardLoop[i]);
}

//Loop inside loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log("STARTING EXERCISE", exercise);

  for (let rep = 1; rep < 6; rep++) {
    console.log("Weight repetition:", rep, "Exercise no.:", exercise);
  }
}

//While loop
for (let i = 1; i <= 10; i++) {
  console.log("For loop:", i);
}

let i = 1;
while (i <= 10) {
  console.log("While loop:", i);
  i++;
}

//Not incrementing example
let diceNumber = Math.trunc(Math.random() * 6) + 1;
console.log("Math.random():", Math.random()); // This function will generate any number between 0 to 1
console.log("Random number:", diceNumber);

while (diceNumber !== 6) {
  console.log(`You rolled a ${diceNumber}`);
  diceNumber = Math.trunc(Math.random() * 6 + 1);

  if (diceNumber === 6) {
    console.log("Dicenumber is 6");
  }
}

//Coding challenge
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totalBill = [];

const calcTip = function (bill) {
  if (bill > 50 && bill < 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  //   console.log("Tip of bill", bills[i], ":", calcTip(bills[i]));

  tips.push(tip);
  totalBill.push(tip + bills[i]);

  console.log(
    `Bill amount is ${bills[i]} and tip applied on that bill is ${tips[i]}, hence total amount is ${totalBill[i]}`
  );
}

console.log("Array of bills:", bills);
console.log("Array of tips per bill:", tips);
console.log("Array of total bill creating using push:", totalBill);

const calcAverage = function (arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log("Sum of all total bills is:", sum);
  return sum / arr.length;
};

console.log("Average of sum of total tips is:", calcAverage(tips));
console.log("Average of sum of total bills is:", calcAverage(totalBill));
