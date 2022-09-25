import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children?: ReactNode
}

const HeadingContent = styled.h1`
  margin-top: 0;
  margin-bottom: 64px;
  font-family: "playfair, roboto, sans-serif, serif";
  font-weight: bold;
`

const Heading = ({children}: Props) => {
  return (
    <HeadingContent>
      {children}
    </HeadingContent>
  )
}

export default Heading
