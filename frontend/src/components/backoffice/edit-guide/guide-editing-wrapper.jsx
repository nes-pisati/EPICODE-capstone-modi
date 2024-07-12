import React from 'react'
import logo from '../../../assets/MODI-logo-black.png'
import { Col, Row, Container } from 'react-bootstrap'
import Styles from '../edit-guide/guide-editing.module.css'
import EditGuide from './edit-guide/edit-guide'
import PaintingsList from './edit-painting/components/painting-list'
import {BoxArrowInLeft} from 'react-bootstrap-icons'


export default function GuideEditing() {
  return (
    <>
      <Container className='mt-5'>
        <div className='d-flex justify-content-between align-items-center'>
          <img src={logo} className={Styles.logo} />
          <a href='/dashboard'> <BoxArrowInLeft size={24}/> Go back</a>
        </div>
        <Row className='mt-5'>
          <Col md={12} lg={6}>
            <EditGuide />
          </Col>
          <Col md={12} lg={6} className={Styles.PaintingsList}>
            <PaintingsList />
          </Col>
        </Row>
      </Container>
    </>
  )
}
