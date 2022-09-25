import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children?: ReactNode
}

const MainContent = styled.main`
  color: #232129;
  padding: 96px;
  font-family: "playfair, roboto, sans-serif, serif";
`;

const Main = ({children}: Props) => {
  return (
    <MainContent>
      {children}
    </MainContent>
  )
}

export default Main
