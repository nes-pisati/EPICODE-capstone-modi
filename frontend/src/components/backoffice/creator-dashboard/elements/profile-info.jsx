import React from 'react'
import Styles from '../creator-dashboard.module.css'

export default function ProfileInfo() {
  return (
    <div className='d-flex flex-column align-items-center'>
      <img src="https://i.pravatar.cc/80" alt="immagine profilo creator" className={`${Styles.profileImg} mb-3`}/>
      <p className={Styles.creatorInfo}>Nome e cognome</p>
    </div>
  )
}
