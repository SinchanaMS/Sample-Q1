// import "./styles.css";
var inputOne = document.querySelector("#input-one");
var inputTwo = document.querySelector("#input-two");
var addBtn = document.querySelector("#add");
var subtractBtn = document.querySelector("#subtract");
var multiplyBtn = document.querySelector("#multiply");
var divideBtn = document.querySelector("#divide");
var outputResult = document.querySelector("#output");

function addition() {
  var firstInput = Number(inputOne.value);
  var secondInput = Number(inputTwo.value);
  var sum = firstInput + secondInput;
  outputResult.innerText = "The sum of the two numbers is: " + sum;
}

function subtraction() {
  var firstInput = Number(inputOne.value);
  var secondInput = Number(inputTwo.value);
  var difference = firstInput - secondInput;
  outputResult.innerText =
    "The difference of the two numbers is: " + difference;
}

function multiplication() {
  var firstInput = Number(inputOne.value);
  var secondInput = Number(inputTwo.value);
  var product = firstInput * secondInput;
  outputResult.innerText = "The product of the two numbers is: " + product;
}

function division() {
  var firstInput = Number(inputOne.value);
  var secondInput = Number(inputTwo.value);
  var quotient = firstInput / secondInput;
  outputResult.innerText = "The division of the two numbers is: " + quotient;
}

addBtn.addEventListener("click", addition);
subtractBtn.addEventListener("click", subtraction);
multiplyBtn.addEventListener("click", multiplication);
divideBtn.addEventListener("click", division);
