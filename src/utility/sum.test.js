const sum = require('./sum');
const dataBeforeSum = require('./dataBeforeSum');
const dataAfterSum = require('./dataAfterSum');

beforeEach(() => {
  console.log(dataBeforeSum());
});

afterEach(() => {
  console.log(dataAfterSum());
});

test('testing sum 1', () => {
  expect(sum(1, 2)).toBe(3);
});

test('testing sum 2', () => {
  expect(sum(1, 2)).toBe(3);
});

test('testing sum 3', () => {
  expect(sum(1, 2)).toBe(3);
});
