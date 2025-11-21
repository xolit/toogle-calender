import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextWrapper from './Context/ContextWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  // </React.StrictMode>
);
reportWebVitals();
