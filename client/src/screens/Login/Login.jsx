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
      <h3>Login</h3>
      <div>
      <label>Username:
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      </div>
      <div>
      <label>Password:
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
        </label>
      </div>
      <Link to='/register'>Register</Link>
      <button>Submit</button>
    </form>
  )
}
