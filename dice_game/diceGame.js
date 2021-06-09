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

let scores = [0, 0]; // position1: player1 score, position2: player2 score
let activePlayer = 0;

let isStillPlaying = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  playerZero.classList.toggle("player--active");
  playerOne.classList.toggle("player--active");
};

// rolling dice functionality
rollDiceButton.addEventListener("click", function () {
  if (isStillPlaying) {
    //generate random dice
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log("dice number:", dice);

    //display dice
    diceElement.classList.remove("hidden");

    diceElement.src = `dice-${dice}.png`;

    //If dice number 1 one change player
    if (dice !== 1) {
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//Hold functionality
holdDiceButton.addEventListener("click", function () {
  if (isStillPlaying) {
    //current score of active player
    scores[activePlayer] += currentScore; //scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check winner
    if (scores[activePlayer] >= 100) {
      isStillPlaying = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceElement.classList.add("hidden");
    } else {
      //switch player
      switchPlayer();
    }
    console.log(scores);
  }
});

newGameButton.addEventListener("click", function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isStillPlaying = true;

  playerZeroScore.textContent = 0;
  playerOneScore.textContent = 0;
  document.getElementById("current--0").textContent = 0;
  document.getElementById("current--1").textContent = 0;

  playerZero.classList.add("player--active");
  playerOne.classList.remove("player--active");
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
  diceElement.classList.add("hidden");
});
