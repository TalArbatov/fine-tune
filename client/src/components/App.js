import React, { useState, createContext } from "react";
import Navbar from "./Navbar/NewNavbar";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Auth from "./Auth/Auth";
import { Switch, Link, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";

import AppContext from './contexts/themeContext';

const user = {
  name: 'Tal Arbatov',
  username: 'TestUsername',
  password: 'testPassword'
}

const App = props => {
  return (
    <div>
      <AppContext.Provider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={() => <Auth auth="login" />} />
          <Route path="/register" component={() => <Auth auth="register" />} />
        </Switch>
      </AppContext.Provider>
    </div>
  );
};

export default App;
