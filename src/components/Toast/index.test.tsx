import React from 'react';
import { render } from '@testing-library/react';
import Toast from './index';

test('renders Alert component', () => {
  const children = (
    <p>Hello world</p>
  );
  const handleDismiss = () => {

  };
  const { getByText } = render(
    <Toast
      children={children}
      onDismiss={handleDismiss}
    />
  );
  const element = getByText(/Hello world/i);
  expect(element).toBeInTheDocument();
});