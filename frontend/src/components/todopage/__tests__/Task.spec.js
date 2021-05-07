import React from 'react';
import { render, fireEvent, userEvent} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Task from '../Task';

describe('Todo Task Test', () => {
  test('test task without done', () => {
    const onMarkDone = jest.fn();
    const onDelete = jest.fn();
    const info = {name: "buy a book", done: false, date: ""};
    const task = render(<Task info={info} onMarkDone={onMarkDone} onDelete={onDelete} />);
    const name = task.getByTestId("test-name");
    const date = task.queryByTestId("test-date");
    expect(name).toHaveTextContent('buy a book');
    expect(date).toBe(null);
  });

  test('test task with done', () => {
    const onMarkDone = jest.fn();
    const onDelete = jest.fn();
    const info = {name: "buy a book", done: true, date: "2020/05/07 17:41"};
    const task = render(<Task info={info} onMarkDone={onMarkDone} onDelete={onDelete} />);
    const name = task.getByTestId("test-name");
    const date = task.queryByTestId("test-date");
    expect(name).toHaveTextContent('buy a book');
    // expect(name).toHaveAttribute('text-decoration', 'line-through');
    expect(date).toHaveTextContent('2020/05/07 17:41');
  });

  test('test Mark as down button', () => {
    const onMarkDone = jest.fn();
    const onDelete = jest.fn();
    const info = {name: "buy a book", done: false, date: ""};
    const task = render(<Task info={info} onMarkDone={onMarkDone} onDelete={onDelete} />);
    const row = task.getByTestId("test-info-row");
    fireEvent.mouseOver(row);
    const btMarkDown = task.getByTestId("test-done-button");
    fireEvent.click(btMarkDown);
    expect(onMarkDone).toHaveBeenCalledTimes(1);
  });

  test('test Delete button', () => {
    const onMarkDone = jest.fn();
    const onDelete = jest.fn();
    const info = {name: "buy a book", done: false, date: ""};
    const task = render(<Task info={info} onMarkDone={onMarkDone} onDelete={onDelete} />);
    const row = task.getByTestId("test-info-row");
    fireEvent.mouseOver(row);
    const btDelete = task.getByTestId("test-delete-button");
    fireEvent.click(btDelete);
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
