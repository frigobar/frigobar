import styled, { createGlobalStyle } from 'styled-components';

const FontStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
  }

  html, body, button {
    font-family: 'Noto Sans JP', sans-serif;
  }
`;

const Grid = styled.main`
  display: grid;
  grid-template-areas:
    'header header'
    'navigation content'
    'footer footer';
  grid-template-columns: 280px 1fr;
`;

export { FontStyle, Grid };
