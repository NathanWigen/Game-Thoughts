// Code from Tastevile code along 

import React, { useState } from 'react';
import './Register.css'


export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleRegister(formData);
    }} className="register-form">
      <h3 className="register-title">Register</h3>
      <div className="register-user-input-parent">
      <label className="register-name">Username:
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
          className="register-username-input"
        />
      </label>
      </div>
      <div className="register-user-email-parent">
      <label className="register-email">Email:
        <input
          type='text'
          name='email'
          value={formData.email}
          onChange={handleChange}
          className="register-email-input"  
        />
        </label>
      </div>
      <div className="register-user-password-parent">
      <label className="register-password">Password:
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          className="register-password-input"
        />
        </label>
      </div>
      <div className="register-button-parent">
      <button className="register-submit">Submit</button>
      </div>
    </form>
  )
}