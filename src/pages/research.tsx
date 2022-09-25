import React from 'react'
import Heading from '../components/heading'
import Layout from '../components/layout'
import Main from '../components/main'

const ResearchPage = () => {
  return (
    <Layout>
      <Main>
        <Heading>
          Research
        </Heading>
      </Main>
    </Layout>
  )
}

export const Head = () => <title>Research</title>

export default ResearchPage
