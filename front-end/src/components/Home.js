import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledHome = styled.div`
    .home-wrapper {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }
    .home-image {
        width: 100%;
        max-height: 600px;
        object-fit: cover;
    }
    p {
        margin-top: -350px;
        width: 350px;
        font-size: 1.8rem;
        opacity: 0.6;
        background-color: #DADED4;
        padding: 5% 5% 5% 5%;
        border-radius: 50px;
        font-family: 'EB Garamond', serif;
    }
    .btn {
        background: #1AAB8A;
        color: #fff;
        border: none;
        position: relative;
        height: 40px;
        font-size: 1.5em;
        padding: 0 1.5em;
        transition: 800ms ease all;
        outline: none;
        margin: 10px;
        border-radius: 10px;
    }
    .btn:hover {
        background: #fff;
        color: #1AAB8A;
    }
`
export default function Home(){
    const history = useHistory()
    const routeToSignUp = () => history.push('/sign-up');
    return(
        <StyledHome>
        <div className='home-wrapper'>
            <img
                className='home-image'
                src='https://images.unsplash.com/photo-1592296429945-93008c7e5a59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                alt='Green leaves'
            />
            <p>
                Never forget when it's time to feed your foliage and quench your
                plants' thirst.
            </p>
            <button
                onClick={routeToSignUp}
                className='btn'>
                    Sign Up
            </button>


        </div>
    </StyledHome>
    )
}
