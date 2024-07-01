import React, { useEffect } from 'react'
import { useState } from 'react'
import BackofficeInput from '../../reusable/backoffice input/backoffice-input'
import BackofficeBtn from '../../reusable/backoffice button/backoffice-button'
import { Form, Row, Col } from 'react-bootstrap'
import Styles from '../../reusable/backoffice input/backoffice-input.module.css'
import axios from 'axios'

export default function GuideInfo() {

  /* Ora arbitrario, da sostituire con ID preso dal local storage*/ 
  const creatorId = '6681884c9607174b686a1738'

  const [museums, setMuseum] = useState([])
  const [museumId, setMuseumId] = useState({})
  const [coverImg, setCoverImg] = useState(null)
  const [formData, setFormData] = useState({})
  console.log(formData, coverImg);

  const getMuseum = async () => {
    try {
      const response = await axios.get('http://localhost:3030/museum')
      setMuseum(response.data)
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMuseum()
  }, [])

  const handleMuseumSelect = (e) => {
    setMuseumId(e.target.value)
    console.log(e.target.value);
  }

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

    data.append('guideCover', coverImg)

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value)
    })

    try {
      const response = await axios.post(`http://localhost:3030/guide/${creatorId}/${museumId}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      console.log(response.data);
      return response.data

    } catch (error) {
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
      <h2>Crea la tua guida!</h2>
        <Col sm={12}>
          <Form.Group>
            <Form.Label className={`${Styles.label} py-2`}>Seleziona il museo</Form.Label>
            <Form.Select 
            className={`${Styles.formControl} mb-3`}
            value={museumId}
            onChange={handleMuseumSelect}>
              <option>Seleziona il museo</option>
              {museums.map((museum, index) => (
                <option key={index} value={museum._id}>{museum.name}</option>
              )) }
            </Form.Select>
          </Form.Group>
        </Col>
        <Col sm={12} md={6}>
          <BackofficeInput
            labelText={"Titolo della guida"}
            onChange={onChangeInput}
            name={"title"}
            type={"tex"}
            placeholder={"inserisci il titolo"}
          />
        </Col>
        <Col sm={12} md={6}>
          <BackofficeInput
            labelText={"Sottotitolo"}
            onChange={onChangeInput}
            name={"subtitle"}
            type={"text"}
            placeholder={"inserisci un breve sottotitolo"}
          />
        </Col>
        <Col sm={12}>
          <BackofficeInput
            labelText={"Carica una copertina"}
            onChange={onChangeFile}
            name={"guideCover"}
            type={"file"}
          />
        </Col>
        <Col sm={12}>
          <BackofficeInput
            labelText={"Inserisci una descrizione completa"}
            onChange={onChangeInput}
            name={"description"}
            type={"text"}
            placeholder={"descrivi la tua guida"}
          />
        </Col>
        <div className='mt-5'>
          <p>Clicca su "Salva informazioni" per salvare le informazioni e poi "next step" per il passaggio successivo!</p>
          <BackofficeBtn text={"Salva informazioni"} type={"submit"}/>
        </div>
      </Row>
    </Form>
  )
}
