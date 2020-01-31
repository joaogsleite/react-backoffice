import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';

test('renders Header component', () => {
  const { getByText } = render(
    <Header title='Hello world' />
  );
  const element = getByText(/Hello world/i);
  expect(element).toBeInTheDocument();
});