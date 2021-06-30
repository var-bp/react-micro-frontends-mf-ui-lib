import styled from 'styled-components';
import { FONT_FAMILY_PRIMARY, FONT_WEIGHT_REGULAR } from '../../typography';
import {
  BUTTON_BACKGROUND_COLOR_PRIMARY,
  BUTTON_BACKGROUND_COLOR_SECONDARY,
  BUTTON_BORDER_COLOR_PRIMARY,
  BUTTON_BORDER_COLOR_SECONDARY,
  BUTTON_COLOR_PRIMARY,
} from '../../colors';

interface ButtonProps {
  as: 'button' | 'a';
}

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div<ButtonProps>`
  display: inline-block;
  font-weight: ${FONT_WEIGHT_REGULAR};
  font-family: ${FONT_FAMILY_PRIMARY};
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 4px;
  color: ${BUTTON_COLOR_PRIMARY};
  background-color: ${BUTTON_BACKGROUND_COLOR_PRIMARY};
  border-color: ${BUTTON_BORDER_COLOR_PRIMARY};
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  ${({ as }) => as === 'a' && 'text-decoration: none;'}

  &:hover {
    color: ${BUTTON_BACKGROUND_COLOR_PRIMARY};
    background-color: ${BUTTON_BACKGROUND_COLOR_SECONDARY};
    border-color: ${BUTTON_BORDER_COLOR_SECONDARY};
  }
`;
