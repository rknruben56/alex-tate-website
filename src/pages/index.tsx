import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/layout"
import Main from "../components/main"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Image, Row } from "react-bootstrap"
import profile from '../images/profile.jpeg'
import Paragraph from "../components/paragraph"
import { Link } from 'gatsby'
import styled from 'styled-components'

const linkStyle = {
  color: 'black'
}

const Headerline = styled.span`
  font-weight: bold;
`

const IndexPage = () => {
  return (
    <Layout>
      <Main>
        <Row>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 8, order: 1 }} className="pt-4 pt-md-0">
            <Paragraph>
              <Headerline>
                I am a sociologist who studies decision-making. My research centers on how social actors with different agendas and relationships work together to make difficult decisions.&nbsp;
              </Headerline>
              I am particularly focused on doctor-patient interactions and relationships, and how these impact decisions about care near the end of life. To do this, I bring together conversation analytic, ethnographic, causal inference, and natural language processing methods to study the complex machinery of how decisions are made and their impact on larger social issues such as health disparities, mortality, and relations with institutions.
            </Paragraph>
            <Paragraph>
              My work has been funded by the National Institute on Aging, the National Center for Advancing Translational Sciences, and the Institute for Translational Medicine.
            </Paragraph>
            <Paragraph>
              I hold a PhD in Sociology from the University of California, Los Angeles. I am currently the Director of Research in the Section of Hospital Medicine and a Lecturer in the Department of Comparative Human Development at the University of Chicago. Prior to this role, I was a Postdoctoral Fellow in the Center for Health and the Social Sciences at the University of Chicago. When I’m not working, I enjoy riding my road bike, spending time at the beach, listening to NPR, and baking.
            </Paragraph>
            <Paragraph>
              Above, you can read my <Link to="/resume" style={linkStyle}>CV and view my publications</Link>, read more about my <Link to="/research" style={linkStyle}>research projects</Link>, and learn about my <Link to="/teaching" style={linkStyle}>teaching</Link>. Please reach out to me for article .pdfs if you are unable to access them on this site. My contact info is found below.
            </Paragraph>
          </Col>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 2 }}>
            <Image rounded fluid src={profile} alt="profile"></Image>
          </Col>
        </Row>
      </Main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
