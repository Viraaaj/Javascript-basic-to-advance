"use strict";

// // Manipulating DOM
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct number";
// console.log(document.querySelector(".message").textContent);

// //Manipulating Number and score
// document.querySelector(".number").textContent = 10;
// document.querySelector(".score").textContent = 15;

// //Manipulating text input
// document.querySelector(".guess").value = 20;

//random number
let randomNumber = Math.trunc(Math.random() * 20) + 1;

//wrong input score change
let guessScore = 10;
let highscore = 0;

//refactoring
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
}; // Like this we can refactor code for all other values by creating seperate function

//Event listners
document.querySelector(".check").addEventListener("click", function () {
  const inputNumber = Number(document.querySelector(".guess").value);
  console.log(inputNumber);

  //No input
  if (!inputNumber) {
    displayMessage("Invalid input!!");
    console.log("Null value");
  }

  //Win
  else if (inputNumber === randomNumber) {
    displayMessage("Correct Number!");
    document.querySelector("body").style.backgroundColor = "#663399";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".message").style.color = "#00FA9A";
    document.querySelector(".guess").style.color = "#00FA9A";
    document.querySelector(".number").textContent = randomNumber;
    if (guessScore > highscore) {
      highscore = guessScore;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (inputNumber !== randomNumber) {
    //change text won or loss
    if (guessScore > 1) {
      displayMessage(inputNumber > randomNumber ? "Too High!" : "Too Low!");
      //change score
      guessScore = guessScore - 1;
      document.querySelector(".score").textContent = guessScore;
    } else {
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Reset button
document.querySelector(".again").addEventListener("click", function () {
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").style.color = "#eee";
  document.querySelector(".guess").style.color = "#eee";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 10;
  guessScore = 10;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
});
