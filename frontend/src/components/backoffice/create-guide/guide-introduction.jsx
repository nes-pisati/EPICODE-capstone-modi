import React, { useState } from 'react'
import BackofficeInput from '../../reusable/backoffice input/backoffice-input'
import BackofficeBtn from '../../reusable/backoffice button/backoffice-button'
import { Alert, Form, Row, Col } from 'react-bootstrap'
import axios from 'axios'

export default function Introduction() {

  
  const localStorageGuideId = localStorage.getItem('guideInfo')
  const guideId = JSON.parse(localStorageGuideId)

  const [formData, setFormData] = useState({
    "title": "Introduzione",
    "artist": "artist",
    "date": "date"
  })
  const [coverImg, setCoverImg] = useState(null)
  const [error, setError] = useState(null);

  const onChangeFile = (e) => {
    setCoverImg(e.target.files[0])
  }

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData()

    data.append('paintingCover', coverImg)

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value)
    })

    try {
      const response = await axios.post(`http://localhost:3030/painting/${guideId}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      console.log(response.data);
      return response.data

    } catch (error) {
      setError(error)
      if (error.response) {
        console.log('Server responded with status code:', error.response.status);
        console.log('Response data:', error.response.data);
      } else if (error.request) {
        console.log('No response received:', error.request);
      } else {
        console.log('Error creating request:', error.message);
      }
    }
  }


  return (
    <Form encType="multipart/form-data" onSubmit={handleSubmit}>
      <Row className='mb-5'>
        <h2>Inserisci una introduzione</h2>
        <Col sm={12} className='mb-5'>
          <p>L'introduzione sarà il primo audio che le persone ascolteranno, utilizzala per raccontare il tema della tua guida, fornire un contesto e dare il via al percorso guidato!</p>
        </Col>
        <Col sm={12} md={6}>
          <BackofficeInput
            labelText={"Copertina introduzione"}
            onChange={onChangeFile}
            name={"introCover"}
            type={"file"}
          />
        </Col>
        <Col sm={12}>
          <BackofficeInput
            labelText={"Introduzione"}
            onChange={onChangeInput}
            name={"description"}
            type={"text"}
            placeholder={"Inserisci qui il testo introduttivo che darà inizio alla tua guida!"}
          />
        </Col>
        { error ? 
        <Alert variant={'danger'}> {error.message} </Alert> : 
        <Alert>Guida creata correttamente!</Alert> }
        <div className='mt-4'>
          <p>Clicca su "Salva introduzione" per salvare e poi "next step" per il passaggio successivo!</p>
          <BackofficeBtn text={"Salva introduzione"} type={"submit"}/>
        </div>
      </Row>
    </Form>
  )
}
