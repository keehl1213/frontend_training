import React from 'react';
import MockDate from 'mockdate';
import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoPage, {transferDate} from '../TodoPage';
import Todo from '../index';

describe('Todo Page Test', () => {
  const testList = [
    {
      id: 0,
      name: 'Read a book',
      done: false,
      date: ""
    },
    {
      id: 1,
      name: 'Jog in a playground',
      done: false,
      date: ""
    },
    {
      id: 2,
      name: 'Write articles',
      done: true,
      date: '完成時間:2021/05/05 11:42'
    }
  ];


  test('transferDate', () => {
    MockDate.set('2021-05-02T02:09:01');
    expect(transferDate(new Date())).toBe('2021/05/02 02:09');
    MockDate.reset();
  });

  test('test todopage add button', () => {
    const { getByText } = render(<TodoPage list={testList} />);
    const input = screen.getByTestId('test-input');
    const addButton = screen.getByTestId('test-add-button');

    fireEvent.change(input, { target: { value: 'buy a book' } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: 'reply an e-amil' } });
    fireEvent.click(addButton);

    expect(getByText('buy a book')).toBeInTheDocument();
    expect(getByText('reply an e-amil')).toBeInTheDocument();
    // const names = screen.getAllByTestId('test-name');
    // expect(names).toHaveLength(4);
    // expect(names[2]).toHaveTextContent('buy a book');
    // expect(names[3]).toHaveTextContent('reply an e-amil');

  });

  test('test todopage delete button', () => {

    render(<TodoPage list={testList} />);
    const checkBox = screen.getByTestId('test-showDown-button');
    fireEvent.click(checkBox);
    const rows = screen.getAllByTestId("test-info-row");
    fireEvent.mouseOver(rows[1]);
    const btDelete = screen.queryByTestId("test-delete-button");
    fireEvent.click(btDelete);
    const names = screen.getAllByTestId('test-name');
    expect(names).toHaveLength(2);
    expect(names[0]).toHaveTextContent('Read a book');
    expect(names[1]).toHaveTextContent('Write articles');
  });


  test('test todopage mark as done', () => {
    render(<TodoPage list={testList} />);
    MockDate.set('2021-05-02T02:09:01');
    const checkBox = screen.getByTestId('test-showDown-button');
    fireEvent.click(checkBox);
    const rows = screen.getAllByTestId('test-info-row');
    fireEvent.mouseOver(rows[1]);
    const btMarkDown = screen.queryByTestId('test-done-button');
    fireEvent.click(btMarkDown);
    const dates = screen.getAllByTestId('test-date');
    expect(dates).toHaveLength(2);
    expect(dates[0]).toHaveTextContent('完成時間:2021/05/02 02:09');
    MockDate.reset();
  });

  test('test todopage clear button', () => {
    render(<TodoPage list={testList} />);
    const checkBox = screen.getByTestId('test-showDown-button');
    fireEvent.click(checkBox);
    const clearButton = screen.getByTestId('test-clear-button');
    fireEvent.click(clearButton);
    const names = screen.getAllByTestId('test-name');
    const dates = screen.queryAllByTestId('test-date');
    expect(names).toHaveLength(2);
    expect(dates).toHaveLength(0);
  });


});
