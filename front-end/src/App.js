import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login';
import Plant from './components/Plant';
import PlantsList from './components/PlantsList';
import ProfilePage from './components/ProfilePage';
import SignUp from './components/SignUp'
import AddPlantForm from './components/AddPlantForm'
import EditPlantForm from './components/EditPlantForm'
import PrivateRoute from './components/PrivateRoute'
import './App.css'
import styled from 'styled-components'
import axios from 'axios'

const StyledApp = styled.div`
  font-family: sans-serif;
  text-align: center;
  height: 100vh;
  width: 100vw;
  
  .App-header {
    display: flex;
    justify-content: space-between;
    background-color: #9DC88D;
    border-bottom: 5px grey dotted;
    height: 50px;
    width: 100%;
    padding: 1.5rem 0;
    opacity: 0.9;
    position: fixed;
    overflow: hidden;
    transition: 0.8s;
    top: 0;
    z-index: 99;
  }

  .flex-container-left {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 2.5rem;
      font-weight: bold;
      margin-top: 10px;
      color: #164A41;
      width: 30vw;
      font-family: 'Cormorant', serif;
   }

  }

  nav {
    display: flex;
    justify-content: space-evenly;    
    align-items: center;
    width: 600px;
  }

  .nav-links {
    display: flex;
    justify-content: space-evenly;    
  }

  .nav-links a{
    text-decoration: none;
    color: #164A41;
    font-weight: bold;
    font-size: 1rem;
    margin-right: 2%;
    width: 100px;
    height: 25px;
    padding-top: 2%;
  }

  .nav-links a:hover {
    color: #fceed1;
  }

  footer {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    position: relative;
    bottom: 0;
    width: 100%;
  }

  .footer-image {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
  }

  .footer-content {
    margin: -350px 65% 0 0;
    width: 220px;
    font-size: 1rem;
    opacity: 0.6;
    background-color: #DADED4;
    padding: 2% 5% 0 5%;
    border-radius: 10px;
    font-family: 'EB Garamond', serif;

    h2 {
      font-size: 2rem;
      margin-bottom: 15px;
    }

    ul.items {
      text-align: right;
    }

    h3 {
      font-size: 1.2rem;
      font-style: italic;
    }

    ul.items li {
      margin: 12px;
    }
    
    .icon {
      height: 20px;
      cursor: crosshair;
      margin: 3px;
    }
  }
`

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".App-header").style.padding = "0.2rem 0";
    document.querySelector("h1").style.fontSize = "2rem";
  } else {
    document.querySelector(".App-header").style.padding = "1.5rem 0";
    document.querySelector("h1").style.fontSize = "2.5rem";
  }
}

function App() {
  // const [stock, setStock] = useState([])
  const [plants, setPlants] = useState([])

  useEffect(() => {
    axios.get(" https://bw-water-my-plants-07-back-end.herokuapp.com/api/plants")
      .then(res => {
        setPlants(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [plants])
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "login"
  }

  return (
    <div className="App">
      <StyledApp id="wrapper">
        <header className="App-header">
          <div className='flex-container-left'>
            <h1>Water My Plants</h1>

          </div>
          <nav>
            <div className='nav-links'>
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/plants">Shop</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/add-plant">Add Plant</Link>
              <a href="/" onClick={logout}>Log Out</a>
            </div>
          </nav>
        </header>

        <Switch>
          <PrivateRoute path="/edit-plant/:plantId" component={EditPlantForm}/>

          <PrivateRoute path="/plants/:plantId" component={Plant}/>

          <PrivateRoute path="/plants">
            <PlantsList plants={plants} />
          </PrivateRoute>

          <PrivateRoute path="/add-plant" component={AddPlantForm}/>

          <PrivateRoute path="/profile" component={ProfilePage}/>

          <Route path="/login">
            <Login />
          </Route>

<Route path="/register">
  <SignUp />
</Route>

<Route path="/">
  <Home />
</Route>

        </Switch>

        <footer>
          <img
            className='footer-image'
            src='https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            alt='Green leave for footer'
          />
          <div className='footer-content'>
            <h2>Contact Us</h2>
            <ul class='items'>
              <li>
                <h3>Email</h3>
                <a href="#">information@untitled.ext</a>
              </li>
              <li>
                <h3>Phone</h3>
                <a href="#">(000) 000-0000</a>
              </li>
              <li>
                <h3>Address</h3>
                <span>1234 Somewhere Road, Nashville, TN 00000</span>
              </li>
              <li>
                <h3>Elsewhere</h3>
                <a href="#">
                  <img className='icon twitter'
                    alt='twitter'
                    src='https://image.flaticon.com/icons/png/512/733/733635.png' />
                </a>
                <a href="#">
                  <img className='icon facebook'
                    alt='facebook'
                    src='https://image.flaticon.com/icons/png/512/1384/1384005.png' />
                </a>
                <a href="#">
                  <img className='icon instagram'
                    alt='instagram'
                    src='https://image.flaticon.com/icons/png/512/1400/1400829.png' />
                </a>
                <a href="#">
                  <img className='icon linkedin'
                    alt='linkedin'
                    src='https://image.flaticon.com/icons/png/512/1384/1384014.png' />
                </a>
                <a href="#">
                  <img className='icon github'
                    alt='github'
                    src='https://image.flaticon.com/icons/png/512/1051/1051326.png' />
                </a>
                <a href="#">
                  <img className='icon codepen'
                    alt='codepen'
                    src='https://image.flaticon.com/icons/png/512/2111/2111341.png' />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </StyledApp>

    </div>
  );
}

export default App;
