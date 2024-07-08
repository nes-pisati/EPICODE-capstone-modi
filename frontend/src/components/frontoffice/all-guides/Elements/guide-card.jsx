import React from 'react'
import { Col } from 'react-bootstrap'
import Styles from '../all-guides.module.css'
import FrontofficeBtnWidth from '../../../reusable/frontoffice button w-100/frontoffice-button'
import { GeoAlt, Google } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'

export default function FrontofficeGuideCard({id, museum, image, title, subtitle}) {

  const navigate = useNavigate()

  const viewDetails = () => {
    navigate(`/guide-page/${id}`)
  }

  return (
    <Col xs={6} md={3} className='mb-4'>
      <div className={`${Styles.relative} mb-3`}>
        <img src={image} alt="immagine copertina guida" className={Styles.cardImage} />
        <div className={`${Styles.absoluteCard} d-flex flex-column align-items-center justify-content-between gap-2`}>
          <div className={`${Styles.top} d-flex align-items-center gap-2`}>
            <GeoAlt />
            <p className='m-0'>{museum}</p>
          </div>
          <div className={`${Styles.center} d-flex flex-column align-items-center`}>
            <h4 className={Styles.cardTitle}>{title}</h4>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
      <FrontofficeBtnWidth text={"scopri"} onClick={viewDetails}/>
    </Col>
  )
}
