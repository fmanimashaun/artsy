import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/scss/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/learning-react">
      <App />
    </Router>
  </React.StrictMode>,
);