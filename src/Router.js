import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

import ShowProfile from "./components/profile/ShowProfile";
import CreateTravel from "./components/travel/CreateTravel";
import EditTravel from "./components/travel/EditTravel";
import Home from "./components/home/Home";

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
      <Home></Home>
    </Route>
    <Route exact path="/profile">
      <ShowProfile />
    </Route>
    <Route exact path="/travel">
      <CreateTravel />
    </Route>
    <Route path="/travel/edit/:id" component={EditTravel} />
  </Switch>
);

export default Router;
