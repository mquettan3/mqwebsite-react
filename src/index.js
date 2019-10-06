import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Bootstrap Styles
import 'bootstrap/dist/css/bootstrap.css';
require('bootstrap');

// Custom styles
import './assets/css/main.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
