import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
      <div>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">Studio.O</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Pages</Nav.Link>
                <Nav.Link href="#home">Blog</Nav.Link>
                <Nav.Link href="#link">Event</Nav.Link>
                <Nav.Link href="#link">Shop</Nav.Link>
              </Nav>
              <Nav.Link href="#link">
                <i class="fa-solid fa-magnifying-glass"></i>
              </Nav.Link>
              <Nav.Link href="#link">
                <i class="fa-solid fa-user"></i>
              </Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;