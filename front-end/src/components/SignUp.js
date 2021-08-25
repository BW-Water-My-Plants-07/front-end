import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'
import styled from 'styled-components';

const StyledSignUp = styled.div`
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
  .fill {
    font-size: 1rem;
    font-weight: 200;
    letter-spacing: 1px;
    padding: 13px 50px 13px;
    outline: 0;
    border: 1px solid black;
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
  }
  .fill::after {
    content: "";
    background-color: #90CAF9;
    opacity: 0.7;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.5s;
  }
  .fill:hover::after {
    top: 0px;
    left: 0px;
  }
}
.form-container {
  .signup-form {
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

export default function SignUp(props) {
    let history = useHistory()
    const [user, setUser] = useState({
        // username:"",
        // phoneNumber:"",
        // password: "",
      })
    
      const [error, setError] = useState(
        ""
      );
      const handleChange = e => {
        setUser({
          ...user,
          [e.target.name]: e.target.value
        })
      }
    
      const handleSubmit = e =>{
        e.preventDefault()
        axios
         .post('https://bw-water-my-plants-07-back-end.herokuapp.com/api/auth/register')
          .then(res=>{
            console.log(res.data)
            localStorage.setUser(res.data)
            history.push('/profile')
          })
          .catch(err=>{
            console.log(err)
            setError("Error!")
          })
      }
      return (
        <StyledSignUp>
          <div className='form-wrapper'>
            <div className='text-container'>
              <h2>Create your account</h2>
              <p>Do you already have an account?
                  <Link to={`/login`}>
                    <button type='button' class='fill'>
                      Log In
                    </button>
                  </Link>
              </p>
            </div>
            <div className='form-container'>
              <form onSubmit={handleSubmit} className="signup-form">
                <label>
                  Username
                  <input
                    name="username"
                    type="text"
                    id="username"
                    value={user.username}
                    onChange={handleChange}
                    // placeholder="--- enter a username ---"
                  />
                </label>
                <label>
                  Phone Number
                  <input
                    name="phoneNumber"
                    type="tel"
                    id="phone-number"
                    value={user.phoneNumber}
                    onChange={handleChange}
                    // placeholder="--- enter your phone number ---"
                  />
                </label>
                <label>
                  Password
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
                  Sign-Up
                </button>
              </form>
              <p id="error" className="error">{error}</p>
            </div>
          </div>
        </StyledSignUp>
    
      )
}