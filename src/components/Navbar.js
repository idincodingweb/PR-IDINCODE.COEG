import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import '../styles/Navbar.css'; 

const Navbar = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="md" className="mb-4">
      <BootstrapNavbar.Brand href="#home">Portfolio</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav idin-text">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default Navbar;
