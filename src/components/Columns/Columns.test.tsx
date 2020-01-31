import React from 'react';
import { render } from '@testing-library/react';
import Columns from './Columns';

test('renders Column component', () => {
  const { getByText } = render(
    <Columns>
      <p>Hello world</p>
    </Columns>
  );
  const element = getByText(/Hello world/i);
  expect(element).toBeInTheDocument();
});