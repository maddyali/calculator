const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = function (operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "x":
      return multiply(a, b);
      break;
    case "÷":
      if (b === 0) return null;
      else return divide(a, b);
      break;
  }
};

const numberBtns = document.querySelectorAll(".number");
const currentOperationScreen = document.querySelector(
  "#currentOperationScreen"
);
const lastOperationScreen = document.querySelector("#lastOperationScreen");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector("#clearBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const decimalBtn = document.querySelector("#decimalBtn");

numberBtns.forEach((button) => {
  button.addEventListener("click", () => displayNumber(button.textContent));
});
operatorBtns.forEach((button) => {
  button.addEventListener("click", () => setOperation(button.textContent));
});
equalsBtn.addEventListener("click", () => evaluate());
clearBtn.addEventListener("click", () => clear());
deleteBtn.addEventListener("click", () => deleteNumber());
decimalBtn.addEventListener("click", () => displayDecimal());

let firstOperand = null;
let secondOperand = null;
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
  if (currentOperation != null) evaluate();
  firstOperand = currentOperationScreen.textContent;
  currentOperation = operator;
  lastOperationScreen.textContent = `${firstOperand} ${currentOperation} `;
  resetScreenState = true;
}

function resetScreen() {
  currentOperationScreen.textContent = "";
  resetScreenState = false;
}

function evaluate() {
  if (currentOperation === null || resetScreenState) return;
  if (currentOperation === "÷" && currentOperationScreen.textContent === "0") {
    alert("The math ain't mathing");
    return;
  }
  secondOperand = currentOperationScreen.textContent;
  currentOperationScreen.textContent = roundNumber(
    operate(currentOperation, firstOperand, secondOperand)
  );
  lastOperationScreen.textContent += `${secondOperand} = `;
  currentOperation = null;
  resetScreenState = true;
}

function clear() {
  currentOperationScreen.textContent = "0";
  lastOperationScreen.textContent = "";
  currentOperation = null;
  resetScreenState = false;
}

function deleteNumber() {
  currentOperationScreen.textContent = currentOperationScreen.textContent.slice(
    0,
    -1
  );
}

function roundNumber(number) {
  return Math.round(number * 10000) / 10000;
}

function displayDecimal() {
  if (currentOperationScreen.textContent === "")
    currentOperationScreen.textContent = 0;
  if (currentOperationScreen.textContent.includes(".")) return;
  currentOperationScreen.textContent += ".";
}

// keyboard support

document.addEventListener("keydown", keyboardSupport);

function keyboardSupport(e) {
  if (e.key >= 0 && e.key <= 9) displayNumber(e.key);
  if (e.key === "Backspace") deleteNumber();
  if (e.key === ".") displayDecimal();
  if (e.key === "Enter" || e.key === "=") evaluate();
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
    setOperation(convertKeyOperator(e.key));
}

function convertKeyOperator(keyboardOperator) {
  if (keyboardOperator === "+") return "+";
  if (keyboardOperator === "-") return "−";
  if (keyboardOperator === "*") return "×";
  if (keyboardOperator === "/") return "÷";
}
