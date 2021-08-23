import React, {useState} from 'react'
import axios from 'axios'

export default function Login(props) {
    const [user, setUser] = useState({
        username:"",
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
            <input
              name="username"
              type="text"
              id="username"
              value={user.username}
              onChange={handleChange}
              placeholder="--- username ---"
            />
            <input
              name="password"
              type="password"
              id="password"
              value={user.password}
              onChange={handleChange}
              placeholder="--- password ---"
            />
            <button id="submit" type="submit" onClick={handleSubmit}>
              Log-In
            </button>
        </form>
        <p id="error" className="error">{error}</p>
        </div>
    )
}