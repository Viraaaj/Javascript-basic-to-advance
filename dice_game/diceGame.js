"use strict";

//Elements
const playerZero = document.querySelector(".player--0");
const playerOne = document.querySelector(".player--1");
const playerZeroScore = document.querySelector("#score--0");
const playerOneScore = document.querySelector("#score--1");
const diceElement = document.querySelector(".dice");
const newGameButton = document.querySelector(".btn--new");
const rollDiceButton = document.querySelector(".btn--roll");
const holdDiceButton = document.querySelector(".btn--hold");
const playerZeroCurrentScore = document.querySelector("#current--0");
const playerOneCurrentScore = document.querySelector("#current--1");

//Starting values
playerZeroScore.textContent = 0;
playerOneScore.textContent = 0;
diceElement.classList.add("hidden");

let currentScore = 0;

const scores = [0, 0]; // position1: player1 score, position2: player2 score
let activePlayer = 0;

// rolling dice functionality
rollDiceButton.addEventListener("click", function () {
  //generate random dice
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log("dice number:", dice);

  //display dice
  diceElement.classList.remove("hidden");

  //method 1
  //   if (dice == 1) {
  //     diceElement.src = "dice-1.png";
  //   } else if (dice == 2) {
  //     diceElement.src = "dice-2.png";
  //   } else if (dice == 3) {
  //     diceElement.src = "dice-3.png";
  //   } else if (dice == 4) {
  //     diceElement.src = "dice-4.png";
  //   } else if (dice == 5) {
  //     diceElement.src = "dice-5.png";
  //   } else {
  //     diceElement.src = "dice-6.png";
  //   }

  //Method 2
  diceElement.src = `dice-${dice}.png`;

  //If dice number 1 one change player
  if (dice !== 1) {
    currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    playerZero.classList.toggle("player--active");
    playerOne.classList.toggle("player--active");
  }
});
