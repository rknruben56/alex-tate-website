import React from 'react'
import { Container } from 'react-bootstrap'
import Heading from '../components/heading'
import Layout from '../components/layout'
import Main from '../components/main'
import Paragraph from '../components/paragraph'

const ResearchPage = () => {
  return (
    <Layout>
      <Main>
        <Container fluid>
          <h2>Research</h2>
          <Paragraph>
            My research agenda reflects my interdisciplinary training in sociology and health services research. My current work pursues two interrelated lines of inquiry, both focused on how difficult treatment decisions are made in the context of complex illness. The first uses primarily qualitative methods to examine the ways that doctors and patients make decisions in an uncertain clinical environment. The second uses mixed methods to understand the ways that aging and transitions to the end-of-life are impacted by the structure of the U.S. health care system.
          </Paragraph>
          <b>The Interactional Negotiation of Complex Treatment: Physician authority and patient agency in cancer care</b>
          <Paragraph>
            This project addresses an important research gap by investigating the paradigm of shared decision-making (SDM) in cancer care. Existing work has discussed SDM’s applications and studied its implementation through retrospective surveys and interviews. But the in-situ unfolding of how decisions are made across a sample of 90 patients, captured by video and systematically analyzed using conversation analysis and ethnography, is the first of its kind. This micro-analytic approach affords us a novel way to examine how institutional actors and those who seek out their expertise negotiate sensitive and consequential decisions in real time and the roots of decisional conflict. Further, it offers key on-the-ground examples for sources of sluggish healthcare policy implementation.
          </Paragraph>
          <b>The Doctor-Patient Relationship and End-of-Life Care</b>
          <Paragraph>
            A second strand of my work uses large electronic health record (EHR) datasets to examine the factors that impact “good death.” In particular, I explore whether de-fragmented care and a stronger doctor-patient relationship impact death, dying, and end of life care, particularly for vulnerable patient groups. Part of this work also investigates the impact of the COVID-19 pandemic on the documentation of patients’ end of life care wishes.
          </Paragraph>
        </Container>
      </Main>
    </Layout>
  )
}

export const Head = () => <title>Research</title>

export default ResearchPage
