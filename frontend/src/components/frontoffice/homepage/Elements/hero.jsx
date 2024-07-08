import React from 'react'
import Styles from '../homepage.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import HeroImg from '../../../../assets/la-nascita-di-venere-di-botticelli-galleria-degli-uffizi.jpg'
import Logo from '../../../../assets/MODI-logo-white.png'
import FrontofficeBtn from '../../../reusable/frontoffice button/frontoffice-button'
import { useNavigate } from 'react-router-dom'

export default function Hero() {

  const navigate = useNavigate()

  return (
    <Container className='pt-4 '>
      <div className={`${Styles.relative} d-flex flex-column align-items-center justify-content-center`}>
        <img src={HeroImg} className={`${Styles.heroImg} px-3`} />
        <div className={`${Styles.absolute} d-flex flex-column align-items-center justify-content-between`}>
          <Row className={Styles.logoContainer}>
            <Col sm={12} className='d-flex justify-content-center'>
              <img src={Logo} className={Styles.logo} />
            </Col>
          </Row>
          <h1 className={Styles.headline}>Lorem ipsum sit amet</h1>
          <FrontofficeBtn
            text="scopri"
            onClick={() => navigate('/guides')}
          />
        </div>
      </div>
    </Container>
  )
}
