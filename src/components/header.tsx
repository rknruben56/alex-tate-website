import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'gatsby'

const Header = () => {
   return (
      <Navbar bg="light" expand="lg">
         <Container>
            <Navbar.Brand as={Link} to="/"><h1>Dr. Alexandra Tate</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
               <Nav>
                  <Nav.Link as={Link} to="/about" eventKey="about">About</Nav.Link>
                  <Nav.Link as={Link} to="/resume" eventKey="resume">CV & Publications</Nav.Link>
                  <Nav.Link as={Link} to="/research" eventKey="research">Research</Nav.Link>
                  <Nav.Link as={Link} to="/teaching" eventKey="teaching">Teaching</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default Header
