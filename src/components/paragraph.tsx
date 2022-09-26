import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children?: ReactNode
}

const ParagrahContent = styled.p`
  font-size: 1.1em;
`

const Paragraph = ({ children }: Props) => {
  return (
    <ParagrahContent>
      {children}
    </ParagrahContent>
  )
}

export default Paragraph
