import counterOfComments from './countComments.js';

describe('Testing counter of comments', () => {
  test('Test an array with 3 items', () => {
    expect(counterOfComments([1, 2, 3])).toBe(3);
  });

  test('Test an array with 5 items', () => {
    expect(counterOfComments([1, 2, 3, 4, 5])).toBe(5);
  });

  test('Test an array with 9 items', () => {
    expect(counterOfComments([5, 2, 3, 9, 6, 5, 4, 3, 1])).toBe(9);
  });
});