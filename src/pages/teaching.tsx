import React from 'react'
import Layout from '../components/layout'
import Main from '../components/main'
import Paragraph from '../components/paragraph'
import { StyledList, StyledListItem } from '../components/styles/listStyle'
import { SEO } from '../components/seo'
import { graphql } from 'gatsby'
import { sortByDateDesc } from '../utils/utils'

const TeachingPage = ({data}) => {
  const courses = data.allContentfulCourse.nodes.sort(sortByDateDesc)

  return (
    <Layout>
      <Main>
        <h2>Teaching</h2>
        <Paragraph>
          My growth as a sociologist has been inexorably linked to my teaching experiences. My teaching is guided by the core principle that studying the social world requires that we let go of taking things for granted and “known” facts and instead question what allows different parts of our social world to make sense to us. I ask students to use their sociological imagination to interrogate their position in the social world, and how their own values and behaviors shape how they perceive social facts. Whether teaching methods, theory, or coursework in a specific area, I believe that incorporating students’ unique backgrounds and experiences into learning facilitates valuable engagement with course material. My commitment to teaching is reflected by both outstanding teaching reviews from the University of Chicago, Temple University, and UCLA, and an award for excellence in teaching from UCLA. My approach emphasizes relevancy, stresses fact-based inquiry, promotes inclusion, and empowers students in their own learning.
        </Paragraph>
        <Paragraph>
          <b>Across my teaching career, I have taught the following courses:</b>
        </Paragraph>
        <h3>University of Chicago</h3>
        <StyledList>
          {courses.map(c => (
            <StyledListItem key={c.id}>
              {c.year}: <i>{c.name}</i>, {c.department}
            </StyledListItem>
          ))}
        </StyledList>
        <h3>Temple University</h3>
        <StyledList>
          <StyledListItem>
            2018: <i>Gender and Activism</i>, Gender, Sexuality and Women’s Studies Program
          </StyledListItem>
          <StyledListItem>
            2017: <i>Introduction to Sociology</i>, Department of Sociology
          </StyledListItem>
        </StyledList>
        <h3>University of California, Los Angeles</h3>
        <StyledList>
          <StyledListItem>
            2016: <i>Death, Suicide and Trauma</i>, Department of Sociology (TA to Stefan Timmermans)
          </StyledListItem>
          <StyledListItem>
            2016: <i>Introduction to Sociology</i>, Department of Sociology (TA to William Roy)
          </StyledListItem>
          <StyledListItem>
            2016: <i>Talk and Social Institutions</i>, Department of Sociology (TA to John Heritage and Steven Clayman)
          </StyledListItem>
          <StyledListItem>
            2014: <i>The Self and Society</i>, Department of Sociology (TA to Jack Katz)
          </StyledListItem>
          <StyledListItem>
            2013: <i>Human Biology and Society</i>, Institute for Society and Genetics (TA to Hannah Landecker)
          </StyledListItem>
        </StyledList>
      </Main>
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Teaching" />
)

export const pageQuery = graphql`
query Courses {
  allContentfulCourse {
    nodes {
      id
      name
      year
      department
      createdAt
    }
  }
}
`

export default TeachingPage
