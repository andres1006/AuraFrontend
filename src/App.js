import React from 'react';
import {  BrowserRouter as Router,  Switch, Route } from "react-router-dom"
import './App.css';
import  ListTests  from './page/listTests';
import  DetailTestPacient  from './page/test';
import  ListLogs  from './page/listLogs';
import  Login from './components/Login';
import  ForgotPassword from './components/forgotPassword';

function App() {
  return (
    <Router>
      <Switch>
        <Route  exact path="/">
          <ListTests/>
        </Route>
        <Route  exact path="/detail">
          <DetailTestPacient/>
        </Route>
        <Route  exact path="/listlogs">
          <ListLogs/>
        </Route>
        <Route  exact path="/login">
          <Login/>
        </Route>
        <Route  exact path="/forgot-pass">
          <ForgotPassword/>
        </Route>
      </Switch>
    </Router>
  );

}

export default App;
