import * as React from 'react';
import '../styles/nav.scss';

export default ({ links, path }) => (
  <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <div className="container">
      <a href="/" className="navbar-brand Nav__brand"><img className='Nav__logo' src='/images/logo.svg' /> TI4 Rules</a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
          <a href="/" className='nav-link'>Living Rules</a>
          <a href="/faq" className='nav-link'>FAQ &amp; Errata</a>
          <a href="/board" className='nav-link'>Board Setup</a>
          <a href="/reference" className='nav-link'>Quick Reference</a>
          <a href="/about" className='nav-link'>About</a>
        </ul>
      </div>
    </div>
  </div>
);