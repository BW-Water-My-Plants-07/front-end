import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import Plant from './components/Plant';
import PlantsList from './components/PlantsList';
import ProfilePage from './components/ProfilePage';

function App() {
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
        </div>
      </nav>

      <Switch>
        <Route path="/plants-list/:plantId">
          <Plant />
        </Route>

        <Route path="/plants-list">
          <PlantsList />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
