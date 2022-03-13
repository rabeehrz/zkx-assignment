import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StorageProvider } from './utils/StorageContext';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StorageProvider>
        <App />
      </StorageProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
