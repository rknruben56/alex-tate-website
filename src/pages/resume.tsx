import React from 'react'
import Layout from '../components/layout'
import Main from '../components/main'
import cv from '../content/Tate_CV_2023.pdf'
import { Row } from 'react-bootstrap'
import styled from 'styled-components'
import { StyledList, StyledListItem, StyledListLink } from '../components/styles/listStyle'
import { SEO } from '../components/seo'

const CVLink = styled.a`
  font-weight: 400;
  font-size: 1.2rem;
`

const ResumePage = () => {
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
          <StyledListItem>
            Stivers, S. and Tate, A. (In press) <StyledListLink href="https://www.annualreviews.org/doi/pdf/10.1146/annurev-linguistics-030521-054400" target="_blank" rel="noopener noreferrer">“The Role of Healthcare Communication in Treatment Outcomes”</StyledListLink> <i>Annual Review of Linguistics.</i>
          </StyledListItem>
          <StyledListItem>
            Tate, A. (2022) <StyledListLink href="https://www.sciencedirect.com/science/article/abs/pii/S027795362200435X" target="_blank" rel="noopener noreferrer">"Death and the Treatment Imperative: Decision-making in late-stage cancer."</StyledListLink> <i>Social Science and Medicine. 306.</i> 115129.
          </StyledListItem>
          <StyledListItem>
            Lazaridis, C., Goldenberg, F., Mansour, A., Kramer, C. and Tate, A. (2021). <StyledListLink href="https://www.sciencedirect.com/science/article/abs/pii/S187887502101696X" target="_blank" rel="noopener noreferrer">“What Does Coma Mean? Implications for Shared Decision Making in Acute Brain Injury.”</StyledListLink> <i>World Neurosurgery. 158:</i> e377-e385.
          </StyledListItem>
          <StyledListItem>
            Tate, A. <StyledListLink href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7034306/" target="_blank" rel="noopener noreferrer">“Invoking Death: How oncologists discuss a deadly outcome."</StyledListLink> (2020). <i>Social Science and Medicine. 246.</i> 112672.
          </StyledListItem>
          <StyledListItem>
            Tate, A. & B.J. Rimel. (2020). <StyledListLink href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7034307/" target="_blank" rel="noopener noreferrer">“The Duality of Option-Listing in Cancer Care.”</StyledListLink> <i>Patient Education and Counseling. 103</i>(1) 71-76.
          </StyledListItem>
          <StyledListItem>
            Tate, A. (2020). <StyledListLink href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6776711/" target="_blank" rel="noopener noreferrer">“Matter Over Mind: How mental health symptom presentations shape diagnostic outcomes.”</StyledListLink> <i>Health. 24</i>(6), 755-772
          </StyledListItem>
          <StyledListItem>
            Tate, A. (2019). <StyledListLink href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6401327/" target="_blank" rel="noopener noreferrer">“Treatment Recommendations in Oncology Visits: Implications for patient agency and physician authority.”</StyledListLink> <i>Health Communication. 34</i>(13): 1597–1607.
          </StyledListItem>
          <StyledListItem>
            Snyder, K.A, A. Tate & E. Roubenoff. (2018). <StyledListLink href="https://www.academia.edu/38286221/Younger_Women_with_Breast_Cancer_and_Treatment_Decision_Making_Rethinking_Patient_Involvement_and_Empowerment" target="_blank" rel="noopener noreferrer">“Young Women with Breast Cancer and Treatment Decision-Making: Rethinking patient involvement and empowerment.”</StyledListLink> In Jennie Jacobs Kronenfeld (ed.) <i>Gender, Women’s Health Care Concerns and Other Social Factors in Health and Health Care: Research in the Sociology of Health Care, Vol. 36.</i> Bingley, UK: Emerald Publishing Limited, pp.37 – 58.
          </StyledListItem>
          <StyledListItem>
            Robinson, J.D., A. Tate & J. Heritage. (2016). <StyledListLink href="https://www.sciencedirect.com/science/article/abs/pii/S0738399115301634" target="_blank" rel="noopener noreferrer">“Agenda-Setting Revisited: When and how do primary care physicians solicit patients’ additional concerns?”</StyledListLink> <i>Patient Education and Counseling. 99</i>(5): 718-723
          </StyledListItem>
          <StyledListItem>
            Snyder, K.A. & A. Tate (2014). <StyledListLink href="https://www.academia.edu/34570182/Cancer_Related_Infertility_and_Young_Women_Strategies_for_discussing_fertility_preservation" target="_blank" rel="noopener noreferrer">“Cancer-Related Infertility and Young Women: Strategies for discussing fertility preservation,”</StyledListLink> in <i>Oncofertility Communication: Sharing information and Building Relationships Across Disciplines,</i> ed. Theresa Woodruff et al. New York: Springer Press. 49-60.
          </StyledListItem>
          <StyledListItem>
            Snyder, K.A. & A. Tate. (2013). <StyledListLink href="https://www.academia.edu/2080511/_What_to_Do_Now_How_Women_with_Breast_Cancer_Make_Fertility_Preservation_Decisions_" target="_blank" rel="noopener noreferrer">“What To Do Now? How Women with Breast Cancer Make Fertility Preservation Decisions.”</StyledListLink> <i>Journal of Family Planning and Reproductive Health Care. 39</i>(1): 172-178.
          </StyledListItem>
        </StyledList>
        <h3>Manuscripts under review</h3>
        <StyledList>
          <StyledListItem>Tate, A. and K.L. Spencer. (Revise and resubmit). “Negotiations Gone Awry: The importance of interaction in a high-stakes treatment negotiation with an engaged patient.”</StyledListItem>
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
