import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/layout"
import Main from "../components/main"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Image, Row } from "react-bootstrap"
import profile from '../images/profile.jpeg'
import Paragraph from "../components/paragraph"

const IndexPage = () => {
  return (
    <Layout>
      <Main>
        <Container fluid>
          <Row>
            <Col xs={{ span: 12, order: 2 }} md={{span: 9, order: 1 }}>
              <Paragraph>
                As a medical sociologist, my research uses mixed methods approaches to examine the role of medicine in health for aging patients in the U.S. My interests lie in the complexities of doctor-patient interaction and the related implications for care of older adults, with a current focus on the relationship between clinicians and patients with complex illnesses. My current research projects investigate end-of-life decision making among high utilizers of health care, public perceptions of death and dying, and the impact of the pandemic on end-of-life decision-making.
              </Paragraph>
              <Paragraph>
                I have presented my work at the American Sociological Association, the National Communication Association, and the International Conference on Conversation Analysis, among others. I also serve as a reviewer for the American Journal of Sociology, Journal of Health & Social Behavior, Social Science and Medicine, Sociology of Health & Illness, and the Journal of Palliative Medicine.
              </Paragraph>
            </Col>
            <Col xs={{ span: 12, order: 1 }} md={{span: 3, order: 2 }}>
              <Image rounded fluid src={profile} alt="profile"></Image>
            </Col>
          </Row>
        </Container>
      </Main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
