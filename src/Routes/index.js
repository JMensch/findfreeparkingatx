/**
 * Main router file for the app
 */
import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home/Home";
// import locationList page here

const homePath = "/";
const LocationListPath = "/locations";

export default () => (
  <Router>
    <div>
      <Switch>
        <Route exact={true} path={homePath} component={Home} />
        <Route exact={true} path={LocationListPath} component={null} />
      </Switch>
    </div>
  </Router>
);
