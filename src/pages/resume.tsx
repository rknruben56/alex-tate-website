import React, { ReactNode } from 'react'
import Layout from '../components/layout'
import Main from '../components/main'
import cv from '../content/Tate_CV_2024.pdf'
import { Row } from 'react-bootstrap'
import styled from 'styled-components'
import { StyledList, StyledListItem, StyledListLink } from '../components/styles/listStyle'
import { SEO } from '../components/seo'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { Options } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from '@contentful/rich-text-types';
import { sortByDateDesc } from '../utils/utils'
import { Manuscript, Publication } from '../models/Manuscript'

const CVLink = styled.a`
  font-weight: 400;
  font-size: 1.2rem;
`

const options: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node, children: ReactNode) => <span>{children}</span>
  }
}

const ResumePage = ({ data }) => {
  const publications: Publication[] = data.allContentfulPublication.nodes.sort(sortByDateDesc)
  const sortedManuscripts: Manuscript[] = data.allContentfulManuscript.nodes.sort(sortByDateDesc)
  var manuscripts: Manuscript[] = []
  var manuscriptsUnderReview: Manuscript[] = []
  sortedManuscripts.forEach(m => {
    if (m.underReview) {
      manuscriptsUnderReview.push(m)
    } else {
      manuscripts.push(m)
    }
  })

  return (
    <Layout>
      <Main>
        <Row className="text-center mb-4">
          <CVLink href={cv} target="_blank" rel="noopener noreferrer">CV in .pdf format</CVLink>
        </Row>
        <h3>Education and training</h3>
        <StyledList>
          <StyledListItem>
            Postdoctoral Fellowship, University of Chicago, (2018-2020)
          </StyledListItem>
          <StyledListItem>
            PhD, Sociology, University of California, Los Angeles, (2018)
          </StyledListItem>
          <StyledListItem>
            MA, Sociology, University of California, Los Angeles
          </StyledListItem>
          <StyledListItem>
            MS, Public Health Sciences, University of Chicago
          </StyledListItem>
          <StyledListItem>
            BA, Sociology, Northwestern University
          </StyledListItem>
        </StyledList>
        <h3>Publications</h3>
        <StyledList>
          {publications.map(p => (
            <StyledListItem key={p.id}>
              {p.authors} {p.year && <>({p.year})</>} <StyledListLink href={p.link} target="_blank" rel="noopener noreferrer">"{p.title}"</StyledListLink> {renderRichText(p.publication, options)}
            </StyledListItem>
          ))}
        </StyledList>
        {
          manuscriptsUnderReview.length > 0 &&
          <div>
            <h3>Manuscripts under review</h3>
            <StyledList>
              {manuscriptsUnderReview.map(m => (
                <StyledListItem key={m.id}>
                  {m.title}
                </StyledListItem>
              ))}
            </StyledList>
          </div>
        }
        {
          manuscripts.length > 0 &&
          <div>
            <h3>Manuscripts in preparation</h3>
            <StyledList>
              {manuscripts.map(m => (
                <StyledListItem key={m.id}>
                  {m.title}
                </StyledListItem>
              ))}
            </StyledList>
          </div>
        }
      </Main>
    </Layout>
  )
}

export const Head = () => (
  <SEO title="CV & Publications" />
)

export default ResumePage

export const pageQuery = graphql`
query ResumeContent {
  allContentfulPublication {
    nodes {
      id
      authors
      year
      title
      link
      createdAt
      publication {
        raw
      }
    }
  },
  allContentfulManuscript {
    nodes {
      id
      title
      underReview
      createdAt
    }
  }
}
`
