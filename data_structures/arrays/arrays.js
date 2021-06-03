// method 1
const friends = ["a", "b", "c", "d"];
console.log("Array method 1", friends);

//Accessing particular element
console.log("Access particular element in array", friends[0]);

// Getting length of array
console.log("Calculating length of array", friends.length);

//getting last element in array
console.log("Access last element in array", friends[friends.length - 1]);

//Change or mutate array
friends[3] = "e";
console.log("Changed array", friends);
//We cannot change primitive values while using const but arrays are not primitive hence thought we are using const we can change values

// But here we cannot modify whole array
// friends = ["f", "g"]; //Will log an error

//Creating new array using old ones
const firstName = "a";
const newArray = [firstName, 2021 - 1990, "Teacher", friends];
console.log("newArray", newArray);

// method 2
const years = new Array(2000, 2002, 2004, 2006);
console.log("Array method 2", years);

//Exercise
const calcAge = function (birthYear) {
  return 2021 - birthYear;
};

const yearsArray = [1990, 2000, 2005, 2010];
// console.log("cannot subtract array from number:", calcAge(yearsArray));

const age1 = calcAge(yearsArray[0]);
const age2 = calcAge(yearsArray[1]);
const age3 = calcAge(yearsArray[2]);
const ageLast = calcAge(yearsArray[yearsArray.length - 1]);
console.log("Ages of particular element:", age1, age2, age3, ageLast);

const ages = [age1, age2, age3, ageLast];
console.log("New ages array:", ages);
