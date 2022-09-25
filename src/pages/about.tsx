import React from 'react'
import Heading from '../components/heading'
import Layout from '../components/layout'
import Main from '../components/main'

const AboutPage = () => {
  return (
    <Layout>
      <Main>
        <Heading>About Me</Heading>
      </Main>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage
