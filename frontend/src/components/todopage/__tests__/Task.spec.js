import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Task from '../Task';

describe('Todo Task Test', () => {
  test('test task without done', async () => {
    const onMarkDone = jest.fn();
    const onDelete = jest.fn();
    const info = {name: 'buy a book', done: false, date: ''};
    const task = render(<Task info={info} onMarkDone={onMarkDone} onDelete={onDelete} />);
    const name = task.getByTestId('test-name');
    const date = task.queryByTestId('test-date');
    expect(name).toHaveTextContent('buy a book');
    expect(name).toHaveStyle('text-decoration: none');
    expect(date).toBe(null);
  });

  test('test task with done', async () => {
    const onMarkDone = jest.fn();
    const onDelete = jest.fn();
    const info = {name: 'buy a book', done: true, date: '2020/05/07 17:41'};
    const task = render(<Task info={info} onMarkDone={onMarkDone} onDelete={onDelete} />);
    const name = task.getByTestId('test-name');
    const date = task.queryByTestId('test-date');
    expect(name).toHaveTextContent('buy a book');
    expect(name).toHaveStyle('text-decoration: line-through');
    expect(date).toHaveTextContent('2020/05/07 17:41');

  });

  test('test Mark as down button', () => {
    const onMarkDone = jest.fn();
    const onDelete = jest.fn();
    const info = {name: 'buy a book', done: false, date: ''};
    const task = render(<Task info={info} onMarkDone={onMarkDone} onDelete={onDelete} />);
    const row = task.getByTestId('test-info-row');
    fireEvent.mouseOver(row);
    const btMarkDown = task.queryByTestId('test-done-button');
    expect(btMarkDown).not.toBe(null);
    expect(btMarkDown).toBeVisible();
    fireEvent.click(btMarkDown);
    expect(onMarkDone).toHaveBeenCalledTimes(1);
  });

  test('test Delete button', () => {
    const onMarkDone = jest.fn();
    const onDelete = jest.fn();
    const info = {name: 'buy a book', done: false, date: ''};
    const task = render(<Task info={info} onMarkDone={onMarkDone} onDelete={onDelete} />);
    const row = task.getByTestId('test-info-row');
    fireEvent.mouseOver(row);
    const btDelete = task.queryByTestId('test-delete-button');
    expect(btDelete).not.toBe(null);
    expect(btDelete).toBeVisible();
    fireEvent.click(btDelete);
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
