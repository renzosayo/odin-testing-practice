const analyzeArray = require('./analyze-array');

test('Returns correct average', () => {
  expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
});

test('Returns correct min', () => {
  expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
});

test('Returns correct max', () => {
  expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
});

test('Returns correct length', () => {
  expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
});