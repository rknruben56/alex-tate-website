import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children?: ReactNode
}

const HeadingContent = styled.h1`
  margin-top: 0;
  margin-bottom: 80px;
  font-weight: bold;
`

const Heading = ({ children }: Props) => {
  return (
    <HeadingContent>
      {children}
    </HeadingContent>
  )
}

export default Heading
