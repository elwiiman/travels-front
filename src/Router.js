import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

import ShowProfile from "./components/profile/ShowProfile";
// import Home from "./components/home/home.js";

const Router = () => (
  <Switch>
    <Route exact path="/">
      <h1>Home</h1>
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route exact path="/signup">
      <Signup />
    </Route>
    <Route exact path="/home">
      <h1>You are in Home</h1>
    </Route>
    <Route exact path="/profile">
      
      <ShowProfile />
    </Route>
  </Switch>
);

export default Router;
