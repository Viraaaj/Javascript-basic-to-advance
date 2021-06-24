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

console.log(
  "-------------------------Part 2----------------------------------------"
);

const uppercase = "UPPERCASE";
console.log("Converting string to lower case:", uppercase.toLowerCase());

const lowercase = "lowercase";
console.log(
  "Converting string to uppercase case:",
  lowercase.toLocaleUpperCase()
);

//Fix name
const passengerName = "jOhN"; //John
const passengerLowercase = passengerName.toLowerCase();
const firstCapital =
  passengerLowercase[0].toUpperCase() + passengerLowercase.slice(1);

console.log(`${passengerName} is coonverted to ${firstCapital}`);

//check email
const email = "john@email.com";
const wrongEmail = "    John@email.com ";
console.log("Wrong email is:", wrongEmail);

const emailLowercase = wrongEmail.toLowerCase();
const trimmedEmail = emailLowercase.trim();
console.log("Trimmed email without space and uppercase letters:", trimmedEmail);

const trimMethod2 = wrongEmail.toLowerCase().trim();
console.log("Using multiple string methods:", trimMethod2);

//replacing
const price = "10,000#";
const priceUS = price.replace("#", "$").replace(",", ".");
console.log("replacing element in string:", priceUS);

const annoucement = "All doors are open except back doors";
console.log(
  "replacing doors with gates:",
  annoucement.replace("doors", "gates")
); //It will only replace the first occurance
console.log(
  "replacing all doors with gates:",
  annoucement.replaceAll("doors", "gates")
);
console.log(
  "replacing all doors with gates using regular expressions:",
  annoucement.replace(/doors/g, "gates")
);

//Booleans
const methodBoolean = "A320neo";
console.log("String is:", methodBoolean);
console.log("checking includes:", methodBoolean.includes("A32"));
console.log(
  "checking if string starts with A32:",
  methodBoolean.startsWith("A32")
);
console.log(
  "checking if string starts with yooo:",
  methodBoolean.startsWith("yooo")
);
console.log("checking if string ends with neo:", methodBoolean.endsWith("neo"));
console.log(
  "checking if string ends with boom:",
  methodBoolean.endsWith("boom")
);

//Practise Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log(`${items} : You are carrying some wild stuff`);
  } else {
    console.log(`${items} : Happy Journey!!`);
  }
};
checkBaggage("I have Laptop, Food and Knife");
checkBaggage("I have socks, food and camera");
checkBaggage("I have snacks, gun and water");
//It is a good practise to first coonvert a string into lowecase if we want to test some words, coz strings are case sensitive. Y !== y

console.log(
  "-------------------------Part 3----------------------------------------"
);

//Split: It will split the string provided by given input and stored in an array
console.log("String split:", "a+very+nice+string".split("+"));

const nameSplit = "name surname".split(" ");
const [name, surname] = nameSplit; //destructuring
console.log(
  `name is: ${name} and surname is: ${surname} and array is: ${nameSplit}`
);

//Join: opposite of split | joins strings in array
const newName = ["Mr", name, surname.toUpperCase()].join(" ");
console.log("Join method:", newName);

const a = ["a", "b", "c", "d", "e", "f"].join("xx");
console.log(a);

//Get a name and capitalize first letter of name and surname
const capitalizeName = function (name) {
  const nameSplit = name.split(" ");
  console.log("User input:", nameSplit);

  const allWords = [];

  //method1
  // for (let i = 0; i < nameSplit.length; i++) {
  //   const capitalizeWord =
  //     nameSplit[i][0].toUpperCase() + nameSplit[i].slice(1);

  //   allWords.push(capitalizeWord);
  // }

  //Method2
  for (const word of nameSplit) {
    const capitalizeWord = word.replace(word[0], word[0].toUpperCase());
    allWords.push(capitalizeWord);
  }

  console.log("Joined words:", allWords.join(" "));
};

capitalizeName("name surname");
capitalizeName("john singham");

//Padding: It will take 2 arguments first is lenggth and second is string that we want to add to fulfil that length
const padding = "Go to gate no.23";
console.log("padding start:", padding.padStart(25, "+"));
console.log("padding end:", "Hello".padEnd(25, "+"));

//credit card example
const maskCreditCard = function (number) {
  const numberToString = String(number);
  // another method to convert number to string is number + ""

  const lastFourDigits = numberToString.slice(-4);
  console.log(
    `Masked number of ${numberToString} is ${lastFourDigits.padStart(
      numberToString.length,
      "*"
    )}`
  );
};
maskCreditCard(123456789451);
maskCreditCard(1234567888888888);
maskCreditCard(2546852132558);
maskCreditCard(15454554842328454);

//repeat: repeating same string multiple times
const repeatMethod = "Happy journey.... all the tourists!!";
console.log("repeat method:", repeatMethod.repeat(5));

const planesInLine = function (planes) {
  console.log(`There are total ${planes} planes ${":)".repeat(planes)}`);
};
planesInLine(5);
planesInLine(2);
