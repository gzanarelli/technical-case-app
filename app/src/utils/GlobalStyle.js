import { createGlobalStyle } from 'styled-components';
import colors from './vars';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.bg};
    color: ${colors.grey};
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.2;
  }
`;

export default GlobalStyle;
