import React from 'react'
import Styles from './creator-dashboard.module.css'
import logo from '../../../assets/MODI-logo-black.png'
import ProfileInfo from './elements/profile-info'
import CreateButton from './elements/guide-create-button'
import {Col} from 'react-bootstrap'

export default function SideBar() {

  return (
    <Col xs={12} lg={3} className={`${Styles.sideBar} d-flex flex-column align-items-center px-5`}>
      <img src={logo} alt="logo modì nero" className={Styles.logo}/>
      <ProfileInfo />
      <CreateButton />
    </Col>
  )
}
