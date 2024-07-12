import React from 'react'
import CreatorWelcome from '../../components/backoffice/creator-register/creator-welcome'
import CreatorFormWrapper from '../../components/backoffice/creator-register/creator-form-wrapper'
import { Container, Row, Col } from 'react-bootstrap'

export default function CreatorLogin() {

  return (
    <Container>
      <Row>
        <Col xs={12} lg={6}>
          <CreatorWelcome />
        </Col>
        <Col xs={12} lg={6} className='d-flex flex-column align-items-center justify-content-center'>
          <CreatorFormWrapper />
        </Col>
      </Row>
    </Container>

  )
}
