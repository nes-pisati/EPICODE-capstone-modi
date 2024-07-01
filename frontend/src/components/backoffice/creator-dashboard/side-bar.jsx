import React from 'react'
import Styles from './creator-dashboard.module.css'
import logo from '../../../assets/MODI-logo-black.png'
import ProfileInfo from './elements/profile-info'

export default function SideBar() {
  return (
    <div className={`${Styles.sideBar} col-2 col-md-3 d-flex flex-column align-items-center`}>
      <img src={logo} alt="logo modì nero" className={Styles.logo}/>
      <ProfileInfo />
    </div>
  )
}
