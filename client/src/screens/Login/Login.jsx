import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
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
      props.handleLogin(formData);
    }}>
      <h3 className="login-title">Login</h3>
      <div className="login-user-input-parent">
      <label className="login-name">Username:
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
          className="login-username-input"
        />
      </label>
      </div>
      <div className="login-user-email-parent">
      <label className="login-email">Password:
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          className="login-username-input"
        />
        </label>
      </div>
      <Link to='/register' className="register-link">Register</Link>
      <button className="login-submit">Submit</button>
    </form>
  )
}
