import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('renders button without crashing', () => {
  const { getByTestId } = render(<Button as="button" title="Button" />);
  const element = getByTestId('button');
  expect(element).toBeInTheDocument();
});
