// here in array we cannot name an array which is present inside an array. We can get the index but we cannot manually name it.
// To solve this problem we can use objects.
const jack = [
  "name",
  "profession",
  23,
  ["friend1", "friend2", "friend3", "friend4"],
];
console.log("Array:", jack);

//Defining objects
const object = {
  firstName: "Jack",
  lastName: "for string concatination",
  profession: "developer",
  age: 23,
  friends: ["Natasha", "friend2", "friend3", "friend4"],
};
console.log("Object:", object);

console.log("Accessing data in object using dot:", object.firstName);
console.log("Accessing data in object using bracket:", object["firstName"]);

const nameKey = "Name";
console.log(
  "Accessing data in object using string concatination:",
  object["last" + nameKey]
);
//String concatination of objects only works if we use brackets and not dots.
// In array order of elements matter but not in objects.

//while getting data from user we need to use bracket method for eg:
const userInput = prompt(
  "What do you want to know about person: firstName, lastName, profession, age, friends?"
);
console.log("User input:", userInput);

if (object[userInput]) {
  console.log("dot method eg:", object.userInput); //It will log undefined as we used dot method
  console.log("bracket method eg:", object[userInput]); //It will log undefined as we used dot method
} else {
  console.log("Enter valid input!");
}

//Adding data in object
object.dotMethodData = "Dot";
object["bracketMethodData"] = "bracket";
console.log("After adding data:", object);

//Getting object data
console.log(
  `${object.firstName} has ${object.friends.length} friends, and his best friend is called ${object.friends[0]} `
);
