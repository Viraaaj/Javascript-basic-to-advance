"use strict";

// Manipulating DOM
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct number";
console.log(document.querySelector(".message").textContent);

//Manipulating Number and score
document.querySelector(".number").textContent = 10;
document.querySelector(".score").textContent = 15;

//Manipulating text input
document.querySelector(".guess").value = 20;
