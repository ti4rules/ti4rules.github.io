import '../styles/all.scss';
import 'jquery';
import 'bootstrap';
import 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './Nav';
import About from './pages/About';

ReactDOM.render(
  <div>
    <Nav />
    <About />
  </div>,
  document.getElementById('root')
);