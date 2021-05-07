import { transferDate } from '../TodoPage';

describe('Todo Page Test', () => {

  test('transferDate', () => {
    const date = new Date('2021-05-02T02:09:01');
    const spy = jest.spyOn(global, 'Date').mockImplementation(() => date);
    expect(transferDate(new Date())).toBe('2021/05/02 02:09');
    spy.mockRestore();
  });
});
