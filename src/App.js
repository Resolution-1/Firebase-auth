import React from "react";
import Signup from "./components/Signup";
import "./App.scss";
import Login from "./components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import fire from "./config/fire";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Signup}></Route>
      <Route path="/login" exact component={Login}></Route>
    </Router>
  );
};

export default App;
