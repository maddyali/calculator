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
const screen = document.querySelector(".screen");

numberBtns.forEach((button) => {
  button.addEventListener("click", () => displayNumber(button.textContent));
});

function displayNumber(number) {
  if (screen.textContent === "0") {
    screen.textContent = number;
  } else {
    screen.textContent += number;
  }
}
