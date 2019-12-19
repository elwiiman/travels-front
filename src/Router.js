import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Info from "./components/travel/Info";

import { AppContext } from "../src/AppContext";
import ShowProfile from "./components/profile/ShowProfile";
import CreateTravel from "./components/travel/CreateTravel";
import EditTravel from "./components/travel/EditTravel";
import Home from "./components/home/Home";
import Landing from "./components/landing/Landing";
import About from "./components/landing/About";
import Reservations from "./components/reservation/Reservations";

const Router = () => {
  // const { user } = useContext(AppContext);

  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/login">
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
      <Route exact path="/my-reservations">
        <Reservations />
      </Route>
      <Route path="/travel/edit/:id" component={EditTravel} />
      <Route path="/travel/info/:id" component={Info} />
    </Switch>
  );
};

export default Router;
