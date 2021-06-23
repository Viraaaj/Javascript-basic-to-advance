"use strict";
console.log("Working with strings");

const airline = "Vistara airlines";
const plane = "A320";

console.log("-----------Strings at certain places---------------");
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log("Length of string:", airline.length);
console.log("Length of string:", "hello".length);

console.log("-------------------String Methods------------------");
console.log("index of s in vistara:", airline.indexOf("s"));
console.log("index of first a in vistara:", airline.indexOf("a"));
console.log("index of last a in vistara:", airline.lastIndexOf("a"));

console.log("Slice method:", airline.slice(4)); //slicing starts from index 4
console.log("Slice method:", airline.slice(4, 8)); //slicing starts from index 4 till 7 | 8th character will not be included
//Length of extracted string will always last index minus first index | in above case: 8-4 i.e 4

console.log("slicing dynamically:", airline.slice(0, airline.indexOf(" ")));
console.log("Slicing last index:", airline.slice(airline.lastIndexOf(" ") + 1));
console.log("Slicing from end:", airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //String containing B or E are middle seats

  if (seat.slice(-1) === "B" || seat.slice(-1) === "E") {
    console.log(`${seat} is a middle seat`);
  } else {
    console.log(`${seat} is not a middle seat`);
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

//Boxing: JS will take a string and convert it into object hence string methods are there in JS | Basically strings are put into the box
console.log("Behind the scenes string:", new String("Hello"));
console.log("Behind the scenes string type:", typeof new String("Hello"));
console.log(
  "Behind the scenes string type when sliced | automatically converted:",
  typeof new String("Hello").slice(1)
);
