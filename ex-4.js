let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let calculator = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
};

console.log(calculator.add(10, 5));      
console.log(calculator.subtract(10, 5)); 
console.log(calculator.multiply(10, 5)); 
console.log(calculator.divide(10, 5));   

let addResult = calculator.add(10, 20);
console.log(addResult);

let divideResult = calculator.divide(3000, 10);
console.log(divideResult);