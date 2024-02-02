const Calculator = require('./calculator');

const calc = new Calculator();

test('Adds 5 and 6', () => {
  expect(calc.add(5, 6)).toBeCloseTo(11);
});

test('Subtracts 5 from 6', () => {
  expect(calc.subtract(5, 6)).toBeCloseTo(-1);
});

test('Multiplies 5 to 6', () => {
  expect(calc.multiply(5, 6)).toBeCloseTo(30);
});

test('Divides 5 by 6', () => {
  expect(calc.divide(5, 6)).toBeCloseTo(0.8333);
});