/**
 * Header/Navbar
 */

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../css/header.css';

// Header component
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/paperSora/">PaperSora</Navbar.Brand>
          
          {/* Navbar links */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/paperSora/portfolio">Portfolio</Nav.Link>
              <Nav.Link as={Link} to="/paperSora/meettheartist">Meet the Artists</Nav.Link>
              <Nav.Link as={Link} to="/paperSora/commission">Commissions</Nav.Link>
              <Nav.Link as={Link} to="/paperSora/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;