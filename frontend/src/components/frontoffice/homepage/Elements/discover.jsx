import React from 'react'
import { Container } from 'react-bootstrap'
import coverImage from '../../../../assets/Amedeo_Modigliani_053.jpg'
import Styles from '../homepage.module.css'
import FrontofficeBtn from '../../../reusable/frontoffice button/frontoffice-button'
import { useNavigate } from 'react-router-dom'

export default function Discover() {

  const navigate = useNavigate()

  return (
    <Container className='pb-5'>
      <div className={`${Styles.relative} d-flex flex-column align-items-center justify-content-center`}>
        <img src={coverImage} className={`${Styles.discoverImg} px-3`} />
        <div className={`${Styles.discoverAbsolute} d-flex flex-column align-items-center justify-content-end`}>
          <h2 className={Styles.headlineDiscover}>Esplora le guide</h2>
          <FrontofficeBtn
            text="scopri"
            onClick={() => navigate('/guides')}
          />
        </div>
      </div>
    </Container>
  )
}
