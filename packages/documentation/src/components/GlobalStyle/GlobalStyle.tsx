import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;  
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    overflow-x: hidden;
    
    height: 100%;
    margin: 0;
    padding: 0;

  }

  html, body, button {
    font-family: 'Noto Sans JP', sans-serif;
  }

  html {
    @media (max-width: 768px) {
      font-size: 80%;
    }
  }

  pre {
    overflow: auto;

    padding: 8px;
  }

  pre, textarea, code {
    font-family: 'Fira Code', monospace !important;
  }
`;

export default GlobalStyle;
