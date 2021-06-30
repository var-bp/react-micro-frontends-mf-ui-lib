import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

const defaultProps = {
  title: 'Button',
};

test('renders button without crashing', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const { getByTestId } = render(<Button {...defaultProps} />);
  const element = getByTestId('button');
  expect(element).toBeInTheDocument();
});
