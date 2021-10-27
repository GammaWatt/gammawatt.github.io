import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my site and personal notebook.</p>
    <p>
      This site is currently under heavy construction, so there will be a lot
      random, ugly, and unformatted content, artifacts, and text areas only
      containing test text. These artifacts should only be glaringly obvious
      for a little while longer, as I properly build the site and fill out the
      content.
    </p>
    <p>
      Here, you'll find an archive of my projects, experiments, thoughts, work
      history, and personal notes.
    </p>
    <p>
      This website is meant to serve as my introduction to any curious to know 
      about me and my activities, as well as a personal knowledgebase where I
      can refresh my memory on various topics and common issues I run into.
    </p>
    <p>
      As a note about what to expect regarding my notes: I tend to try to keep
      things as concise and content rich as possible, because I don't like 
      reading through excesses of information to find the one snippet to solve
      my problem. So, I like to try to format things as if they were really 
      short cheatsheets. This means that, in order to make use of the 
      information, it will require prior understanding of, and familiarity with,
      the material covered; unless it is meant to be a tutorial, or I am writing
      about something that is brand new to me. I may succeed at keeping things
      concise, or I may only be fooling myself. Either way, that is my intent
      behind how I try to format my content.
    </p>
    <p>
      You can view my CV <Link to="/cv/cv">Here</Link> and you can view the 
      Spanish version <Link to='/cv/cv_es'>Here</Link>
    </p>
    <p>
      As a personal reminder to myself, it seems that the most important aspect
      of learning (and, likely, teaching) is fixing things that go wrong;
      understanding why they were broken to begin with, and why the fix worked.
      So, it's likely going to be extremely important for me, going forward, to
      write down notes about different kinds of breaks, and even simulate for
      myself how to make a specific kind of break on purpose, so I know what
      went wrong and why, and then apply the corresponding fix. An example of
      this, would be to write a sample app in C and then purposefully cause
      segfaults by several different means, make the corresponding fixes for
      each cause, and take notes about it so I remember this understanding for
      later.
    </p>
    <p>
      A lot of the information, here, has been born out of the various
      requirements listed in job applications; since knowledge of industry tools
      is required in order to get work. I never agreed with many of the
      decisions regading various techstacks, as they almost always seem more
      cumbersome and bloated that they're worth, and tend to show bandwagon
      riding more than they show knowledge about what is available. But, 
      whatever. It is what it is and I don't get to choose what these people ask
      for or what their teams want to use. There's probably some justifying
      benefit I'm oblivious to. Either way, I just have to learn how to use the
      tools effectively.
    </p>
    <p>
      So, a lot of pages in my notes will also cover common interview questions
      and solutions, as well as algorithms, common integration and
      infrastructure challenges, and talking points.
    </p>
    <h2><Link to="notes">Notebook</Link></h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {
        [
          ['/notes/tools', 'Tools'],
          ['/notes/software-design', 'Software Design'],
          ['/notes/hobbies', 'Hobbies'],
          ['/notes/frameworks', 'Frameworks'],
          ['/notes/workflows', 'Workflows'],
          ['/notes/development-methodologies', 'Development Methodologies'],
        ]
        .map( e => (
          <Link
            key={ Math.random() }
            to={e[0]}
            style={{ flex: '1 0 25%', borderRadius: '15px', boxShadow: '2px 2px 2px hsla(0, 0%, 0%, 0.7)'}}
          >
            <div>
              <h3 style={{ textAlign: 'center' }}>{e[1]}</h3>
            </div>
          </Link>
        ) )
      }
    </div>
    <h2><Link to="/blog">Blog</Link></h2>
    <div style={{ display: 'flex', justifyContent: 'space-around'}}>
      {
        data.allMdx.edges.slice(0,3)
        .filter( e => !!e.node.frontmatter.date )
        .map( e => (
          <div key={ e.node.id } style={{ flex: '1', margin: '0.5rem auto', padding: '0.75rem', border: '1px solid black', borderRadius: '15px' }}>
            <h3><Link to={ `/blog/${e.node.frontmatter.slug}` }>{ e.node.frontmatter.title }</Link></h3>
            <p>{ e.node.excerpt }</p>
          </div>
        ) )
      }
    </div>
    <h2><Link to='/projects'>Projects</Link></h2>
    <h2><Link to='/portfolio'>Portfolio</Link></h2>
    { /* 
         <p>
         <Link to="/page-2/">Go to page 2</Link> <br />
         <Link to="/using-typescript/">Go to &#34;Using TypeScript&#34;</Link>
         </p>
       */ }
  </Layout>
);

export default IndexPage;


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
