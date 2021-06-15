"use strict";

//This keyword
console.log("global this keyword", this);

// this keyword in regular function
function this1() {
  console.log("this in function", this);
}
this1(); // get error only in a strict mode

// this keyword in arrow function
const this2 = () => {
  console.log("this in arrow function", this);
};
this2();

// borrowing method in objects
const object1 = {
  year: 2000,
  calcAge: function () {
    // console.log("object1 age:", 2021 - this.year);
    console.log("object1 this", this);
  },
};
object1.calcAge();

const object2 = {
  year: 1990,
};

object2.calcAge = object1.calcAge;
object2.calcAge();

//we can store function in a object in variable also
const variable = object1.calcAge;
console.log("variable", variable);
console.log("variable()", variable()); // we will get an error here cause we haven't attached this function to any object |
// also this function dont have a year property.

//regular and arrow functions (this keyword)
var firstName = "name declared outside object";
const functionObject = {
  firstName: "John",
  age: 2000,

  arrow: () => {
    //arrow function takes global scoped this keyword
    console.log("arrow function inside object:", this.firstName);
  },

  notArrow: function () {
    //regular function takes object scoped this keyword
    console.log("regular function inside object:", this.firstName);
  },

  function1: function () {
    console.log("function1 in object this keyword", this);
    const self = this;

    const function2 = function () {
      // if we use regular function inside function then we cant have access to this keyword of object
      console.log("function2 inside function1 of object this keyword", this);
    };

    const function3 = function () {
      //to use this keyword inside function which is inside function of object we need to declare variable and
      // store value (see line 59) of this in that variable so that we can use | this is solution 1 to problem
      console.log("function3 inside function1 of object this keyword", self);
    };

    const function4 = () => {
      // here if we use arrow function inside function then we can easily access this keyword of object without storing in variable
      // cause arrow function took the this keyword from its parent scope in this case it is function1
      console.log(
        "arrow function4 inside function1 of object this keyword",
        this
      );
    };

    function2();
    function3();
    function4();
  },
};
functionObject.arrow();
functionObject.notArrow();
functionObject.function1();

//arguments keyword
//arguments keyword can only be used if we are using regular functions
const argumentsKeyword = function (a, b) {
  console.log("arguments inside regular function", arguments);
  return a + b;
};
console.log("regular function", argumentsKeyword(1, 2, 3, 4)); // we can add as many arguments here it will show in arguments array

// arguments in arrow function
const argumentsArrow = (a, b) => {
  console.log("arguments inside arrow function", arguments);
  return a + b;
};
console.log("arrow function", argumentsArrow(2, 3, 4, 5));
