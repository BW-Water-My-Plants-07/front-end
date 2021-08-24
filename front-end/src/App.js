import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login';
import Plant from './components/Plant';
import PlantsList from './components/PlantsList';
import ProfilePage from './components/ProfilePage';
import SignUp from './components/SignUp'
<<<<<<< HEAD
import './App.css'
import styled from 'styled-components';

const StyledApp = styled.div`
  font-family: sans-serif;
  text-align: center;
  height: 100%;
  width: 100%;
  

  .App-header {
    display: flex;
    justify-content: space-between;
    background-color: #9DC88D;
    height: 100px;
  }

  .flex-container-left {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 2.5rem;
      font-weight: bold;
      margin-top: 30px;
      color: #164A41;
      width: 30vw;
      font-family: 'Cormorant', serif;
   }

  }

  nav {
    display: flex;
    justify-content: space-evenly;    
    align-items: center;
    width: 500px;
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
    width: 80px;
    height: 25px;
    padding-top: 2%;
  }

  .nav-links a:hover {
    color: #fceed1;
  }
`
=======
import AddPlantForm from './components/AddPlantForm'

>>>>>>> f752d101886f9b77915ce58885eb71e776118df0

function App() {
  const [stock, setStock] = useState([])

  return (
    <div className="App">
<<<<<<< HEAD
      <StyledApp id="wrapper">
        <header className="App-header">
          <div className='flex-container-left'>
            <h1>Water My Plants</h1>

          </div>
          <nav>
            <div className='nav-links'>
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/plants-list">Shop</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/sign-up">Sign Up</Link>
            </div>
          </nav>
        </header>

        <Switch>
          <Route path="/plants-list/:plantId">
            <Plant items={stock} />
          </Route>

          <Route path="/plants-list">
            <PlantsList items={stock} />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>

          <Route path="/profile">
            <ProfilePage />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </StyledApp>

=======
      <header className="App-header">

      </header>
      <nav>
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/plants-list">Shop</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="add-plant">Add Plant</Link>
        </div>
      </nav>

      <Switch>
        <Route path="/plants-list/:plantId">
          <Plant items={stock}/>
        </Route>

        <Route path="/plants-list">
          <PlantsList items={stock}/>
        </Route>
        <Route path="/add-plant">
          <AddPlantForm />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        
        <Route path="/sign-up">
          <SignUp />
        </Route>

        <Route path="/profile">
          <ProfilePage />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
>>>>>>> f752d101886f9b77915ce58885eb71e776118df0
    </div>
  );
}

export default App;
