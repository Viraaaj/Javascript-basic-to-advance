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

//Object methods
const objectMethods = {
  firstName: "John",
  hasLicense: true,
  profession: "developer",
  birthYear: 1990,
  friends: ["Natasha", "friend2", "friend3", "friend4"],
  calcAge: function (birthYear) {
    return 2021 - birthYear;
  }, //Method 1

  calcAge1: function () {
    return 2021 - this.birthYear;
  }, //Method 2

  calcAge2: function () {
    this.age = 2021 - this.birthYear; //creating new property called age and storing value in that varible
    return this.age;
  }, //Method 3

  getSummery: function () {
    return `${this.firstName} is a ${this.calcAge2()}-years-old ${
      this.profession
    }, and he has ${this.hasLicense ? "a" : "no"} drivers license`;
  }, //Challenge
};
console.log("Object:", objectMethods);
console.log(
  "Function inside object method 1:",
  objectMethods.calcAge(objectMethods.birthYear)
);
console.log("Function inside object method 2:", objectMethods.calcAge1());
console.log("Function inside object method 3:", objectMethods.calcAge2()); // we need to call function before executing below line
console.log("Function inside object method 3:", objectMethods.age);

//challenge
// if (objectMethods.hasLicense) {
//   console.log(
//     `${objectMethods.firstName} is a ${objectMethods.age}-years-old ${objectMethods.profession}, and he has a drivers license`
//   );
// } else {
//   console.log(
//     `${objectMethods.firstName} is a ${objectMethods.age}-years-old ${objectMethods.profession}, and he dont have a drivers license`
//   );
// }
console.log(objectMethods.getSummery());

//Coding challenge
const markData = {
  height: 1.69,
  weight: 78,
  name: "Mark",
  calcBMI: function () {
    return this.weight / this.height ** 2;
  },
};
console.log("Mark's BMI:", markData.calcBMI());

const johnData = {
  height: 1.95,
  weight: 92,
  name: "john",
  calcBMI: function () {
    return this.weight / this.height ** 2;
  },
};
console.log("John's BMI:", johnData.calcBMI());

console.log(
  `John's BMI ${johnData.calcBMI()} is ${
    johnData.calcBMI() > markData.calcBMI() ? "higher" : "lower"
  } than mark's BMI ${markData.calcBMI()}`
);
