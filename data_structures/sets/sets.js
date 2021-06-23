"use strict";
console.log("Sets");
//Main use case of sets:
// 1. To remove duplicate values from arrays

//If we are using sets and there are some duplicates in that set then JS will ignore that values and only lag the value only once
const orderSet = new Set(["pasta", "cake", "pizza", "pizza", "cake"]);
console.log("Set is:", orderSet);
console.log("Size of set:", orderSet.size);
console.log("checking pizza is there in set:", orderSet.has("pizza"));
console.log("checking donut is there in set:", orderSet.has("donut"));
console.log("Sets are iterable:", new Set("iterable"));

orderSet.add("added element");
orderSet.add("added element");
console.log("After adding element:", orderSet);

orderSet.delete("added element");
console.log("after deleting added element:", orderSet);

//We cannot retrieve the values from sets coz values in set do not have unique index as all values are unique by themselves
console.log("getting 1st element from set:", orderSet[0]);

// orderSet.clear();
// console.log("After clearing all elements from set:", orderSet);

for (const order of orderSet) {
  console.log("for of loop in sets:", order);
}

//Arrays into sets
const array = ["a", "b", "c", "d", "e", "f", "a", "b", "b"];
console.log("Values in array are:", array);

const setOfArray = new Set(array);
console.log("Set created using above arrays:", setOfArray); //But this will give an object and we need an array so lets convert it

const setOfArray2 = [...new Set(array)];
console.log("converting object of set into an array:", setOfArray2);

//Getting size of string
console.log("Size of string using sets:", new Set("aaaaaa").size);
