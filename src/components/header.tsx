import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Brand = styled.h1`
  font-family: "playfair, roboto, sans-serif, serif";
  font-weight: bold;
`;

const LinkText = styled.span`
   font-family: "playfair, roboto, sans-serif, serif";
`;

const Header = () => {
   return (
      <Navbar bg="light" expand="lg">
         <Container>
            <Navbar.Brand as={Link} to="/">
               <Brand>Dr. Alexandra Tate</Brand>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
               <Nav>
                  <Nav.Link as={Link} to="/about" eventKey="about">
                     <LinkText>About</LinkText>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/resume" eventKey="resume">
                     <LinkText>CV & Publications</LinkText>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/research" eventKey="research">
                     <LinkText>Research</LinkText>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/teaching" eventKey="teaching">
                     <LinkText>Teaching</LinkText>
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default Header
