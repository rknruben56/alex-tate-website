import React from 'react'
import Layout from '../components/layout'

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const AboutPage = () => {
  return (
    <Layout>
      <main>
        <h1 style={headingStyles}>About Me</h1>
      </main>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage