import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <div className="container">
      <Link to="/" className="navbar-brand Nav__brand">

        <img
          className='Nav__logo'
          src="./images/logo.svg" />
        TI4 Rules
      </Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
          <Link to="/" className='nav-link'>Living Rules</Link>
          <Link to="/faq" className='nav-link'>FAQ &amp; Errata</Link>
          <Link to="/board" className='nav-link'>Board Setup</Link>
          <Link to="/reference" className='nav-link'>Quick Reference</Link>
          <Link to="/about" className='nav-link'>About</Link>
        </ul>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
