import '../styles/all.scss';
import 'jquery';
import 'bootstrap';
import 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './Nav';
import Rules from './reference/Rules';

ReactDOM.render(
  <div>
    <Nav />
    <Rules />
  </div>,
  document.getElementById('root')
);