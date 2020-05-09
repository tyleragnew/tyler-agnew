import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the header', () => {
  const { getByTestId } = render(<App />);
  const header = getByTestId('header')
  expect(header).toBeInTheDocument();
});
