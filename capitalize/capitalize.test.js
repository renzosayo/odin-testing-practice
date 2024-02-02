const capitalize = require('./capitalize');

test("Capitalizes 'jojo'", () => {
  expect(capitalize('jojo')).toBe('Jojo');
});

test("Capitalizes 'a'", () => {
  expect(capitalize('a')).toBe('A');
});
