import React, { useState } from 'react'
import Styles from '../../guide-editing.module.css'
import { Form, Row, Col } from 'react-bootstrap'
import BackofficeInput from '../../../../reusable/backoffice input/backoffice-input'

export default function SinglePaintEditForm() {

  return (
    <div className={Styles.wrapper}>
      <Form>
        <Row>
          <Col sm={12}>
            <BackofficeInput
              labelText={"Titolo"}
              name={"description"}
              type={"text"}
              placeholder={"modifica"}
            />
            <BackofficeInput
              labelText={"Descrizione"}
              name={"description"}
              type={"text"}
              placeholder={"modifica"}
            />
            <BackofficeInput
              labelText={"Descrizione"}
              name={"description"}
              type={"text"}
              placeholder={"modifica"}
            />
          </Col>
        </Row>
      </Form>
    </div>
  )
}
