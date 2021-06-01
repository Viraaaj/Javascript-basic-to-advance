//Strict mode
"use strict"; //For activating strict mode

let hasDriverLicense = false;
let passTest = true;

if (passTest) {
  hasDriversLicense = true; // text is different here so if we use strict mode it will log this error.
}

if (hasDriverLicense) {
  console.log("Strict mode test");
}

const interface = "JS feature"; // we cannot use certain variables which are same as JS features.
