import React, { useState } from 'react'
import CreatorRegisterForm from './creator-register-form'
import CreatorLoginForm from './creator-login-form'
import Styles from "./creator-register.module.css"

export default function CreatorFormWrapper() {

  const [showLogin, setShowLogin] = useState(false);

  const toggleForm = () => {
    setShowLogin(!showLogin)
  }

  return (
    <div>
      {showLogin ? <CreatorLoginForm /> : <CreatorRegisterForm />}
      <p className={Styles.bottomP}>
        {showLogin ? "Non sei ancora registrato? " : "Sei già registrato? "}
        <button className={Styles.bottomLink} onClick={toggleForm}>{showLogin ? "Registrati!" : "Effettua il login"}</button>
      </p>
    </div>
  )
}
