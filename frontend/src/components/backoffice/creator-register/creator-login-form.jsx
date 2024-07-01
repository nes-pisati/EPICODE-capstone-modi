import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Styles from "./creator-register.module.css"
import { Form } from 'react-bootstrap'
import BackofficeInput from '../../reusable/backoffice input/backoffice-input'

export default function CreatorLoginForm() {

  /*RICHIESTE HTTP
  post sulla rotta creator /login
  */ 

  return (
    <div className={`${Styles.formWrapper} col d-flex flex-column align-items-center`}>
      <Form encType="multipart/form-data" className='mt-4'>
      <h2 className={`${Styles.formTitle} mb-4`}>Effettua il login</h2>
      <BackofficeInput 
        labelText={"Email"}
        name={"email"}
        type={"text"}
        placeholder={"inserisci il tuo indirizzo mail"}
      />
      <BackofficeInput 
        labelText={"Password"}
        name={"password"}
        type={"password"}
        placeholder={"inserisci la tua password"}
      />
        <button type="submit" className={`${Styles.formButton} mt-3`}>Entra</button>
      </Form>
    </div>
  )
}