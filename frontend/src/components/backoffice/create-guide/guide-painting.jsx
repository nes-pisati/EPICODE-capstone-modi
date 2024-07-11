import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BackofficeInput from '../../reusable/backoffice input/backoffice-input'
import BackofficeBtn from '../../reusable/backoffice button/backoffice-button'
import { Form, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import BackofficeModal from '../../reusable/modale/modal'

export default function Painting() {

  const navigate = useNavigate()
  const localStorageGuideId = localStorage.getItem('guideInfo')
  const guideId = JSON.parse(localStorageGuideId)
  
  const endCreate = () => {
    navigate('/dashboard')
  }

  const [formData, setFormData] = useState({})
  const [coverImg, setCoverImg] = useState(null)

  const [showModal, setShowModal] = useState(false)
  const [isNotToShow, setisNotToShow] = useState(false)

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

      setShowModal(true)
      setisNotToShow(true)
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

  const handleClose = () => setShowModal(false)

  return (
    <Form encType="multipart/form-data" onSubmit={handleSubmit}>
      <Row className='mb-5'>
        <Col sm={12} md={6}>
          <BackofficeInput
            labelText={"Titolo"}
            onChange={onChangeInput}
            name={"title"}
            type={"tex"}
            placeholder={"Inserisci il titolo del quadro"}
          />
        </Col>
        <Col sm={12} md={6}>
          <BackofficeInput
            labelText={"Artista"}
            onChange={onChangeInput}
            name={"artist"}
            type={"text"}
            placeholder={"Inserisci il nome del artista"}
          />
        </Col>
        <Col sm={12} md={6}>
          <BackofficeInput
            labelText={"Data"}
            onChange={onChangeInput}
            name={"date"}
            type={"text"}
            placeholder={"Inserisci il periodo storico"}
          />
        </Col>
        <Col sm={12} md={6}>
          <BackofficeInput
            labelText={"Immagine"}
            onChange={onChangeFile}
            name={"paintingCover"}
            type={"file"}
          />
        </Col>
        <Col sm={12}>
          <BackofficeInput
            labelText={"Descrivi il quadro"}
            onChange={onChangeInput}
            name={"description"}
            type={"text"}
            placeholder={"Descrivi il quadro"}
          />
        </Col>
      </Row>
      <Row className='d-flex justify-content-between gap-2'>
        <BackofficeBtn text={"Aggiungi"} type={"submit"}/>
        <BackofficeBtn text={"Termina"} onClick={endCreate}/>
      </Row>
      {showModal && (
          <BackofficeModal 
            body={"Quadro inserito correttamente!"}
            closeModal={handleClose}
            doAction = {isNotToShow? null : handleClose}
            isNotToShow = {isNotToShow}
          />
        )}
    </Form>
  )
}
