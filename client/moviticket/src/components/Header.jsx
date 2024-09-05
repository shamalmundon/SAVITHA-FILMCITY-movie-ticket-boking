import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/header.css'


function Header() {
  return (
    <Navbar style={{fontWeight:'bold'}} bg="dark" expand="lg">
      <Container>

        <Navbar.Brand href="#home">
        <div style={{ lineHeight: '1' }}>
          <span style={{ marginLeft: '10px', fontWeight: 'bold',color: '#f8f9fa' }} >SAVITHA <br />
          <span style={{ marginLeft: '10px',fontSize:10,letterSpacing:4,  marginRight: '15rem',color: '#f8f9fa' }}>FILM CITY</span></span>
        </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" style={{ marginRight: '2rem' }}  className="text-light">HOME</Nav.Link>
            <Nav.Link as={Link} to="/Movies" href='#running' style={{ marginRight: '2rem' }}  className="text-light">MOVIES</Nav.Link>
            <Nav.Link as={Link} to="/Ucoming-movies" style={{ marginRight: '2rem' }}  className="text-light">UPCOMING MOVIES</Nav.Link>
            <Nav.Link as={Link} to="/Contact" style={{ marginRight: '20rem' }}  className="text-light">CONTACT</Nav.Link>
            <Nav.Link as={Link} to="/Profile"  className="text-light" ><i class="fas fa-newspaper"></i> NEWS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
