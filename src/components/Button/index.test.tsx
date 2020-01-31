import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';

test('renders Button component', () => {
  const text = (
    <p>Hello world</p>
  )
  const handleClick = () => {

  };
  const { getByText } = render(
    <Button
      onClick={handleClick}
      text={text}
    />
  );
  const element = getByText(/Hello world/i);
  expect(element).toBeInTheDocument();
});