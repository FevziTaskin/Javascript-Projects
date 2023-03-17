const userInput = document.getElementById("userInput");

let expression = "";

function press(num) {
  expression += num;
  userInput.value = expression;
}

function equal() {
  userInput.value = eval(expression);
  expression = "";
}

const erase = () => {
  expression = "";
  userInput.value = expression;
};
