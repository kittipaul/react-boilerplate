/**
 *
 * Header
 *
 */

import React from 'react';
import HeaderLink from './HeaderLink';
import NavBar from './NavBar';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <NavBar>
        <HeaderLink href to="/">
          Home
        </HeaderLink>
        <HeaderLink href to="/goals">
          Goal list
        </HeaderLink>
      </NavBar>
    );
  }
}

export default Header;
