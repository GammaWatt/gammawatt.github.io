/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import 'normalize.css';
import './layout.scss';
import * as Styles from './layout.module.scss';

import Header from './header';
import Sidebar from './sidebar'


const context = React.createContext({
  isSidebarVisible: false 
})

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [sidebarState, setSidebarState] = React.useState(true)

  const toggleSidebar = () => {setSidebarState(!sidebarState)}

  const toggleSidebarIfOff = () => {
    if (!sidebarState) {
      setSidebarState(!sidebarState)
    }
  }

  return (
    <div className={ Styles.layout } >
      <Sidebar
        collapsed={sidebarState}
        toggleOff={toggleSidebar}
      />
      <Header
        siteTitle={data.site.siteMetadata?.title || 'Title'} 
        toggleSidebar={toggleSidebar}
        onClick={toggleSidebarIfOff}
      />
      <div 
        className={ Styles.mainContainer }
        onClick={toggleSidebarIfOff}
      >
        <main
          style={{
            margin: '0',
            maxWidth: 960,
            padding: '3rem 1.45rem 1.0875rem 1.45rem',
          }}
        >{children}</main>
        <footer
          className={ Styles.footer }
          style={{
            paddingTop: '2rem',
            paddingBottom: '3rem'
          }}
        >
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '3rem 1.45rem 1.0875rem 1.45rem',
            }}
          >
            { 
              /*
                 © {new Date().getFullYear()}, Built with
                 {' '}
                 <a href="https://www.gatsbyjs.com">Gatsby</a>
               */
            }
            <p>Links</p>
            <p>Social media</p>
            <hr />
            <p style={{ textAlign: 'center' }}>Sitemap</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
