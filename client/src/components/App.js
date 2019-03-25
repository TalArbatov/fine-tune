import React, { useState, createContext } from "react";
import Navbar from "./Navbar/NewNavbar";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Auth from "./Auth/Auth";
import { Switch, Link, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";


const App = props => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={() => <Auth auth="login" />} />
        <Route path="/register" component={() => <Auth auth="register" />} />
      </Switch>
    </div>
  );
};

export default App;
