import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Item from '../Item';

describe('Test List', () => {
  test('list number', async () => {
    const { getByText } = render(<Item />);
    const items = await screen.getAllByTestId('test-item');
    // console.log(items);
    expect(items).toHaveLength(1);
    expect(getByText(0)).toBeInTheDocument();
  });

  test('add item', async () => {
    const { getByText } = render(<Item />);
    const button = getByText(/add/);
    fireEvent.click(button);
    fireEvent.click(button);
    const items = await screen.getAllByTestId('test-item');
    expect(items).toHaveLength(3);
    expect(getByText(0)).toBeInTheDocument();
    expect(getByText(1)).toBeInTheDocument();
    expect(getByText(2)).toBeInTheDocument();
  });
});
