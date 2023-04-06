"use strict";

const adviceContainer = document.querySelector(".advice-container");
const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const patterDivider = document.querySelector(".pattern-divider");
const diceIcon = document.querySelector(".dice-box");
const loader = document.querySelector(".loader");

let adviceContent = {};

const loading = function () {
  adviceContainer.hidden = true;
  loader.hidden = false;
};
const complete = function () {
  adviceContainer.hidden = false;
  loader.hidden = true;
};

const showRandomAdvice = function () {
  adviceText.textContent = adviceContent.slip.advice;
  adviceId.textContent = adviceContent.slip.id;
  getAdvice();
};

diceIcon.addEventListener("click", showRandomAdvice);

const getAdvice = async function () {
  loading();
  const adviceApi = await fetch("https://api.adviceslip.com/advice");
  adviceContent = await adviceApi.json();
  console.log(adviceContent.slip.advice);
  console.log(adviceContent.slip.id);
  complete();
};

getAdvice();

console.log(window.innerWidth);
if (window.innerWidth <= 490) {
  patterDivider.src = "./images/pattern-divider-mobile.svg";
}
