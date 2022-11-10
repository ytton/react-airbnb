import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import 'normalize.css';
import 'antd/dist/antd.less';
import '@/assets/styles/index.less';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import App from './App';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from '@/store';
import theme from '@/assets/theme';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <HashRouter>
        <Suspense>
          <App />
        </Suspense>
      </HashRouter>
    </Provider>
  </ThemeProvider>
  // </React.StrictMode>
);
