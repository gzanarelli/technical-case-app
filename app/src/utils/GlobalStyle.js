import { createGlobalStyle } from 'styled-components';
import colors from './vars';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.bg};
    color: ${colors.grey};
    font-family: 'Nunito', sans-serif;
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 1.2;
  }
`;

export default GlobalStyle;
