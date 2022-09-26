import React, { ReactNode } from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components'

interface Props {
  children?: ReactNode
}

const MainContent = styled.main`
  color: #232129;
  padding-top: 60px;
  padding-bottom: 150px;
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
