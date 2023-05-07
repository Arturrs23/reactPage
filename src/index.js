import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';



ReactDOM.createRoot(document.getElementById('root') ).render(

  <React.StrictMode>
    <Home />
  </React.StrictMode>

);

reportWebVitals();
