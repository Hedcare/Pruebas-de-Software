const {subtract, isEven} = require('./03-examen.js');

test('test should be 7', () => {
  const result = subtract(10,3);
  expect(result).toBe(7);
});

test('test should be -7', () => {
  const result = subtract(3,10);
  expect(result).toBe(-7);
});

test('test should be true', () => {
  const result = isEven(10);
  expect(result).toBe(true);
});

test('test should be false', () => {
  const result = isEven(3);
  expect(result).toBe(false);
});

test('test should be true', () => {
  const result = isEven(0);
  expect(result).toBe(true);
});
