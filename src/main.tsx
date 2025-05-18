import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import fonts
import '@fontsource/space-grotesk';
import '@fontsource/inter';
import '@fontsource/fira-code';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
