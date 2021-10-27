import * as React from 'react'

import { graphql, Link } from 'gatsby'

import Layout from '../../components/layout'

const Blog = ({ data }) => {
  return (
    <Layout>
      <h1>Blog</h1>
      <div>
        {
          data.allMdx.edges
          .filter( e => !!e.node.frontmatter.date )
          .map( e => (
            <div key={e.node.id}>
              <h3><Link to={ e.node.frontmatter.slug }>{ e.node.frontmatter.title }</Link></h3>
              <p>{ e.node.excerpt }</p>
            </div>
          ) )
        }
      </div>
    </Layout>
  )
}

export default Blog


export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
