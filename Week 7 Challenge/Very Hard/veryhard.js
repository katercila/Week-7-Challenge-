function add(x, y) {
    return x + y;
 //console.log(add(2, 2));
 }
 function subtract(x, y) {
     return x - y;
 }
 function multiply(x, y) {
     return x * y;
 }
 function divide(x, y) {
     return x / y;
 }

 const num1 = prompt('Enter a number:');
 const operator = prompt('Enter an operator (+, -, *, or /):');
 const num2 = prompt('Enter another number:'); 

 let result;
 
 if (operator === '+') {
    result = add(num1, num2);
  } else if (operator === '-') {
    result = subtract(num1, num2);
  } else if (operator === '*') {
    result = multiply(num1, num2);
  } else if (operator === '/') {
    result = divide(num1, num2);
  }
  // `` instead of ' ' 
console.log(`${num1} ${operator} ${num2} = ${result}`); 