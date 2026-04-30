import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './spotlight.css';
import App from './App.jsx';
import { CardSpotlight } from './components/CardSpotlight.jsx';
import { WrenchCursor } from './components/WrenchCursor.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CardSpotlight />
    <WrenchCursor />
    <App />
  </React.StrictMode>
);
