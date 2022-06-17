import { createGlobalStyle } from 'styled-components';

/**
 * CSS Global styles for the site using styled.components
 */
export const GlobalStyle = createGlobalStyle`
  * {
    font-family: sans-serif !important; 
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #38393b;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  input {
    font-family: sans-serif;
    }
  
    &:focus {
      background-color: ${({ theme }) => theme.colors.light};
      outline: 1px solid ${({ theme }) => theme.colors.light};
      box-shadow: 0px 0px 7px ${({ theme }) => theme.colors.shadow};
    }
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  .css-6hp17o-MuiList-root-MuiMenu-list {
    display: grid;
  }
  `;