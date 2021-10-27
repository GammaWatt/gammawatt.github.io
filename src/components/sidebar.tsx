import * as React from 'react'

import * as navbarStyles from './header.module.scss'

import Close from './svg/Close';

interface SidebarProps {
  toggleOff: () => {}
  children: React.ReactNode[]
}

const Sidebar = (props: SidebarProps) => {
  return (
    <div
      style={{
        position: 'fixed',
        height: '100%',
        width: props.collapsed ? '0' : '80%',
        backgroundColor: 'hsla(35, 15%, 15%, 0.4)',
        overflow: 'hidden',
        transition: 'width .2s',
        zIndex: 20
      }}
    >
      <div className={navbarStyles.navbar}>
        <div 
          className={navbarStyles.menu}
          onClick={props.toggleOff}
        >
          <Close />
        </div>
      </div>
      hi
      dude
    </div>
  )
}

export default Sidebar
