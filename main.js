"use strict";

let input = 0;
let preliminaryResult = 0;
let solution = 0;
let operator = "+";
let preliminaryResultNumber = 0;
let username = "";

// usernameInput();
// function usernameInput() {
//   username = prompt(`Enter username:`);
// }
// console.log(username);
// updateUsername();

function addNumber(zahl) {
  input = input * 10 + zahl;
  updateInput();
}

function useOperator(operatorSymbol) {
  if (operator === "+") {
    solution = preliminaryResultNumber + input;
  } else if (operator === "-") {
    solution = preliminaryResultNumber - input;
  } else if (operator === "*") {
    solution = preliminaryResultNumber * input;
  } else if (operator === "/") {
    solution = preliminaryResultNumber / input;
  }

  updateSolution();
  input = solution;

  preliminaryResult = input + operatorSymbol;
  operator = operatorSymbol;
  preliminaryResultNumber = input;
  updatePreliminaryResult();
  input = 0;
  updateInput();
}

function calculate() {
  if (operator === "+") {
    solution = preliminaryResultNumber + input;
  } else if (operator === "-") {
    solution = preliminaryResultNumber - input;
  } else if (operator === "*") {
    solution = preliminaryResultNumber * input;
  } else if (operator === "/") {
    solution = preliminaryResultNumber / input;
  }

  updateSolution();

  input = solution;
  preliminaryResultNumber = 0;
  preliminaryResult = 0;
  updatePreliminaryResult();
  updateInput();

  console.log(input);
}

function clearInput() {
  input = 0;
  preliminaryResult = 0;
  preliminaryResultNumber = 0;
  solution = 0;
  updateInput();
  updatePreliminaryResult();
}

function updateInput() {
  document.getElementById("input").innerHTML = input;
}

function updatePreliminaryResult() {
  document.getElementById("preliminaryResult").innerHTML = preliminaryResult;
}

function updateUsername() {
  document.getElementById("username").innerHTML = username;
}

function updateSolution() {
  document.getElementById("solution").innerHTML =
    `<p class="solution-element"> ${preliminaryResultNumber} ${operator} ${input} = ${solution} <p>` +
    document.getElementById("solution").innerHTML;
}
