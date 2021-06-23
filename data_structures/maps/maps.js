"use strict";
console.log("Maps");
//We can store keys are values using maps

const restaurant = new Map();
restaurant.set("name", "John");
restaurant.set(1, "first");
restaurant.set(2, "second");
console.log("after filling values in map:", restaurant);

restaurant.set("categories", [
  "category1",
  "category2",
  "category3",
  "category4",
]);
console.log("after adding category array values in map:", restaurant);

//setting multiple values at same time
restaurant
  .set("place", ["place1", "place2", "place3", "place4"])
  .set("open", 8)
  .set("close", 20)
  .set(true, "we are open")
  .set(false, "we are closed");
console.log("Setting multiple values at same time:", restaurant);

console.log("Getting value of key in map:", restaurant.get(true)); //datatype should match

//example
const time = 12;
const checkStatus = restaurant.get(
  time > restaurant.get("open") && time < restaurant.get("close")
);
console.log("Checking status:", checkStatus);

//Other methods
console.log("Deleting value:", restaurant.delete("place"));
console.log("After deleting place:", restaurant);
console.log("Size of map:", restaurant.size);

restaurant.clear();
console.log("After clearing all values:", restaurant.size);

//Thing to remember:
restaurant.set([1, 2], "array");
console.log("Setting array as a key:", restaurant);
console.log("Checking value of array key:", restaurant.get([1, 2])); //It will not work as JS will store it in heap

//To get arrays in maps we need to store array in variable and then use it like :
const arrayInMap = [1, 2];
restaurant.set(arrayInMap, "Array stored using variable");
console.log("Setting array stored as variable as a key:", restaurant);
console.log("Checking value of array is in map:", restaurant.get(arrayInMap));

//Using querySelector in maps
restaurant.set(document.querySelector("h1"), "Heading of page"); //h1 is present if we use anoter tag that we are not using in HTML then it will show key as null
console.log("Afterr adding querySelector in map:", restaurant);

//Other method to create map without using set
console.log(
  "----------------Other method to create map without using set--------------------------------"
);

const demo = new Map([
  ["first key", "first value"],
  ["second key", "second value"],
  ["third key", "third value"],
  [
    ["key inside array1", "key inside array2"],
    ["value inside array1", "value inside array2"],
  ],
]);
console.log("Map created withou using set:", demo);

const questions = new Map([
  ["Question", "Which is the best language?"],
  [1, "C"],
  [2, "C++"],
  [3, "JavaScript"],
  ["correct answer", 3],
  [true, "Correct Answer"],
  [false, "Wrong Answer"],
]);
console.log("Questions map:", questions);

console.log(questions.get("Question"));
for (const [key, value] of questions) {
  //   console.log("Arrayof key and value in questions map:", key, value);
  if (typeof key === "number") {
    console.log(`Answer ${key} : ${value}`);
  }
}

// const answer = Number(prompt("Enter Answer"));
const answer = 3;
console.log("Answer is:", answer);

// 1st method
answer === questions.get("correct answer")
  ? console.log(questions.get(true))
  : console.log(questions.get(false));

//   2nd method
console.log(
  "2nd method:",
  questions.get(answer === questions.get("correct answer"))
);

//converting map to array
console.log("Old questions map:", questions);
console.log("Questions map converted to array:", [...questions]);
console.log("map entries:", [...questions.entries()]);
console.log("map values:", [...questions.values()]);
console.log("map keys:", [...questions.keys()]);
//We can write this methods as it is if we dont want them destructured in an array

//Coding challenge
console.log(
  "-----------------------------CODING CHALLENGE---------------------------"
);

// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);
console.log("all game events:", gameEvents);

// 1
const events = new Set(gameEvents.values());
console.log("Different events without duplicates:", ...events);

// 2
gameEvents.delete(64);
console.log("game events without key 64:", gameEvents);

// 3
console.log(
  `An event happened, on average, every ${gameEvents.size / 90} minutes`
);
const timeOfEvent = [...gameEvents.keys()].pop();
console.log("time of event:", timeOfEvent);
console.log(
  `An event happened, on average, every ${
    timeOfEvent / gameEvents.size
  } minutes`
);

// 4
for (const [key, event] of gameEvents) {
  //   console.log("event key is:", key, event);

  console.log(
    `${key < 45 ? "[FIRST HALF]" : "[SECOND HALF]"} ${key}: ${event}`
  );
}

console.log("----------------ARRAY METHODS for referenec-------------------");
const a = [1, 2, 3];
a.push(4);
console.log("push:", a);
a.pop();
console.log("pop:", a);
a.shift();
console.log("shift:", a);
a.unshift(5);
console.log("unshift:", a);
