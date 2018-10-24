/**
 * App navbar
 */
import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

import './HeaderNav.css';

export default class HeaderNav extends Component {
  render() {
    return (
      <Navbar fluid={true} inverse={true} collapseOnSelect={true} className="header-nav-container">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Find Free Parking ATX</a>
          </Navbar.Brand>
        </Navbar.Header>

        {/* TODO: auto populate hamburger? */}
        {/* https://react-bootstrap.github.io/components/navbar/ */}
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem>Logout</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
