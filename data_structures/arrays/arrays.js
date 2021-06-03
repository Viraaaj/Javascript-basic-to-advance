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

//Array methods / operations
const arrayMethods = ["a", "b", "c", "d"];
console.log("Before push: ", arrayMethods);

arrayMethods.push("e");
console.log("After push: ", arrayMethods);

const newArrayPush = arrayMethods.push("f"); // If we want length we can store it in variable
console.log("After push Length: ", newArrayPush, arrayMethods);
//Push methods returns length of array

//To add new element at start
arrayMethods.unshift("element at start");
console.log("Array unshift", arrayMethods);
//Unshift methods returns length of array

//To remove elements from array
arrayMethods.pop(); // we dont need to pass any element inside pop as it will automatically pop out last element
console.log("Pop method: ", arrayMethods);

const popArray = arrayMethods.pop();
console.log("Pop returns:", popArray, arrayMethods);
//Pop methods returns poped elements of array if we store in variable

//To remove first element in array
arrayMethods.shift();
console.log("Removing first element:", arrayMethods);

//Check at which position certain element is
console.log(
  "Getting index of particular element b:",
  arrayMethods.indexOf("b")
);
console.log(
  "Getting index of particular element that is not present in array:",
  arrayMethods.indexOf("yo")
);

//We can use includes rather than index of as it will tell us whether element is present in array or not (gives a boolean value)
// rather than giving its index
console.log("includes in array if b is present:", friends.includes("b"));
console.log(
  "includes in array if element is not present:",
  friends.includes("yo")
);

//Includes method will strictly checkk the values (for eg. strings and numbers)
arrayMethods.push(23);
console.log(
  "checking 23 as a string is present or not using includes:",
  arrayMethods.includes("23"),
  arrayMethods
);
console.log(
  "checking 23 as a number is present or not using includes:",
  arrayMethods.includes(23),
  arrayMethods
);

//Coding challenge
const tipCalculator = function (bill) {
  if (bill > 50 && bill < 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

const bills = [125, 555, 44];
console.log("all bills:", bills);

const tip1 = tipCalculator(bills[0]);
const tip2 = tipCalculator(bills[1]);
const tip3 = tipCalculator(bills[2]);
console.log("all tips:", tip1, tip2, tip3);

const tips = [tip1, tip2, tip3];
console.log("all tips array:", tips);

const totalBill = [bills[0] + tip1, bills[1] + tip2, bills[2] + tip3];
console.log("Total bill (bill + tip):", totalBill.length, totalBill);
