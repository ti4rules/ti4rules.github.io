import '../styles/all.scss';
import 'jquery';
import 'bootstrap';
import 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './Nav';
import FAQ from './pages/FAQ';

ReactDOM.render(
  <div>
    <Nav />
    <FAQ />
  </div>,
  document.getElementById('root')
);