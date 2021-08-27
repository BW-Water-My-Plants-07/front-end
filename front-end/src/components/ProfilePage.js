import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import styled from 'styled-components';

const StyledProfile = styled.div`
    padding-top: 100px;
    h2 {
        font-size: 2rem;
        margin: 2rem;
    }
    .user-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 5rem 0 20rem 0;
        .user-image {
            width: 350px;
            height: 350px;
            object-fit: cover;
            margin: 0 auto;
            border-radius: 1rem;
        }
        .user-details {
            font-size: 1rem;
            font-weight: 200;
            letter-spacing: 1px;
            padding: 3rem;
        }
        span {
            text-transform: capitalize;
        }
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
        axiosWithAuth()
        .get(`https://bw-water-my-plants-07-back-end.herokuapp.com/api/users`)
            .then(res => {
                setUser(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <StyledProfile>
            <h2>Profile Page</h2>
            <div className='user-wrapper'>
                <img className='user-image'
                    src='https://images.unsplash.com/photo-1574607407408-1e681c46041d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
                    alt='user' />
                <div className="user-details">
                    <h3>Username: <span>{user.username}</span></h3>
                </div>
            </div>


        </StyledProfile>
    )
}