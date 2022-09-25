import React, { ReactNode } from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components'

interface Props {
  children?: ReactNode
}

const MainContent = styled.main`
  color: #232129;
  padding-top: 60px;
  font-family: "playfair, roboto, sans-serif, serif";
`;

const Main = ({ children }: Props) => {
  return (
    <Container>
      <MainContent>
        {children}
      </MainContent>
    </Container>
  )
}

export default Main
