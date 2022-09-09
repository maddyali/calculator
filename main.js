const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = function (operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
  }
};

const numberBtns = document.querySelectorAll(".number");
const currentOperationScreen = document.querySelector(
  "#currentOperationScreen"
);
const lastOperationScreen = document.querySelector("#lastOperationScreen");

const operatorBtns = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");

numberBtns.forEach((button) => {
  button.addEventListener("click", () => displayNumber(button.textContent));
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", () => setOperation(button.textContent));
});

equals.addEventListener("click", () => console.log("equals"));

let firstOperand;
let secondOperand;
let currentOperation = null;
let resetScreenState = false;

function displayNumber(number) {
  if (currentOperationScreen.textContent === "0" || resetScreenState) {
    resetScreen();
    currentOperationScreen.textContent = number;
  } else {
    currentOperationScreen.textContent += number;
  }
}

function setOperation(operator) {
  firstOperand = currentOperationScreen.textContent;
  currentOperation = operator;
  lastOperationScreen.textContent = `${firstOperand} ${currentOperation} `;
  resetScreenState = true;
}

function resetScreen() {
  currentOperationScreen.textContent = " ";
  resetScreenState = false;
}
