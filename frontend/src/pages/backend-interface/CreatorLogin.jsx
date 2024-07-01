import React from 'react'
import CreatorWelcome from '../../components/backoffice/creator-register/creator-welcome'
import CreatorFormWrapper from '../../components/backoffice/creator-register/creator-form-wrapper'

export default function CreatorLogin() {

  return (
    <div className='container'>
      <div className='row'>
      <div className='col-12 col-lg-6'>
          <CreatorWelcome />
        </div>
        <div className='col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center'>
          <CreatorFormWrapper />
        </div>
      </div>
    </div>

  )
}
