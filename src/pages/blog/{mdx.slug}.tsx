import * as React from 'react'

import { graphql } from 'gatsby'
import { MDXRenderer  } from 'gatsby-plugin-mdx'

import Layout from '../../components/layout'


export default ({ data }) => {
  return (
    <Layout>
      <p style={{ opacity: '0.7' }}>Author: { data.mdx.frontmatter.author }</p>
      <p style={{ opacity: '0.7' }}>Date: { data.mdx.frontmatter.date }</p>
      <h1>{ data.mdx.frontmatter.title }</h1>
      <p style={{ opacity: '0.7' }}>Time to read: { data.mdx.timeToRead } minutes</p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MDXQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
      }
    }
  }
`
