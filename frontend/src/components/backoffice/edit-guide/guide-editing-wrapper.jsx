import React from 'react'
import logo from '../../../assets/MODI-logo-black.png'
import { Col, Row, Container } from 'react-bootstrap'
import Styles from '../edit-guide/guide-editing.module.css'
import EditGuide from './edit-guide/edit-guide'
import PaintingsList from './edit-painting/components/painting-list'


export default function GuideEditing() {
  return (
    <>
      <Container className='mt-5'>
        <div className='d-flex justify-content-between align-items-center'>
          <img src={logo} className={Styles.logo} />
          <a href='/dashboard'>Go back</a>
        </div>
        <Row className='mt-5'>
          <Col>
            <EditGuide />
          </Col>
          <Col>
            <PaintingsList />
          </Col>
        </Row>
      </Container>
    </>
  )
}
