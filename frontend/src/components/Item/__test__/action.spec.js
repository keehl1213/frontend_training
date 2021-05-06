import { sum } from '../action';

describe('function test', () => {
  test('add', () => {
    expect(sum(1, 2)).toBe(3);
  })
});
