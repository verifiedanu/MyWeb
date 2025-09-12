import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PetsProvider } from './context/PetsContext';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PetsProvider>
    <App />
  </PetsProvider>
);
