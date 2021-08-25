import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components';

const StyledProfile = styled.div`
    padding-top: 500px;
`

export default function ProfilePage() {
    const {id} = useParams()
    const [user, setUser] = useState({
        username:"",
        phoneNumber:"",
        password:"",
    })
    useEffect(()=>{
        axios.get(`https://bw-water-my-plants-07-back-end.herokuapp.com/api/auth/register/${id}`)
         .then(res=>{
             setUser(res.data)
         })
         .catch(err=>{
             console.log(err)
         })
    })
    return (
        <StyledProfile>
            <h1>Profile Page</h1>
            <div className="user-details">
                <label>Username:
                    <strong>{user.username}</strong>
                </label>
                <label>Phone Number: 
                    <strong>{user.phoneNumber}</strong>
                </label>
                <label>Password:
                    <strong>{user.password}</strong>
                </label>
            </div>

        </StyledProfile>
    )
}