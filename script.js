
// 1) get elements by IDs
// var number1 = document.getElementById("number1");
// var number2 = document.getElementById("number2");
// var addition = document.getElementById("addition");
// var subtraction = document.getElementById("subtraction");
// var multiplication = document.getElementById("multiplication");
// var division = document.getElementById("division");
// var answer = document.getElementById("answer");

// 2) add event listeners to IDs
// event listeners have an implicit function call so you need a function to call the function performOperation
// addition.addEventListener("click", function() { 
//   performOperation("add")
// });
// subtraction.addEventListener("click", function() { 
//   performOperation("subtract")
// });
// multiplication.addEventListener("click", function() { 
//   performOperation("multiply")
// });
// division.addEventListener("click", function() { 
//   performOperation("divide")
// });
// 3) create operator functions
// function addNumbers() {
//   var sum = parseInt(number1.value) + parseInt(number2.value);
//   answer.innerHTML = sum;
// }
// function performOperation(operator) {
//   if(operator == "add") {
//     var sum = parseInt(number1.value) + parseInt(number2.value);
//     answer.innerHTML = number1.value + " + " + number2.value + " = " + sum;
//   }
//   else if (operator == "subtract") {
//     var difference = parseInt(number1.value) - parseInt(number2.value);
//     answer.innerHTML = number1.value + " - " + number2.value + " = " + difference;
//   } 
//   else if (operator == "multiply") {
//     var product = parseInt(number1.value) * parseInt(number2.value);
//     answer.innerHTML = number1.value + " x " + number2.value + " = " + product;
//   }
//   else if (operator == "divide") {
//     var divide = parseInt(number1.value) / parseInt(number2.value);
//     answer.innerHTML = number1.value + " / " + number2.value + " = " + divide;
//   } else {
//     console.log("Operator not found.")
//   }
// }

const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.key-buttons');

// testing
keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    if (!action) {
    console.log('number key!')
    }
    if ( action === 'addition' || action === 'subtraction' || action === 'multiplication' || action === 'division') {
      console.log('operator key!')
    }
    if (action === 'decimal') {
      console.log('decimal key!')
    }
    if (action === 'clear') {
      console.log('clear key!')
    }
    if (action === 'calculate') {
      console.log('equal key!')
    }
  }
})

const display = document.querySelector('.calc-display');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    // no data-action attribute means a number key
    if (!action) {
      // if calc shows 0 or prev key was an operator, we want to replace display with the clicked key
      if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent;
      } else {
        display.textContent += keyContent;
      }
    }
    // add decimal to display
    if (action === 'decimal') {
      display.textContent = displayedNum + '.';
    }
    // remove .is-depressed class from all keys
    Array.from(key.parentNode.children).forEach(k => 
    k.classList.remove('is-depressed'));
    // show that an operator was pressed
    if (action === 'addition' || action === 'subtraction' || action === 'multiplication' || action === 'division') {
      key.classList.add('is-depressed');
      // custom attribute
      calculator.dataset.previousKeyType = 'operator';
    }
    
  }
})







