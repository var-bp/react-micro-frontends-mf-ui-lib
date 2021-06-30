import React from 'react';
import { Container } from './Button.style';

export interface ButtonProps {
  title: string;
}

const Button = ({ title }: ButtonProps): JSX.Element => (
  <Container data-testid="button" type="button">
    {title}
  </Container>
);

export default Button;
