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

numberBtns.forEach((button) => {
  button.addEventListener("click", () => displayNumber(button.textContent));
});

function displayNumber(number) {
  document.querySelector(".screen").textContent += number;
}
