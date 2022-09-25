import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/layout"
import Main from "../components/main"
import Heading from "../components/heading"
import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = () => {
  return (
    <Layout>
      <Main>
        <Heading>
          Background
        </Heading>
      </Main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
