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
