import countItems from './countItems.js';

describe('Testing counter of pokemons', () => {
  test('Test an array with 3 items', () => {
    expect(countItems([5, 2, 3])).toBe(3);
  });

  test('Test an array with 5 items', () => {
    expect(countItems([5, 2, 3, 9, 6])).toBe(5);
  });

  test('Test an array with 9 items', () => {
    expect(countItems([5, 2, 3, 9, 6, 5, 4, 3, 1])).toBe(9);
  });
});
