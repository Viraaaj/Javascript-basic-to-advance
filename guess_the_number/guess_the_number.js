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
const randomNumber = Math.trunc(Math.random() * 20) + 1;

//wrong input score change
let wrongGuessScore = 20;

document.querySelector(".number").textContent = randomNumber;

//Event listners
document.querySelector(".check").addEventListener("click", function () {
  const inputNumber = Number(document.querySelector(".guess").value);
  console.log(inputNumber);

  if (!inputNumber) {
    document.querySelector(".message").textContent = "Invalid input!!";
    console.log("Null value");
  } else if (inputNumber === randomNumber) {
    document.querySelector(".message").textContent = "Correct Number!";
  } else if (inputNumber > randomNumber) {
    //change text won or loss
    if (wrongGuessScore > 1) {
      document.querySelector(".message").textContent = "Too High!";
      //change score
      wrongGuessScore = wrongGuessScore - 1;
      document.querySelector(".score").textContent = wrongGuessScore;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (inputNumber < randomNumber) {
    //change text won or loss
    if (wrongGuessScore > 1) {
      document.querySelector(".message").textContent = "Too Low!";

      //change score
      wrongGuessScore = wrongGuessScore - 1;
      document.querySelector(".score").textContent = wrongGuessScore;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
