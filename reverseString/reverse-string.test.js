const reverseString = require('./reverse-string');

test("Reverses 'Jotaro'", () => {
  expect(reverseString('Jotaro')).toBe('oratoJ');
});

test("Reverses 'Star Platinum: The World'", () => {
  expect(reverseString('Star Platinum: The World')).toBe('dlroW ehT :munitalP ratS');
});