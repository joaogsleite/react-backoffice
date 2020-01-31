import React from 'react';
import { render } from '@testing-library/react';
import Container from './index';

test('renders Container component', () => {
  const { getByText } = render(
    <Container>
      <p>Hello world</p>
    </Container>
  );
  const element = getByText(/Hello world/i);
  expect(element).toBeInTheDocument();
});