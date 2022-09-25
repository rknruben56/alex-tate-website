import React from 'react'
import Heading from '../components/heading'
import Layout from '../components/layout'
import Main from '../components/main'

const ResumePage = () => {
  return (
    <Layout>
      <Main>
        <Heading>
          CV & Publications
        </Heading>
      </Main>
    </Layout>
  )
}

export const Head = () => <title>CV & Publications</title>

export default ResumePage
