import React, { useState } from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'
import styled from 'styled-components';

const StyledLogin = styled.div`
  .form-wrapper {
    padding: 150px 0 200px 0;
    display: flex;
  }
  .text-container {
    width: 50%;
    text-align: left;
    padding-left: 3rem;

    h2 {
      font-size: 2.5rem;
      margin: 3rem 0 3rem 0;
    }
    p {
      font-size: 1.2rem;
    }
    button {
      margin-left: 10px;
    }
    .switch {
      border: none;
      background: none;
      font-size: 1rem;
      cursor: pointer;
    }
    .switch:hover {
      text-decoration: underline;
    }
  }
  .form-container {
    .login-form {
      display: flex;
      flex-direction: column;
      margin: 2rem;
      width: 20rem;
    }
    label {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 1rem;
      font-weight: 200;
      letter-spacing: 1px;
      margin: 0 0 1rem 0;
    }
    input {
      width: 100%;
      padding: 1rem 2rem;
      margin: 0.5rem 0;
      box-sizing: border-box;
    }
    #submit {
      color: #212324;
      background-color: #b9e529;
      border-color: #b9e529;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      font-weight: 200;
      letter-spacing: 1px;
      padding: 13px 50px 13px;
      margin-top: 1rem;
    }
  }
  .error {
    color: #164A41;
    font-size: 1rem;
    font-weight: 200;
    letter-spacing: 1px;
  }
`
const initialValues = {
  username: "",
  password: "",
}
export default function Login(props) {
  const {push} = useHistory()
  const [user, setUser] = useState(initialValues)
  const [error, setError] = useState(
    ""
  );
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post('https://bw-water-my-plants-07-back-end.herokuapp.com/api/auth/login', user)
      .then(res => {
        window.localStorage.setItem("token", res.data.token)
        push('/plants')
      })
      .catch((err => {
        console.log(err)
        setError("Error!")
      }))
  }
  return (
    <StyledLogin>
      <div className='form-wrapper'>
        <div className='text-container'>
          <h2>Login to your account</h2>
          <p>Do not have an account?
            <Link to="/register">
              <button type='button' className='switch'>
                Create account
              </button>
            </Link>
          </p>
        </div>

        <div className='form-container'>
          <form onSubmit={handleSubmit} className="login-form">
            <label>Username
              <input
                name="username"
                type="text"
                id="username"
                value={user.username}
                onChange={handleChange}
              // placeholder="--- username ---"
              />
            </label>
            <label>Password
              <input
                name="password"
                type="password"
                id="password"
                value={user.password}
                onChange={handleChange}
              // placeholder="--- password ---"
              />
            </label>
            <button id="submit" type="submit" onClick={handleSubmit}>
              Log-In
            </button>
          </form>
          <p id="error" className="error">{error}</p>
        </div>
      </div>

    </StyledLogin>
  )
}