import React from 'react';
import {
  Nav,
  Navbar,
  NavLink,
  NavItem,
  NavbarBrand,
} from 'reactstrap';
import Logo from '../assets/barstool-logo.png';

import '../styles/Header.css';

export default function Header(){
  return(
    <div id="header">
      <Navbar color='faded'>
        <NavbarBrand id="logo" href="/">
          <img src={Logo} id="logo-img" alt="stool-logo"/>Scores
        </NavbarBrand>
        <div id="header-flex-container">
          <Nav>
          </Nav>
        </div>
      </Navbar>
    </div>
    );
}