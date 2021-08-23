import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login';
import Plant from './components/Plant';
import PlantsList from './components/PlantsList';
import ProfilePage from './components/ProfilePage';
import SignUp from './components/SignUp'

function App() {
  const [stock, setStock] = useState([])

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <nav>
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/plants-list">Shop</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </nav>

      <Switch>
        <Route path="/plants-list/:plantId">
          <Plant items={stock}/>
        </Route>

        <Route path="/plants-list">
          <PlantsList items={stock}/>
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
    </div>
  );
}

export default App;
