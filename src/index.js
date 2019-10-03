import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Bootstrap Styles
import 'bootstrap/dist/css/bootstrap.css';
require('bootstrap');

// WOW
import 'wow.js/css/libs/animate.css';

// Custom styles
import './assets/css/main.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
