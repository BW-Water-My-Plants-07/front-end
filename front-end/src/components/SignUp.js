import React, { useState } from 'react'
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
const initialValues = {
  username:"",
  phoneNumber:"",
  password: ""
}
export default function SignUp(props) {
    const [user, setUser] = useState(initialValues)
    
    const updateForm = (inputName, inputValue) => {
        setUser({
          ...user,
          [inputName]: inputValue
        })
      }

    const submitForm = e =>{
        const newUser ={
          username: user.username.trim(),
          password: user.password.trim(),
          phoneNumber: user.phoneNumber.trim()
        }
        if(
          newUser.username===""||
          newUser.password===""||
          newUser.phoneNumber===""
          ){
            return;
          }
        axios
         .post('https://bw-water-my-plants-07-back-end.herokuapp.com/api/auth/register', newUser)
          .then(res=>{
            setUser(newUser)
          })
          .catch(err=>{
            console.log(err)
          })
      }
      const history = useHistory()
      
      const onChange = e => {
        const {name,value} = e.target
        updateForm(name,value)
      }
      
      const onSubmit = e => {
        e.preventDefault()
        submitForm()
        history.push('/login')
      }
      return (
        <StyledSignUp>
          <div className='form-wrapper'>
            <div className='text-container'>
              <h2>Create your account</h2>
              <p>Do you already have an account?
                  <Link to={`/login`}>
                    <button type='button' className='switch'>
                      Log In
                    </button>
                  </Link>
              </p>
            </div>
            <div className='form-container'>
              <form onSubmit={onSubmit} className="signup-form">
                <label>
                  Username
                  <input
                    name="username"
                    type="text"
                    id="username"
                    value={user.username}
                    onChange={onChange}

                  />
                </label>
                <label>
                  Phone Number
                  <input
                    name="phoneNumber"
                    type="tel"
                    id="phone-number"
                    value={user.phoneNumber}
                    onChange={onChange}
                  />
                </label>
                <label>
                  Password
                  <input
                    name="password"
                    type="password"
                    id="password"
                    value={user.password}
                    onChange={onChange}
                    // placeholder="--- password ---"
                  />
                </label>
                <button id="submit" type="submit">
                  Sign-Up
                </button>
              </form>
             
            </div>
          </div>
        </StyledSignUp>
    
      )
}