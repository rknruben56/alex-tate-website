import React, { ReactNode } from 'react'
import Layout from '../components/layout'
import Main from '../components/main'
import cv from '../content/Tate_CV_2023.pdf'
import { Row } from 'react-bootstrap'
import styled from 'styled-components'
import { StyledList, StyledListItem, StyledListLink } from '../components/styles/listStyle'
import { SEO } from '../components/seo'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { Options } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from '@contentful/rich-text-types';

const CVLink = styled.a`
  font-weight: 400;
  font-size: 1.2rem;
`

const options: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node, children: ReactNode) => <span>{children}</span>
  }
}

const ResumePage = ({data}) => {
  const publications = data.allContentfulPublication.nodes

  return (
    <Layout>
      <Main>
        <Row className="text-center mb-4">
          <CVLink href={cv} target="_blank" rel="noopener noreferrer">CV in .pdf format</CVLink>
        </Row>
        <h3>Education and training</h3>
        <StyledList>
          <StyledListItem>
            Postdoctoral Fellowship, University of Chicago, 2018-2020
          </StyledListItem>
          <StyledListItem>
            PhD, Sociology, University of California, Los Angeles, 2018
          </StyledListItem>
          <StyledListItem>
            MA, Sociology, University of California, Los Angeles, 2014
          </StyledListItem>
        </StyledList>
        <h3>Publications</h3>
        <StyledList>
          {publications.map(p => (
            <StyledListItem key={p.id}>
            {p.authors} ({p.year}) <StyledListLink href={p.link} target="_blank" rel="noopener noreferrer">"{p.title}"</StyledListLink> {renderRichText(p.publication, options)}
            </StyledListItem>
          ))}
        </StyledList>
        <h3>Manuscripts under review</h3>
        <StyledList>
          <StyledListItem>Molitch-Hou, E., Zhang, H. Gala, P. and Tate A. (Under review). “Impact of the COVID-19 public health crisis and a structured COVID Unit on physician behaviors in code status ordering."</StyledListItem>
        </StyledList>
        <h3>Manuscripts in preparation</h3>
        <StyledList>
          <StyledListItem>Tate, A. and T. Stivers. “Collusion in the clinic: How doctors and patients construct an imperative to treat.”</StyledListItem>
          <StyledListItem>Tate, A. “Using Clinical (Un)Certainty in Complex Decisions about Cancer Care.”</StyledListItem>
        </StyledList>
      </Main>
    </Layout>
  )
}

export const Head = () => (
  <SEO title="CV & Publications" />
)

export default ResumePage

export const pageQuery = graphql`
query Publications {
  allContentfulPublication {
    nodes {
      id
      authors
      year
      title
      link
      publication {
        raw
      }
    }
  }
}
`
