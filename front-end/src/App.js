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


function App() {
  // const [stock, setStock] = useState([])
  const [plants, setPlants] = useState([])
  
  useEffect(()=>{
    axios.get(" https://bw-water-my-plants-07-back-end.herokuapp.com/api/plants")
      .then(res=>{
        setPlants(res.data)
      })
      .catch(err=> {
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

        <PrivateRoute path="/plants" component={PlantsList}/>
            
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
      </StyledApp>
      
    </div>
  );
}

export default App;
