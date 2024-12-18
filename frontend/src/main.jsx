import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import store from './utils/store.js';
import { Provider } from 'react-redux';

import './pages/pagesCss/login.css';
import './pages/pagesCss/signStyle.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import '/node_modules/primeflex/primeflex.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
)