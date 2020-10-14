/* eslint-disable no-unused-vars */
import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.scss';
/**
 * @component Header
 */
function Header() {

  return (
    <header>
      <h1>RESTy</h1>
      <nav className='nav'>
        <ul>
          <li> 
            <NavLink data-testid="homelink" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink data-testid="classiclink" to="/history">History</NavLink>
          </li>
          <li>
            <NavLink data-testid="renderlink" to="/help">Help</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;