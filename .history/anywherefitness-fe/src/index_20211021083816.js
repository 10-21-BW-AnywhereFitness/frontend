import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <Router>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Router>,
  document.getElementById('root')
);