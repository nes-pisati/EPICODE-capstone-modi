import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Styles from "./creator-register.module.css"
import BackofficeInput from '../../reusable/backoffice input/backoffice-input'
import { Form } from 'react-bootstrap'
import CreatorLoginForm from './creator-login-form'

export default function CreatorRegisterForm() {

  const [formData, setFormData] = useState({})
  const [avatarFile, setAvatarFile] = useState(null)
  const [isRegistered, setIsRegistered] = useState(false)

  const onChangeFile = (e) => {
    setAvatarFile(e.target.files[0])
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

    data.append('creatorAvatar', avatarFile)

    Object
      .entries(formData)
      .forEach(([key, value]) => {
        data.append(key, value)
      })

    try {
      const response = await axios.post('http://localhost:3030/creator/register', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(response.data);
      setIsRegistered(true)
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
    <div className={`${Styles.formWrapper} d-flex flex-column align-items-center`}>
      {!isRegistered ? (
        <Form encType="multipart/form-data" onSubmit={handleSubmit} className='mt-5'>
        <h2 className={`${Styles.formTitle} mb-4`}>Registrati</h2>
          <BackofficeInput
            labelText={"First name"}
            onChange={onChangeInput}
            name={"firstName"}
            type={"text"}
            placeholder={"inserisci il tuo nome"}
          />
          <BackofficeInput
            labelText={"Last name"}
            onChange={onChangeInput}
            name={"lastName"}
            type={"text"}
            placeholder={"inserisci il tuo cognome"}
          />
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
            placeholder={"scegli la password"}
          />
          <BackofficeInput
            labelText={"Profile picture"}
            onChange={onChangeFile}
            name={"creatorAvatar"}
            type={"file"}
            placeholder={"scegli la password"}
          />
          <button type="submit" className={`${Styles.formButton} mt-3`}>Registrati</button>
        </Form>  
      ) : <CreatorLoginForm />}
       </div>
  )
}