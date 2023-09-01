import React from 'react';
import { createRoot } from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');
const rootElement = (
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

const rootRender = createRoot(root); 
rootRender.render(rootElement);
