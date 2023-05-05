import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">React</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto gap-4">
          <Link to="/" className='text-decoration-none text-dark'>Home</Link>
          <Link to="/about" className='text-decoration-none text-dark'>About</Link>
          <Link to="/contact" className='text-decoration-none text-dark'>Contact</Link>
          <Link to="/connexion" className='text-decoration-none text-dark'>Connexion</Link>           
          

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default NavBar
