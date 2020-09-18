// write your own test cases
import { flipArgsFunction } from './flipArgs';

describe('flipArgs', () => {
  it('should return a function', () => {
    expect(typeof flipArgsFunction()).toBe('function');
  });

  it('The flipped function should return the correct result', () => {
    const foo = (x, y) => x / y;
    const flippedFunction = flipArgsFunction(foo);
    expect(flippedFunction(5, 10)).toBe(2);
  });
});
