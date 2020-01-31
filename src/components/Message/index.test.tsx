import React from 'react';
import { render } from '@testing-library/react';
import Message from './index';

test('renders Message component', () => {
  const { getByText } = render(
    <Message text='Hello world' />
  );
  const element = getByText(/Hello world/i);
  expect(element).toBeInTheDocument();
});