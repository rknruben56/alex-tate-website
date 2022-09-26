import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Brand = styled.h1`
  font-weight: 600;
`;

const LinkText = styled.span`
   font-weight: 400;
`;


const Header = () => {
   return (
      <Navbar bg="light" expand="lg">
         <Container className='mt-5 px-3 px-md-5'>
            <Navbar.Brand as={Link} to="/">
               <Brand>Alexandra Tate, PhD</Brand>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
               <Nav>
                  <Nav.Link as={Link} to="/resume" eventKey="resume">
                     <LinkText>
                        CV & Publications
                     </LinkText>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/research" eventKey="research">
                     <LinkText>
                        Research
                     </LinkText>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/teaching" eventKey="teaching">
                     <LinkText>
                        Teaching
                     </LinkText>
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default Header
