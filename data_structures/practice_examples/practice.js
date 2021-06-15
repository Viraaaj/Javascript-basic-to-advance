//Take temperature array and calculate amplitude
//ignore errors

"use strict";
const temperatures = [-1, -4, 20, 52, 15, "error", 88, 77];

const calcAmplitude = function (temperatureArray) {
  let maxTemperature = temperatureArray[0];
  let minTemperature = temperatureArray[0];

  for (let i = 0; i < temperatureArray.length; i++) {
    if (typeof temperatureArray[i] === "number") {
      if (temperatureArray[i] > maxTemperature) {
        maxTemperature = temperatureArray[i];
      }
      if (temperatureArray[i] < minTemperature) {
        minTemperature = temperatureArray[i];
      }
    } else {
      console.log(temperatureArray[i]);
    }
  }
  console.log(maxTemperature, minTemperature);
  return maxTemperature - minTemperature;
};

const amplitude = calcAmplitude(temperatures);
console.log("amplitude is:", amplitude);
// calcAmplitude(["temperatures", "maxTemperature"]);

//concat two arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatedArray = array1.concat(array2);
console.log("array1:", array1);
console.log("array2:", array2);
console.log("array concatination:", concatedArray);

//Handling error
const measureKelvin = function () {
  const measurements = {
    type: "temp",
    unit: "celcius",

    //fix
    value: Number(prompt("Enter degree in celcius")),
  };

  console.log("Measurements object:", measurements);
  console.table(measurements);

  console.log("Entered value is:", measurements.value);
  console.warn("Entered value is:", measurements.value);
  console.error("Entered value is:", measurements.value);

  const kelvin = measurements.value + 273;
  //   debugger;
  return kelvin;
};

console.log("Degree celcius to kelvin:", measureKelvin());

//Can use breakpoint to get better view: inspect => sources => add breakpoint => refresh
// or else you can add debugger at line where you want to debug (see line number: 55)

//Coding challenge
const tempArray = [17, 21, 23];

const printTemperature = function (array) {
  let str = "";
  for (let i = 0; i < array.length; i++) {
    str = `${str + array[i]} degrees in ${
      array.indexOf(array[i]) + 1
    } days... `;
  }
  console.log(str);
};

printTemperature(tempArray);

//Primitives vs objects

// 1.Primitives
let primitiveAge = 30;
let newAge = primitiveAge;
primitiveAge = 20;
console.log("primitiveAge is: " + primitiveAge); //It will log 30
console.log("newAge is: " + newAge); //It will log 20

//Primitives values are stored in call stack with unique address and value
// also identifiers points to adress and not values
// in aboove case: identifiers are: primitiveAge and newAge

//because all the primitive values are present in call stack with address and values if we change the value of varibale then it will create
// another address with that value and the variable now will point to that value.

// above example:
// - identifier primitiveAge points to address which points to value
// - identifier newAge points to primitiveAge's address and value
// - now as we set new value to primitiveAge the identifier primitiveAge will point to that value and address (call stack will create new address and value)
// - and as we have not stored this value in identifier newAge | newAge will still points to previous address

// 2.Reference types :Objects
const objectOld = {
  name: "john",
  age: 30,
};

const objectNew = objectOld;
objectNew.age = 20;

console.log("objectOld:", objectOld); // It will log age of 20 though we have declared the age as 30
console.log("objectNew:", objectNew); // It will log age of 20

//Here thought we used const we can change the values as we are changing values in heap
// Also const values are only immutable for primitive types

//Objects are stored in heap and not in the call stack as heap contains of unlimited supply of memory
//Also object identifiers points to address in call stack where value of that identifier will point to address in heap
// Here, identifier => address => value(which is same as address in heap) => points to address in heap => value in heap
// Hence if we declare another object which stores same data as previous object it will store value at same address

//and if we change second object's value if will overlap the value in heap and eventually the first object also contains
// same address and hence value in first object will also be changed

//Assigning new value to object is completely different from creating new object as if we create whole new object then JS will
// create new address for new value but instead if we change only one property in object it will be overlapped with previous one

//Copying object with different values:
const john = {
  name: "John",
  age: 30,
  array: [1, 2],
};

const copyJohn = Object.assign({}, john);
copyJohn.name = "changed john";
console.log("old john object:", john);
console.log("copyJohn object:", copyJohn);
//But here Object.assign() will only change original object and not a object within object as it will not clone fully
copyJohn.array.push(3);
copyJohn.array.push(4);
console.log("old john object after array push:", john);
console.log("copyJohn object after array push:", copyJohn);
//Here as described Object.assign() will change the values of array in both objects
//For deep cloning object we need to use external library called lodash and by using certain tools of that library we can able to deep clone an object.
