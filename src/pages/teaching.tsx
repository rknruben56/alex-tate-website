import React from 'react'
import Heading from '../components/heading'
import Layout from '../components/layout'
import Main from '../components/main'

const TeachingPage = () => {
  return (
    <Layout>
      <Main>
        <Heading>
          Teaching
        </Heading>
      </Main>
    </Layout>
  )
}

export const Head = () => <title>Teaching</title>

export default TeachingPage
