"use strict";

let input = 0;
let preliminaryResult = undefined;
let solution = 0;
let operator = "+";
let preliminaryResultNumber;
let username = "";
// let solutionShow = false;

function addNumber(zahl) {
  input = input * 10 + zahl;
  updateInput();
}

function useOperator(operatorSymbol) {
  if (
    preliminaryResult === undefined ||
    input == 0 ||
    preliminaryResultNumber == 0
  ) {
    preliminaryResult = input + operatorSymbol;
    operator = operatorSymbol;
    preliminaryResultNumber = input;
    updatePreliminaryResult();
    input = 0;
    updateInput();
  } else {
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
  //   input = 0;
  //   operator = "";
}

// function toggleSolutionVisible() {
//   let solutionElement = document.getElementById("solution-show");
//   if (solutionShow) {
//     solutionElement.classList.;
//   }
// }

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
    `<p class="solution-element" id="solution-show"> ${preliminaryResultNumber} ${operator} ${input} = ${solution} <p>` +
    document.getElementById("solution").innerHTML;
}
