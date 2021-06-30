import React, { MouseEvent } from 'react';
import { Container } from './Button.style';

export interface ButtonProps {
  title: string;
  href?: string;
  target?: string;
  rel?: string;
  as: 'button' | 'a';
  onClick?: (event: MouseEvent) => void;
}

const Button = ({ title, as, href, target, rel, onClick }: ButtonProps): JSX.Element | null => {
  switch (as) {
    case 'button':
      return (
        <Container data-testid="button" as={as} type="button" onClick={onClick}>
          {title}
        </Container>
      );
    case 'a':
      return (
        <Container data-testid="button" as={as} href={href} target={target} rel={rel}>
          {title}
        </Container>
      );
    default:
      return null;
  }
};

export default Button;
