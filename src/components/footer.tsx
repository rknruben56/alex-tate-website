import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

const FooterContent = styled.footer`
  position: relative;
  margin-top: -100px;
  height: 100px;
  clear:both;
  padding-top:20px;
`

const Footer = () => {
  return (
    <FooterContent className="bg-light text-center text-lg-start">
      <div className="text-center p-3">
        <Row className="justify-content-md-center">
          <Col xs lg={2}>
            <a className="text-dark" href="mailto:atate@uchicago.edu">Email</a>
          </Col>
          <Col xs lg={2}>
            <a className="text-dark" href="https://www.linkedin.com/in/alexandra-tate-phd-79763b18" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </Col>
        </Row>
      </div>
    </FooterContent>
  )
}

export default Footer
