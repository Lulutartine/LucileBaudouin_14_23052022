import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { theme } from './utils/style/theme';
import { GlobalStyle } from './utils/style/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as StyleComponentThemeProvider } from 'styled-components';

const ThemeProvider = ({ children, theme }) => {
  return (
    <StyleComponentThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </StyleComponentThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
