import React from 'react'
import Styles from './sidebar.module.css'

export default function Sidebar({isOpen, toggleSidebar}) {
  return (
    <aside className={isOpen? `${Styles.sidebarOpen}` : `${Styles.sidebar}`}>
      <ul className='d-flex flex-column align-content-end'>
        <li><a href='http://localhost:3000/' className={Styles.link}>Homepage</a></li>
        <li><a href='http://localhost:3000/guides' className={Styles.link}>Tutte le guide</a></li>
      </ul>
    </aside>
  )
}
