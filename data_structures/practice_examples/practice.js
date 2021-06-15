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
