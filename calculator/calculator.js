class Calculator {
  add (a, b) {  return a + b; }
  subtract (a, b) { return a - b; }
  multiply (a, b) { return a * b  }
  divide (a, b) { return a / b  }
}

let calc = new Calculator();
console.log(calc.add(5, 6));
console.log(calc.subtract(5, 6));
console.log(calc.multiply(5, 6));
console.log(calc.divide(5, 6));

module.exports = Calculator;