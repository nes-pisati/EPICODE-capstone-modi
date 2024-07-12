import React from 'react'
import Styles from '../creator-dashboard.module.css'
import { jwtDecode } from 'jwt-decode'


export default function ProfileInfo() {

  const token = localStorage.getItem('creatorLogin')
  const decoded = jwtDecode(token)

  return (
    <div className='d-flex flex-column align-items-center'>
      <img src={decoded.avatar} alt="immagine profilo creator" className={`${Styles.profileImg} mb-3`}/>
      <p className={Styles.creatorInfo}>{decoded.firstName} {decoded.lastName}</p>
      <p className={Styles.creatorInfo}>{decoded.email}</p>
    </div>
  )
}
