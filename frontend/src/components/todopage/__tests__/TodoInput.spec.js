import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoInput from '../TodoInput';

describe('Todo Input Test', () => {

  /*
    說明: 測試輸入框數值是否正確
    步驟: 輸入 "buy a book"
    驗證: 輸入框顯示 "buy a book"
  */
  test('test input Value', () => {
    const doAdd = jest.fn((name) => (name));
    const doClearDone = jest.fn(() => null);
    const todoInput = render(<TodoInput doAdd={doAdd} doClearDone={doClearDone} />);
    const input = todoInput.getByTestId('test-input');
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'buy a book' } });
    expect(input.value).toBe('buy a book');
  });

  /*
    說明: 測試當 input 有值時 按下 ADD 按鈕
    步驟: 輸入 "buy a book", 按下按鈕
    驗證: doAdd 被執行一次,  input 清空
  */
  test('Test Add button with input has value', () => {
    const doAdd = jest.fn((name) => name);
    const doClearDone = jest.fn();
    const todoInput = render(<TodoInput doAdd={doAdd} doClearDone={doClearDone} />);
    const input = todoInput.getByTestId('test-input');
    const addButton = todoInput.getByTestId('test-add-button');
    fireEvent.change(input, { target: { value: 'buy a book' } });
    fireEvent.click(addButton);
    expect(doAdd).toHaveBeenCalledTimes(1);
    expect(input.value).toBe('');
  });

  /*
    說明: 測試 input 為空時, 按下 ADD 按鈕
    步驟: 輸入 " " 情況, 按下按鈕
    驗證: doAdd 不執行
  */
  test('Test add button with input is empty', () => {
    const doAdd = jest.fn();
    const doClearDone = jest.fn();
    const todoInput = render(<TodoInput doAdd={doAdd} doClearDone={doClearDone} />);
    const addButton = todoInput.getByTestId('test-add-button');
    const input = todoInput.getByTestId('test-input');
    fireEvent.change(input, { target: { value: ' ' } });
    fireEvent.click(addButton);
    expect(doAdd).toHaveBeenCalledTimes(0);
  });

  /*
    說明: 測試當 Clear 按鈕
    步驟: 按下 Clear 按鈕
    驗證: doClear 被執行一次
  */
  test('Test clear button', () => {
    const doAdd = jest.fn();
    const doClearDone = jest.fn();
    const todoInput = render(<TodoInput doAdd={doAdd} doClearDone={doClearDone} />);
    const deleteButton = todoInput.getByTestId('test-clear-button');
    fireEvent.click(deleteButton);
    expect(doClearDone).toHaveBeenCalledTimes(1);
  });

  /*
    說明: 測試當 Add 按鈕
    步驟: 輸入 "buy a book", 按下Add按鈕
    驗證: 輸出結果字串 "buy a book"
  */
    test('Test add button result value', () => {
      const doAdd = jest.fn((name) => (name));
      const doClearDone = jest.fn();
      const todoInput = render(<TodoInput doAdd={doAdd} doClearDone={doClearDone} />);
      const input = todoInput.getByTestId('test-input');
      fireEvent.change(input, { target: { value: 'buy a book' } });
      const addButton = todoInput.getByTestId('test-add-button');
      fireEvent.click(addButton);
      expect(doAdd).toHaveBeenCalledWith('buy a book');
    });

});
