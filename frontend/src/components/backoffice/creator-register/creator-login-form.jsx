import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Styles from "./creator-register.module.css"
import { Form } from 'react-bootstrap'
import BackofficeInput from '../../reusable/backoffice input/backoffice-input'

export default function CreatorLoginForm() {

  const [creatorLogin, setCreatorLogin] = useState({})
  const navigate = useNavigate()

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setCreatorLogin({
      ...creatorLogin,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('http://localhost:3030/creator/login', creatorLogin)
    .then(response => {
      console.log(response.data);
      localStorage.setItem('creatorLogin', response.data)
      navigate('/dashboard')
    }).catch(error => console.error(error))
  }

  return (
    <div className={`${Styles.formWrapper} col d-flex flex-column align-items-center`}>
      <Form onSubmit={handleSubmit} className='mt-4'>
        <h2 className={`${Styles.formTitle} mb-4`}>Effettua il login</h2>
        <BackofficeInput
          labelText={"Email"}
          onChange={onChangeInput}
          name={"email"}
          type={"text"}
          placeholder={"inserisci il tuo indirizzo mail"}
        />
        <BackofficeInput
          labelText={"Password"}
          onChange={onChangeInput}
          name={"password"}
          type={"password"}
          placeholder={"inserisci la tua password"}
        />
        <button type="submit" className={`${Styles.formButton} mt-3`}>Entra</button>
      </Form>
    </div>
  )
}