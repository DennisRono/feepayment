import React, { Fragment } from 'react'
import '../styles/css/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Fragment>
        <header className="header">
          <div className="header-container">
            <div className="header-brand">
              <div className="twitter-logo">
              <Link to="/"></Link>
              </div>
              <div className="brand-texts">
                <Link to="/"><h3>Fee Payment System</h3></Link>
              </div>
            </div>
            <div className="navigation">
              <nav className="nav">
                <ul className="nav-list">
                  <li className="nav-link">
                    <Link className="nav-red" to="/about">About</Link>
                  </li>
                  <li className="nav-link">
                    <Link className="nav-red" to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
    </Fragment>
  )
}

export default Header