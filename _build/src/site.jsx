import '../styles/all.scss';
import 'jquery';
import 'bootstrap';
import 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './Nav';
import RulesPage from './reference/RulesPage';

ReactDOM.render(
  <div>
    <Nav />
    <RulesPage />
  </div>,
  document.getElementById('root')
);