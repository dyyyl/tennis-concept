import { createGlobalStyle } from 'styled-components';

import normalize from './normalize';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Work+Sans:300|Montserrat:400');

  ${normalize};

body {
    font-family: ${theme.font.secondary};
  }
  h1, h2, h3, p {
    margin: 0;
    font-weight: normal;
  }
  h1, h2 {
    font-family: ${theme.font.primary};
  }
  h1 {
    ${theme.fontSize.xlarge};
  }
  h2 {
    ${theme.fontSize.larger};
  }
  h3 {
    ${theme.fontSize.large};
  }
  p {
    ${theme.fontSize.regular};
    color: ${theme.color.black.light};
  }
  @media (max-width: ${theme.screen.sm}) {
    h1 {
      ${theme.fontSize.larger};
    }
    h2 {
      ${theme.fontSize.large};
    }
    h3 {
      ${theme.fontSize.regular};
    }
    p {
      ${theme.fontSize.small};
    }
  }
  button {
    border: none;
    background: none;
    outline: none;
    padding: 0;
    cursor: pointer;
  }
  a {
    cursor: pointer;
  }
`;

export default GlobalStyle;
