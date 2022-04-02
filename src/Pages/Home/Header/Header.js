import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const styleLink={
  color:'#888',
  fontSize:'18px',
  marginRight:'10px',
  textDecoration:'none'
}
const Header = () => {
    return (
      <div>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">Studio.O</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Link style={styleLink} to="/home">
                  Home
                </Link>
                <Link style={styleLink} to="/shop">
                  Pages
                </Link>
                <Link style={styleLink} to="/cources">
                  Cources
                </Link>
                <Link style={styleLink} to="/blog">
                  Blog
                </Link>
                <Link style={styleLink} to="/event">
                  Event
                </Link>
                <Link style={styleLink} to="/shop">
                  Shop
                </Link>
                <Link style={styleLink} to="/login">
                  <button className="primary-btn"> Login </button>
                </Link>
              </Nav>

              <Nav.Link href="#link"></Nav.Link>
              <Link></Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;