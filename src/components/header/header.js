/* eslint-disable no-unused-vars */
import React from 'react';
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
          <li><a href='/'>Home</a></li>
          <li><a href='/'>History</a></li>
          <li><a href='/'>Help</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;