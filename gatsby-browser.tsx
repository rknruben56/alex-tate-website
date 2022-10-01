import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './src/components/layout'

export const wrapPageElement = ({element, props}) => {
  return <Layout {...props}>{element}</Layout>
}
