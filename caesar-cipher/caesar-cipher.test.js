const caesarCipher = require('./caesar-cipher');

test('Wraps z to a', () => {
  expect(caesarCipher('crazy diamond', 1)).toBe('dsbaz ejbnpoe');
});

test('Keeps case', () => {
  expect(caesarCipher('Crazy Diamond', 1)).toBe('Dsbaz Ejbnpoe');
});

test('Keeps punctuation', () => {
  expect(caesarCipher('Crazy, Diamond!', 1)).toBe('Dsbaz, Ejbnpoe!');
});

test('Shifts two', () => {
  expect(caesarCipher('CRAZY DIAMOND', 2)).toBe('ETCBA FKCOQPF');
});