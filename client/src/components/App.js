import React, { useState, createContext } from "react";
import Navbar from "./Navbar/NewNavbar";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Auth from "./Auth/Auth";
import { Switch, Link, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Forum from './Forum/Forum'

import AppContext from '../contexts/themeContext';
import themes from '../themes/globalStyle';
const user = {
  name: 'Tal Arbatov',
  username: 'TestUsername',
  password: 'testPassword'
}

const App = props => {
  return (
    <div>
      <AppContext.Provider value={themes.theme1}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={() => <Auth auth="login" />} />
          <Route path="/register" component={() => <Auth auth="register" />} />
          <Route path="/forum" component={() => <Forum />} />
        </Switch>
      </AppContext.Provider>
    </div>
  );
};

export default App;
