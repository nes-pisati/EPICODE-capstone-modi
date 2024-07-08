import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Styles from '../all-guides.module.css'
import { Search } from 'react-bootstrap-icons';
import FrontofficeGuideCard from './guide-card';
import axios from 'axios'

export default function GuidesList() {

  const [guides, setGuides] = useState([])

  useEffect(() => {
    const getGuides = async () => {
      try {
        const response = await axios.get('http://localhost:3030/guide')
        setGuides(response.data)
      } catch (error) {
        console.error(error)
      }
    }; getGuides()
  }, [])

  console.log(guides[2]);

  return (
    <Container className='mt-3'>
      <Row className='d-flex align-items-center'>
        <Col xs={11} md={11} lg={6}>
          <select name="museums" id="selectMuseum" className={Styles.input} placeholder="Seleziona un museo">
            <option value="">Seleziona un museo</option>
            <option value="one">one</option>
          </select>
        </Col>
        <Col xs={12} md={12} lg={6} className='d-flex justify-content-center align-items-center'>
          <input type="select" className={Styles.input} placeholder="Cerca" />
          <button className={Styles.btn}><Search color='white' size={24} className='ms-1' /></button>
        </Col>
      </Row>
      <Row className='mt-5 pb-5'>
        {guides.map(guide => (
          <FrontofficeGuideCard
            id={guide._id}
            museum={guide.museum.name}
            image= {guide.coverImg}            
            title={guide.title}
            subtitle={guide.subtitle}
          />
        ))}
      </Row>
    </Container>
  )
}
