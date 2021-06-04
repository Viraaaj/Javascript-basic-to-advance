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
