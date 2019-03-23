import React, {useState} from 'react';
import Navbar from './Navbar/Navbar';
import Login from './Auth/Login';
import Register from './Auth/Register';
import {Switch, Link, Route} from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';

const App = props => {
  return(
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Dashboard}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
      </Switch>
    </div>
  )
}

export default App