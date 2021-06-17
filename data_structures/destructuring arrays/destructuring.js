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
