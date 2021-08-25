import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledHome = styled.div`
    .home-container {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }
    .home-container .home-image {
        width: 100%;
        max-height: 800px;
        object-fit: cover;
    }
    .home-container p {
        margin: -30% 0 1% 0;
        width: 350px;
        font-size: 1.8rem;
        opacity: 0.6;
        background-color: #DADED4;
        padding: 5% 5% 8% 5%;
        border-radius: 50px;
        font-family: 'EB Garamond', serif;
    }

    .content-container {
        margin: 15rem 0;
        display: flex;
        justify-content: space-evenly;
    }

    .content-container .left-container {
        width: 45%;

        .watering-can {
            width: 30rem;
            border-radius: 1.5rem;
        }
    }

    .content-container .right-container {
        width: 40%;
        font-size: 1rem;
        line-height: 1.5;
        text-align: left;
        font-family: 'EB Garamond', serif;

        h2 {
            font-size: 2.5rem;
            margin: 3rem 0;
        }
        
        span {
            font-weight: bold;
        }

        .feature-icons {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            margin: 2rem 0;

            li {
                display: flex;
                align-items: center;
                width: 200px;
                padding-bottom: 0.5rem;
            }

            img {
                display: inline-block;
                height: 25px;
                padding: 1rem 0.5rem;
            }
        }
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
        margin: -80px 0 150px 0;
        border-radius: 10px;
    }
    .btn:hover {
        background: #fff;
        color: #1AAB8A;
        border: 1px #1AAB8A solid;
    }

    .signup {
        margin: 2rem 0;
        font-size: 1rem;
    }


`
export default function Home() {
    const history = useHistory()
    const routeToSignUp = () => history.push('/register');
    const routeToShop = () => history.push('/plants-list')
    return (
        <StyledHome>
            <div className='home-wrapper'>
                <section className='home-container'>
                    <img
                        className='home-image'
                        src='https://images.unsplash.com/photo-1592296429945-93008c7e5a59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                        alt='Green leaves' />
                    <p>
                        Never forget when it's time to feed your foliage and quench your
                        plants' thirst.
                    </p>
                    <button
                        onClick={routeToShop}
                        className='btn'>
                        Check our items
                    </button>
                </section>
                <section className='content-container'>
                    <div className='left-container'>
                        <img className='watering-can'
                            alt='Watering can'
                            src='https://images.unsplash.com/photo-1599685087648-eb14f1be03f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' />
                    </div>
                    <div className='right-container'>
                        <header>
                            <h2>Awesome Features</h2>
                        </header>
                        <p>
                            <span>Etiam tristique libero</span> eu nibh porttitor amet
                            fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies
                            condimentum.
                        </p>
                        <ul className="feature-icons">
                            <li className="icon">
                                <img className='rocket'
                                    alt='Rocket'
                                    src='https://image.flaticon.com/icons/png/512/4549/4549343.png' />
                                Consequat tempus</li>
                            <li className="icon">
                                <img className='analysis'
                                    alt='Analysis'
                                    src='https://image.flaticon.com/icons/png/512/4549/4549345.png' />
                                Etiam adipiscing</li>
                            <li className="icon">
                                <img className='barChart'
                                    alt='Bar chart'
                                    src='https://image.flaticon.com/icons/png/512/4549/4549349.png' />
                                Libero nullam</li>
                            <li className="icon">
                                <img className='handshake'
                                    alt='Handshake'
                                    src='https://image.flaticon.com/icons/png/512/4549/4549352.png' />
                                Blandit condimentum</li>
                            <li className="icon">
                                <img className='growth'
                                    alt='Growth'
                                    src='https://image.flaticon.com/icons/png/512/4549/4549357.png' />
                                Lorem ipsum dolor</li>
                            <li className="icon">
                                <img className='marketing'
                                    alt='Marketing'
                                    src='https://image.flaticon.com/icons/png/512/4549/4549361.png' />
                                Nibh amet venenatis</li>
                        </ul>
                        <p>
                            Vehicula ultrices sed ultricies condimentum. Magna sed etiam
                            consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et
                            dolor libero, feugiat magna tempus, sed et lorem adipiscing.
                        </p>
                        <button
                            onClick={routeToSignUp}
                            className='btn signup'>
                            Sign Up
                        </button>
                    </div>
                </section>
            </div>
        </StyledHome>
    )
}
