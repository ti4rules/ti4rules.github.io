import '../styles/all.scss';
import 'jquery';
import 'bootstrap';
import 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './Nav';
import BoardSetup from './pages/BoardSetup';

ReactDOM.render(
  <div>
    <Nav />
    <BoardSetup />
  </div>,
  document.getElementById('root')
);