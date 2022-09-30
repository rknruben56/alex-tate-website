import React from 'react'
import Layout from '../components/layout'
import Main from '../components/main'
import cv from '../content/Tate_CV_2022.pdf'
import { Row } from 'react-bootstrap'
import styled from 'styled-components'
import { List, ListItem, ListLink } from '../components/styles/listStyle'

const CVLink = styled.a`
  font-weight: 400;
  font-size: 1.2rem;
`

const ArticleTitle = styled.b`
  font-weight: 600;
`

const ResumePage = () => {
  return (
    <Layout>
      <Main>
        <Row className="text-center mb-4">
          <CVLink href={cv} target="_blank" rel="noopener noreferrer">CV in .pdf format</CVLink>
        </Row>
        <h3>Education and training</h3>
        <List>
          <ListItem>
            Postdoctoral Fellowship, University of Chicago, 2018-2020
          </ListItem>
          <ListItem>
            PhD, Sociology, University of California, Los Angeles, 2018
          </ListItem>
          <ListItem>
            MA, Sociology, University of California, Los Angeles, 2014
          </ListItem>
        </List>
        <h3>Publications</h3>
        <List>
          <ListItem>
            Stivers, S. and Tate, A. (In press) <ArticleTitle>“The Role of Healthcare Communication in Treatment Outcomes”</ArticleTitle><i>Annual Review of Linguistics.</i>
          </ListItem>
          <ListItem>
            Tate, A. (2022) <ListLink href="https://www.sciencedirect.com/science/article/abs/pii/S027795362200435X" target="_blank" rel="noopener noreferrer">"Death and the Treatment Imperative: Decision-making in late-stage cancer."</ListLink> <i>Social Science and Medicine. 306.</i> 115129.
          </ListItem>
          <ListItem>
            Lazaridis, C., Goldenberg, F., Mansour, A., Kramer, C. and Tate, A. (2021). <ListLink href="https://www.sciencedirect.com/science/article/abs/pii/S187887502101696X" target="_blank" rel="noopener noreferrer">“What Does Coma Mean? Implications for Shared Decision Making in Acute Brain Injury.”</ListLink> <i>World Neurosurgery. 158:</i> e377-e385.
          </ListItem>
          <ListItem>
            Tate, A. <ListLink href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7034306/" target="_blank" rel="noopener noreferrer">“Invoking Death: How oncologists discuss a deadly outcome."</ListLink> (2020). <i>Social Science and Medicine. 246.</i> 112672.
          </ListItem>
          <ListItem>
            Tate, A. & B.J. Rimel. (2020). <ListLink href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7034307/" target="_blank" rel="noopener noreferrer">“The Duality of Option-Listing in Cancer Care.”</ListLink> <i>Patient Education and Counseling. 103</i>(1) 71-76.
          </ListItem>
          <ListItem>
            Tate, A. (2020). <ListLink href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6776711/" target="_blank" rel="noopener noreferrer">“Matter Over Mind: How mental health symptom presentations shape diagnostic outcomes.”</ListLink> <i>Health. 24</i>(6), 755-772
          </ListItem>
          <ListItem>
            Tate, A. (2019). <ListLink href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6401327/" target="_blank" rel="noopener noreferrer">“Treatment Recommendations in Oncology Visits: Implications for patient agency and physician authority.”</ListLink> <i>Health Communication. 34</i>(13): 1597–1607.
          </ListItem>
          <ListItem>
            Snyder, K.A, A. Tate & E. Roubenoff. (2018). <ListLink href="https://www.academia.edu/38286221/Younger_Women_with_Breast_Cancer_and_Treatment_Decision_Making_Rethinking_Patient_Involvement_and_Empowerment" target="_blank" rel="noopener noreferrer">“Young Women with Breast Cancer and Treatment Decision-Making: Rethinking patient involvement and empowerment.”</ListLink> In Jennie Jacobs Kronenfeld (ed.) <i>Gender, Women’s Health Care Concerns and Other Social Factors in Health and Health Care: Research in the Sociology of Health Care, Vol. 36.</i> Bingley, UK: Emerald Publishing Limited, pp.37 – 58.
          </ListItem>
          <ListItem>
            Robinson, J.D., A. Tate & J. Heritage. (2016). <ListLink href="https://www.sciencedirect.com/science/article/abs/pii/S0738399115301634" target="_blank" rel="noopener noreferrer">“Agenda-Setting Revisited: When and how do primary care physicians solicit patients’ additional concerns?”</ListLink> <i>Patient Education and Counseling. 99</i>(5): 718-723
          </ListItem>
          <ListItem>
            Snyder, K.A. & A. Tate (2014). <ListLink href="https://www.academia.edu/34570182/Cancer_Related_Infertility_and_Young_Women_Strategies_for_discussing_fertility_preservation" target="_blank" rel="noopener noreferrer">“Cancer-Related Infertility and Young Women: Strategies for discussing fertility preservation,”</ListLink> in <i>Oncofertility Communication: Sharing information and Building Relationships Across Disciplines,</i> ed. Theresa Woodruff et al. New York: Springer Press. 49-60.
          </ListItem>
          <ListItem>
            Snyder, K.A. & A. Tate. (2013). <ListLink href="https://www.academia.edu/2080511/_What_to_Do_Now_How_Women_with_Breast_Cancer_Make_Fertility_Preservation_Decisions_" target="_blank" rel="noopener noreferrer">“What To Do Now? How Women with Breast Cancer Make Fertility Preservation Decisions.”</ListLink> <i>Journal of Family Planning and Reproductive Health Care. 39</i>(1): 172-178.
          </ListItem>
        </List>
      </Main>
    </Layout>
  )
}

export const Head = () => <title>CV & Publications</title>

export default ResumePage
