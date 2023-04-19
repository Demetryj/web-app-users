import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
// import { store } from './redux/store';
import { theme, GlobalStyles } from './styles';
import { App } from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
    {/* </Provider> */}
  </React.StrictMode>
);
