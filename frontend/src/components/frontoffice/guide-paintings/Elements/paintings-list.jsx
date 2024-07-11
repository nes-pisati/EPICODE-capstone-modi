import React from 'react'
import Styles from '../guide-paintings.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function PaintingsList({ paintings }) {

  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/painting/${id}`)
  }
  
  return (
    <Container>
      <Row className='mt-4'>
        <Col xs={12} onClick={() => handleClick(paintings[0]._id)}>
          <div className={Styles.relative}>
            <img src={paintings[0].paintingImg} alt="immagine introduzione" className={Styles.introImg} />
            <div className={`${Styles.absolute}`}>
              <h3>Introduzione</h3>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='mt-3 gap-2 pb-5 d-flex justify-content-center'>
        {paintings.slice(1).map(painting => (
          <Col key={painting._id} xs={5} md={4} lg={3} onClick={() => handleClick(painting._id)} className='p-0'>
            <div>
              <img src={painting.paintingImg} alt="immagine quadro" className={Styles.cardImg}/>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
