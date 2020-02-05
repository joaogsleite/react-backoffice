import React from 'react';
import { render } from '@testing-library/react';
import Title from './index';

test('renders Title component', () => {
  const { getByText } = render(
    <Title>Hello world</Title>
  );
  const element = getByText(/Hello world/i);
  expect(element).toBeInTheDocument();
});