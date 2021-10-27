import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import * as Styles from './header.module.scss'

import Menu from './svg/Menu';
import Search from './svg/Search';
import Home from './svg/Home';
import Globe from './svg/Globe';

interface HeaderProps {
  siteTitle: string
  toggleSidebar: () => {}
  onClick?: any
}

const Header = (props: HeaderProps) => {
  const {
    siteTitle,
    toggleSidebar,
    onClick
  } = props

  return (
    <header 
      className={ Styles.header }
      onClick={ onClick }
    >
      <div>
        <div>
          <nav className={Styles.navbarMain}>
            <div className={Styles.menu} onClick={toggleSidebar}>
              <Menu />
            </div>
            <div className={Styles.logoLink}>
              <Link
                to="/"
              >
                {siteTitle}
              </Link>
            </div>
            <div className={Styles.navLinks}>
              <a>
                <div>
                  <Search />
                </div>
              </a>
              <Link to='/'>
                <div>
                  <Home />
                </div>
              </Link>
              <a>
                <div>
                  <Globe />
                </div>
              </a>
              <Link to='/blog'>
                <div>
                  Blog
                </div>
              </Link>
              <Link to='#contact'>
                <div>
                  Contact
                </div>
              </Link>
              <Link to='/about'>
                <div>
                  About
                </div>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
