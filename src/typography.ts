import { css } from 'styled-components';
import robotoRegular from './static/font/roboto-regular.woff2';

export const FONT_FAMILY_PRIMARY = "'Roboto', sans-serif";

// https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#common_weight_name_mapping
export const FONT_WEIGHT_REGULAR = 400;
export const FONT_WEIGHT_DEMI_BOLD = 600;
export const FONT_WEIGHT_BOLD = 700;

export const FONT_FACE = css`
  @font-face {
    font-family: 'Roboto';
    src: url(${robotoRegular}) format('woff2');
    font-weight: 400;
    font-display: optional;
  }
`;
