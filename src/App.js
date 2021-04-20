import React, { useState, useEffect } from 'react';
import './App.scss';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './pages/home/Home';
import AuthProvider from './context/authContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/signup" render={() => <Signup />}></Route>
          <Route path="/login" render={() => <Login />}></Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
