import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import 'normalize.css';
import '@/assets/styles/index.less';
import App from './App';
import { Provider } from 'react-redux';
import { store } from '@/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Suspense>
          <App />
        </Suspense>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
