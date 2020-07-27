// CONCEPTS

// 0) Logging
// console.log("Hello World")

// 1.1) Writing to a webpage
// document.write("hello world")

// 1.2) Write to a webpage at a certain ID
var test = document.getElementById("test");
// test.innerHTML = "hello world";

// 2) Variables — an item of data with a name and a value 
// var name = "Cohort 2";
// test.innerHTML = "Hello " + name;

// 3) Functions w/ paramaters — a set of instructions
function sayHello(name) {
  test.innerHTML += "Hello " + name + "<br>"
}

// sayHello("Cohort 2");
// sayHello("Cohort 1");

// Challenge: Create a for loop that calls the function above 5 times!
// for (var i = 0; i < 5; i++) {
//   sayHello("Cohort " + i);
// }

// 4) Numbers & Operators
// var number1 = 5;
// var number2 = 10;
// test.innerHTML = number1 + number2;

// 5) Event Listeners
// document.addEventListener("click", clicked);
// function clicked(e) {
//   console.log(e)
// }

// ——————————————————————————————————————————————————————
// CALCULATOR DEMO

// 1) get elements by IDs
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var addition = document.getElementById("addition");
var subtraction = document.getElementById("subtraction");
var multiplication = document.getElementById("multiplication");
var division = document.getElementById("division");
var answer = document.getElementById("answer");

// 2) add event listeners to IDs
// event listeners have an implicit function call so you need a function to call the function performOperation
addition.addEventListener("click", function() { 
  performOperation("add")
});
subtraction.addEventListener("click", function() { 
  performOperation("subtract")
});
multiplication.addEventListener("click", function() { 
  performOperation("multiply")
});
division.addEventListener("click", function() { 
  performOperation("divide")
});
// 3) create operator functions
// function addNumbers() {
//   var sum = parseInt(number1.value) + parseInt(number2.value);
//   answer.innerHTML = sum;
// }
function performOperation(operator) {
  if(operator == "add") {
    var sum = parseInt(number1.value) + parseInt(number2.value);
    answer.innerHTML = number1.value + " + " + number2.value + " = " + sum;
  }
  else if (operator == "subtract") {
    var difference = parseInt(number1.value) - parseInt(number2.value);
    answer.innerHTML = number1.value + " - " + number2.value + " = " + difference;
  } 
  else if (operator == "multiply") {
    var product = parseInt(number1.value) * parseInt(number2.value);
    answer.innerHTML = number1.value + " x " + number2.value + " = " + product;
  }
  else if (operator == "divide") {
    var divide = parseInt(number1.value) / parseInt(number2.value);
    answer.innerHTML = number1.value + " / " + number2.value + " = " + divide;
  } else {
    console.log("Operator not found.")
  }
}










