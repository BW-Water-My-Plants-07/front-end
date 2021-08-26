import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

const StyledProfile = styled.div`
    padding-top: 100px;
    h2 {
        font-size: 2rem;
        margin: 2rem;
    }
    .user-wrapper {
        display: flex;
        justify-content: flex-start;
        padding-bottom: 20rem;
        .user-image {
            height: 30rem;
            margin-left: 10rem;
            border-radius: 2rem;
        }
    }
    .user-details {
        display: flex;
        flex-direction: column;
        margin: 8rem;
    }

    label {
        display: flex;
        flex-direction: column;
        align-items: start;
        font-size: 1rem;
        font-weight: 200;
        letter-spacing: 1px;
        margin: 0 0 1rem 0;
    }
`

export default function ProfilePage() {
    const { id } = useParams()
    const [user, setUser] = useState({
        username: "",
        phoneNumber: "",
        password: "",
    })
    useEffect(() => {
        axios.get(`https://bw-water-my-plants-07-back-end.herokuapp.com/api/auth/register/${id}`)
            .then(res => {
                setUser(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })
    return (
        <StyledProfile>
            <h2>Profile Page</h2>
            <div className='user-wrapper'>
                <img className='user-image'
                    src='https://images.unsplash.com/photo-1574607407408-1e681c46041d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
                    alt='user' />
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
            </div>


        </StyledProfile>
    )
}