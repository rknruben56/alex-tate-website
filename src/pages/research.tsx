import React from 'react'
import Layout from '../components/layout'
import Main from '../components/main'
import Paragraph from '../components/paragraph'
import { Headerline } from '../components/styles/headerStyle'
import { SEO } from '../components/seo'

const ResearchPage = () => {
  return (
    <Layout>
      <Main>
        <h2>Research</h2>
        <Paragraph>
          My research agenda reflects my interdisciplinary training in sociology and health services research and examines how provider-patient relationships and the culture of medicine shape the management of illness, aging, and dying in the United States. I approach this topic in two ways: 1) qualitatively analyzing doctor-patient interactions in complex clinical environments and 2) quantitatively examining care at the end of life and advance care planning.  My work contributes to fields of population health, sociology, and medical ethics by using sociological theory and methods to offer greater insight into clinical decision-making, serious illness care, and how relationships between patients and providers are built, maintained, or fall into conflict.
        </Paragraph>
        <Headerline>Provider-patient interactions in complex clinical environments</Headerline>
        <Paragraph>
          This research, which analyzes video-recorded provider-patient encounters, examines how institutional structures and medical culture influence doctor-patient communication and treatment negotiations in complex care settings like oncology and geriatrics. This work integrates theoretical frameworks from medical sociology with practical applications for improving patient-provider communication and healthcare delivery, with particular emphasis on enhancing goal-concordant care and reducing treatment disparities. My research in this area reveals critical insights about in-the-moment medical decision-making, documenting how patients and caregivers demonstrate engagement in different ways, how certain provider communication practices can lead to patient resistance or rejection of treatment recommendations, and identifying persistent barriers to effective patient-centered care discussions. Key findings reveal that despite policy changes intended to promote patient-centered care, providers still struggle to have clear and direct conversations about treatment choices, outcomes, and prognoses with patients and caregivers. However, my work points to specific communication strategies that could help overcome these barriers.
        </Paragraph>
        <Headerline>Relationships and end-of-life care</Headerline>
        <Paragraph>
          A second strand of my work quantitatively investigates the ways that relationships (both provider-patient and patient social ties) shape end-of-life care delivery, combining video analysis with advanced training in health equity, aging, informatics, and statistical methods. In one project, I examine how coordinated medical care and stronger social ties influence patients' end-of-life experiences among frequently hospitalized patients with overlapping social needs. Initial findings from this work suggest that de-fragmented care significantly increases the odds of advance care planning documentation among vulnerable patient groups, particularly those on Medicaid. In another project examining the impact of the COVID-19 pandemic on the documentation of end-of-life care preferences, I find that intentional communication of best practices to providers on small teams can significantly reduce racial disparities, underscoring how systematic changes in healthcare delivery can address long-standing inequities while improving outcomes for vulnerable populations.
        </Paragraph>
      </Main>
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Research" />
)

export default ResearchPage
