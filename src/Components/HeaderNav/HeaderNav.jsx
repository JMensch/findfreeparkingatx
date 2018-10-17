/**
 * App navbar
 */
import React, { Component } from 'react';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

export default class HeaderNav extends Component {
  render() {
    return (
      <Navbar fluid={true} className="header-nav-container">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img src="" />
            </Link>
          </Navbar.Brand>
        </Navbar.Header>

        <Nav className="secondary-nav" pullRight={true}>
          <LinkContainer to="/logout">
            <MenuItem>Log Out</MenuItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}
