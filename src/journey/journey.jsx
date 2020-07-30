import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import ConnectedApp from "./routes";

// Anand: made this a component to accomodate Navbar
export default () => (
  <Router>
    <Switch>
      <Route path="/" component={ConnectedApp} />
    </Switch>
  </Router>
);
