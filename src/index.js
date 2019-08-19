import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Bootstrap Styles
import 'bootstrap/dist/css/bootstrap.css';
require('bootstrap');

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js'

// WOW
import 'wow.js/css/libs/animate.css';

// Custom styles
import './assets/css/main.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
