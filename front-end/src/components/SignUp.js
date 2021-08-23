import React, {useState} from 'react'
import axios from 'axios'

export default function Login(props) {
    const [user, setUser] = useState({
        username:"",
        phoneNumber:"",
        password: "",
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
         .post('', user)
          .then(res=>{
            localStorage.setItem("token", res.data.payload)
            props.history.push('/profile')
          })
          .catch((err=>{
            console.log(err)
            setError("Error!")
          }))
      }
    return (
        <div>
            <form onSubmit={handleSubmit} className="login-form">
                <label>
                    Username: 
                    <input
                        name="username"
                        type="text"
                        id="username"
                        value={user.username}
                        onChange={handleChange}
                        placeholder="--- enter a username ---"
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
                        placeholder="--- enter your phone number ---"
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
                        placeholder="--- password ---"
                    />
                </label>
                <button id="submit" type="submit" onClick={handleSubmit}>
                    Sign-Up
                </button>
            </form>
            <p id="error" className="error">{error}</p>
        </div>
    )
}