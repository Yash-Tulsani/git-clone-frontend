import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import {persistor, store} from './redux/store.js';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <PersistGate persistor={persistor} loading={null}>
      <App />
      </PersistGate>
    </ThemeProvider>
  </Provider>
);

