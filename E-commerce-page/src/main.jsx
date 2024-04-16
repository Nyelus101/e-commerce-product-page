import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { FigureProvider } from './FigureContext'; // Import FigureProvider


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FigureProvider>
      <App />
    </FigureProvider>
  </React.StrictMode>,
)
