import React from 'react';
import { render } from '@testing-library/react';
import Column from './Column';

test('renders Column component', () => {
  const { getByText } = render(
    <Column>
      <p>Hello world</p>
    </Column>
  );
  const element = getByText(/Hello world/i);
  expect(element).toBeInTheDocument();
});