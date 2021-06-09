"use strict";

const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

// if we use querySelector if there are multiple classes with same name then it will automatically select first element with that class hence in this
// case wwe need to use querySelectorAll
const openModal = document.querySelectorAll(".show-modal");
console.log("open modal class:", openModal);

//Function to open modal
const openModalFunction = function () {
  //removing hidden class of modal
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//Function to close modal
const closeModalFunction = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// accessing elements having same class
for (let i = 0; i < openModal.length; i++) {
  console.log(openModal[i].textContent);
  openModal[i].addEventListener("click", openModalFunction);
}

//closing modal
modalClose.addEventListener("click", closeModalFunction);
overlay.addEventListener("click", closeModalFunction);
//here if we use closeModalFunction() this instead of
// closeModalFunction then it will not work as JS will call this once page is load and not after click event.

//Keyboad events:
// 1. keyup: event will happen when we lift finger from certain key
// 2. keypress: event will happen continuesly when we touch certain key
// 3. keydown: event will happen when we touch certain key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    console.log("key", e);
    closeModalFunction();
  }
});
