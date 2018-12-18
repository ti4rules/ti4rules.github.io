import '../styles/all.scss';
import 'jquery';
import 'bootstrap';
import 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './Nav';
import QuickReference from './pages/QuickReference';

ReactDOM.render(
  <div>
    <Nav />
    <QuickReference />
  </div>,
  document.getElementById('root')
);