import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function CreatorLogin() {

  const [formData, setFormData] = useState({})
  const [avatarFile, setAvatarFile] = useState(null)
  console.log(formData, avatarFile);

  const onChangeFile = (e) => {
    setAvatarFile(e.target.files[0])
  }
  
  const onChangeInput = (e) => {
    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name] : value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData()

    data.append('creatorAvatar', avatarFile)

    Object
      .entries(formData)
      .forEach(([key, value]) => {
        data.append (key, value)
      })

    try {
      const response = await axios.post('http://localhost:3030/creator/register', data, {
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
    <div className='container pt-5'>
      <div className='row'>
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <h2>Compila il form di registrazione</h2>
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>First Name</label>
              <input
                onChange={onChangeInput}
                name="firstName"
                type="text"
                className="form-control"
                aria-describedby="first name"
                placeholder="Enter name"
              />
            </div>
            <div className="form-group mb-3">
              <label>Last Name</label>
              <input
                onChange={onChangeInput}
                name="lastName"
                type="text"
                className="form-control"
                aria-describedby="last name"
                placeholder="Enter last name"
              />
            </div>
            <div className="form-group mb-3">
              <label>Email</label>
              <input
                onChange={onChangeInput}
                name="email"
                type="text"
                className="form-control"
                aria-describedby="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group mb-3">
              <label>Password</label>
              <input
                onChange={onChangeInput}
                name="password"
                type="text"
                className="form-control"
                aria-describedby="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="form-group mb-3">
              <label>Carica la tua immagine del profilo</label>
              <input
                onChange={onChangeFile}
                type="file"
                name="creatorAvatar"
                className="form-control"
                aria-describedby="avatar"
              />
            </div>
            <button type="submit" className="btn btn-primary">Registrati</button>
          </form>
        </div>
      </div>
    </div>
  )
}
