"use strict";
console.log("destructuring arrays");

const array = [2, 3, 4];
const a = array[0];
const b = array[1];
const c = array[2];
console.log("Normal method without destructuring:", a, b, c);

const [x, y, z] = array; //always use const while destructuring arrays
console.log("destructured values:", x, y, z);
console.log("original array", array);

//Example
const restaurant = {
  name: "John",
  location: "India",
  categories: ["category1", "category2", "category3", "category4"],
  menu: ["menu1", "menu2", "menu3", "menu4"],
  tables: ["table1", "table2", "table3", "table4"],
  order: function (menuIndex, tableIndex) {
    return [this.menu[menuIndex], this.tables[tableIndex]];
  },
  openingHours: {
    mon: {
      open: 10,
      close: 8,
    },
    tue: {
      open: 11,
      close: 9,
    },
    wed: {
      open: 9,
      close: 7,
    },
    thurs: {
      open: 8,
      close: 6,
    },
    fri: {
      open: 0,
      close: 24,
    },
  },

  orderDelivery: function ({
    address = "default",
    mainIndex = 0,
    startIndex = 1,
    time = 100,
  }) {
    console.log(
      "arguments with default values",
      address,
      mainIndex,
      startIndex,
      time
    );
  },

  spreadFunction: function (spread1, spread2, spread3) {
    console.log(`three inputs are ${spread1}, ${spread2} and ${spread3}`);
  },
};

//destructuring categories
const [firstCategory, secondCategory] = restaurant.categories;
console.log("destructured categories:", firstCategory, secondCategory);

//skipping certain element (just leave a blank space)
const [firstCategoryNew, , thirdCategory] = restaurant.categories;
console.log(
  "destructured categories with skipped:",
  firstCategoryNew,
  thirdCategory
);

//changing values/positions old method
let [firstPlace, secondPlace] = restaurant.categories;
console.log("Before swaping", firstPlace, secondPlace);

const temp = firstPlace;
firstPlace = secondPlace;
secondPlace = temp;
console.log("After swaping", firstPlace, secondPlace);

//changing values/positions destructuring method
let [firstMenu, secondMenu] = restaurant.menu;
console.log("Menu before swap destructuring method:", firstMenu, secondMenu);

[firstMenu, secondMenu] = [secondMenu, firstMenu];
console.log("Menu after swap destructuring method:", firstMenu, secondMenu);

//using functions
restaurant.order(2, 0);
console.log("calling order function:", restaurant.order(2, 1));

//destructuring using functions
let [menuItem, tableItem] = restaurant.order(2, 1);
console.log("destructuring menu and tables:", menuItem, tableItem);
[menuItem, tableItem] = [tableItem, menuItem];
console.log("destructuring menu and tables swap:", menuItem, tableItem);

//nested array destructuring
const nested = [1, 2, [3, 4]];
const [i, , j] = nested;
console.log("Nested array destructuring:", i, j);

const [p, , [q, r]] = nested;
console.log("destructuring of destructuring inside nested array:", p, q, r);

//default values
const [e, f, g] = [2, 3];
console.log(
  "default value if variables are more than array elements:",
  e,
  f,
  g
);

//setting default values to prevent undefined
const [k = 1, l = 2, m = 3] = [4, 5];
console.log("setting default values:", k, l, m);

//destructuring objects
//while destructuring objects the name of variables declared shuld be same as destructuring names
const { name, openingHours, categories } = restaurant;
console.log("destructuring objects:", name, openingHours, categories);

// declaring variables with different names than object one
const {
  name: ownerName,
  openingHours: openTime,
  categories: category,
} = restaurant;
console.log(
  "destructuring objects with different names:",
  ownerName,
  openTime,
  category
);

//setting default values while destructuring objects
const { locationBefore } = restaurant;
console.log("location before setting default value:", locationBefore);
const {
  locationAfter = "location is India",
  crowd: crowdNumber = ["defaultV1", "defaultV2"],
} = restaurant;
console.log(
  "destructuring objects default values:",
  locationAfter,
  crowdNumber
);

//Mutating variables in objects
let mutate1 = 100;
let mutate2 = 200;
console.log("Before Mutation in objects:", mutate1, mutate2);
const mutateObject = { mutate1: 10, mutate2: 20, mutate3: 30 };

// {mutate1, mutate2} = mutateObject; //This will give an error cause we cannot store values using "=" if we are using curly braces as JS will think that it is in block scope
//solution
({ mutate1, mutate2 } = mutateObject);
console.log("After Mutation in objects:", mutate1, mutate2);

//Nested objects
const nestedObjects = {
  name: "Nested object",
  nestedOpeningHours: {
    mon: {
      open: 10,
      close: 20,
    },
    tue: {
      open: 10,
      close: 8,
    },
  },
};

console.log("nestedObjects", nestedObjects);

const { nestedOpeningHours } = nestedObjects;
console.log("opening hours object:", nestedOpeningHours);

const {
  mon: { open, close },
} = nestedOpeningHours;
console.log("monday destructured open and close:", open, close);

const {
  mon: { open: op, close: cl },
} = nestedOpeningHours;
console.log(
  "monday destructured open and close with different variables:",
  op,
  cl
);

//Getting object as a argument in function
restaurant.orderDelivery({
  time: 20,
  address: "function object",
  mainIndex: 1,
  startIndex: 2,
});

restaurant.orderDelivery({
  time: 20,
  address: "function object 2",
});
//we can pass these same values in function which is declared inside object see restaurant object

//Spread Operator
const spread = [1, 2, 3];
console.log("Original array:", spread);

const oldMethod = [4, 5, spread[0], spread[1], spread[2]];
console.log("Old method to add elements in an array:", oldMethod);

const addingArray = [6, 7, spread];
console.log("Adding array inside array:", addingArray);

const newArray = [8, 9, ...spread];
console.log("Adding elements using spread operator:", newArray);

console.log("each element of array:", ...newArray);

const newMenu = [...restaurant.menu, "New menu 1"];
console.log("Adding new menu using restaurant menu array:", newMenu);

const allMenus = [...newMenu];
console.log("Array which consist of all menu items:", allMenus);

const tablesMenu = [...restaurant.menu, ...restaurant.tables];
console.log("Joining arrays using spread operator:", tablesMenu);

//Iterables: arrays, strings, maps, sets and not objects
const string = "Iterateble";
console.log("Original string:", string);
const letters = [...string, "", "Done"];
console.log("Each letter of string:", letters);

// we cannot use spread operator like this cause spread operator will seperate the elements using commas hence can be used only in arrays or functions:
// console.log(`${...string} hello`);

//Spread operator in function
restaurant.spreadFunction("1", "2", "3"); //calling function with static arguments

const spreadFunctionArray = [
  prompt("Enter first input"),
  prompt("Enter second input"),
  prompt("Enter third input"),
];
console.log("Three prompt inputs are:", spreadFunctionArray);

restaurant.spreadFunction(...spreadFunctionArray); //calling function with prompt arguments

//Es18 : spread operator also works on objects
const newRestaurant = {
  ...restaurant,
  founder: "New data",
};
console.log("New object created using spread operator:", newRestaurant);

//changing values of object
const copyNewRestaurant = { ...newRestaurant };
copyNewRestaurant.founder = "Copy of new data";
console.log("changing original object data:", copyNewRestaurant);

console.log("Original founder:", newRestaurant.founder);
console.log("New founder:", copyNewRestaurant.founder);

//Enhanced object Literals
const weekDays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

// with array elements
//we can compute property names usingg this method
const objectLiteralArray = {
  [weekDays[0]]: {
    open: 8,
    close: 10,
  },
  [weekDays[5]]: {
    open: 8,
    close: 10,
  },
  [`day is ${2 + 3}`]: {
    open: 8,
    close: 10,
  },
};
console.log("Template literals using array elements:", objectLiteralArray);

// without array elements
const objectLiteral = {
  mon: {
    open: 8,
    close: 10,
  },
  tue: {
    open: 8,
    close: 10,
  },
  wed: {
    open: 8,
    close: 10,
  },
};

const objectMain = {
  name: "Literal",
  time: 10,
  // objectLiteral: objectLiteral, //old method
  objectLiteral, //new ES6 method | it will automatically look for object and create one here with same name | This name should be same as object declared
  oldFunction: function () {
    console.log("Old method of using functions");
  },

  newMethod() {
    console.log("New method of using functions");
  },
};
objectMain.newMethod();
console.log("objectLiteral", objectLiteral);
console.log("objectMain", objectMain);

//Optional chaining

// example to check if data exists without oprional chaining
if (restaurant.openingHours && restaurant.openingHours.yoyo) {
  console.log(
    "This will not be executed as yoyo is ot present in object also it will not throw an error",
    restaurant.openingHours.yoyo
  );
}
// console.log(
//   "If we log without condition then it will throw an error:",
//   restaurant.openingHours.yoyo.open
// );

//With optional chaining
console.log(
  "Property which does not exists:",
  restaurant.openingHours.yoyo?.open
); //It will be executed after "?" and if that property exists then it will go ahed and run else if will log undefined
console.log("Property which exists:", restaurant.openingHours.mon?.open);

//Multiple optional chaining
console.log("Multiple optional chaining:", restaurant.openingHours?.yoyo?.open);
console.log(
  "Multiple optional chaining exists:",
  restaurant.openingHours?.mon?.open
);

//real example of optional chaining
const allDays = ["Sun", "Mon", "Tue", "Wed", "thurs", "Fri", "Sat", "Sun"];

const allHours = {
  [allDays[0]]: {
    open: 0, //If it is set to 0 then we will get opening time as undefined hence we used nullish coalscing operator beloww
    close: 8,
  },
  [allDays[3]]: {
    open: 10,
    close: 8,
  },
  [allDays[5]]: {
    open: 10,
    close: 8,
  },
  [`day is ${1 + 2}`]: {
    open: 10,
    close: 8,
  },
};
console.log("All hours: ", allHours);

const optionalChaining = {
  allHours,
};
console.log("optionalChaining", optionalChaining);

for (const day of allDays) {
  console.log("day is:", day);
  const openingTime = optionalChaining.allHours[day]?.open ?? "Closed today";
  console.log("Opening time is:", openingTime);
}

//Optional chaining methods
console.log(restaurant.order?.(1, 2) ?? "Method does not exist");
console.log(restaurant.orderError?.(1, 2) ?? "Method does not exist");

//Optional chaining in arrays
const users = [
  {
    name: "V",
    email: "V@gmail.com",
  },
];
console.log("User name is:", users[0]?.name ?? "Array is empty");
console.log("Users name is:", users[2]?.name ?? "Array is empty");

// old method for above example
if (users.length > 0) {
  console.log("user name is old method:", users[0].name);
} else {
  console.log("Array is empty");
}

//Looping objects Keys
const keyProperty = Object.keys(allHours);
console.log("objects keys property:", keyProperty); //Here we will get only keys
for (const day of keyProperty) {
  console.log("Looping objects keys:", day);
}

//Looping objects Keys
const valueProperty = Object.values(allHours);
console.log("objects value property:", valueProperty); //Here we will get only values of keys
for (const day of valueProperty) {
  console.log("Looping objects values:", day);
}

//Looping objects entries
const entryProperty = Object.entries(allHours);
console.log("objects entry property:", entryProperty); //Here we will get all the keys and their values in an array
// we can use [key, value] also instead of destructuring value but then we need to call open and close by value.open and value.close
for (const [key, { open, close }] of entryProperty) {
  console.log("Looping objects entries:", key);
  console.log(`on ${key} we open at ${open} and closes at ${close}`);
}
