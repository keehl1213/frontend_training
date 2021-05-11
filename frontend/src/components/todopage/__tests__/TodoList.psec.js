import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import TodoList from '../TodoList';

describe('Todo List Test', () => {
  const testList = [
    {
      id: 0,
      name: "Jog in a playground",
      done: false,
      date: ""
    },
    {
    id: 1,
      name: "Read a book",
      done: true,
      date: "完成時間:2021/05/05 11:42"
    },
    {
      id: 2,
      name: "Write articles",
      done: false,
      date: ""
    }
  ];

  test('test list show', () => {
    const doMarkDone = jest.fn(() => null);
    const doDelete = jest.fn(() => null);
    const todoList = render(<TodoList list={testList} doMarkDone={doMarkDone} doDelete={doDelete} />);
    const itemsCount = todoList.getByTestId('test-item-count');
    const names = todoList.getAllByTestId('test-name');
    const dates = todoList.queryAllByTestId('test-date');
    const checkBox = todoList.getByTestId('test-showDown-button');
    expect(itemsCount).toHaveTextContent('2 Item(s)');
    expect(checkBox.checked).toEqual(false);
    expect(names).toHaveLength(2);
    expect(names[0]).toHaveTextContent('Jog in a playground');
    expect(names[1]).toHaveTextContent('Write articles');
    expect(dates).toHaveLength(0);
  });

  test('test list show done items', () => {
    const doMarkDone = jest.fn(() => null);
    const doDelete = jest.fn(() => null);
    const todoList = render(<TodoList list={testList} doMarkDone={doMarkDone} doDelete={doDelete} />);
    const checkBox = todoList.getByTestId('test-showDown-button');
    fireEvent.click(checkBox);
    const itemsCount = todoList.getByTestId('test-item-count');
    const names = todoList.getAllByTestId('test-name');
    const dates = todoList.queryAllByTestId('test-date');
    expect(itemsCount).toHaveTextContent('3 Item(s)');
    expect(checkBox.checked).toEqual(true);
    expect(names).toHaveLength(3);
    expect(names[0]).toHaveTextContent('Jog in a playground');
    expect(names[1]).toHaveTextContent('Read a book');
    expect(names[2]).toHaveTextContent('Write articles');
    expect(dates).toHaveLength(1);
    expect(dates[0]).toHaveTextContent('完成時間:2021/05/05 11:42');
  });
});
