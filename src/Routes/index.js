/**
 * Main router file for the app
 */
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HeaderNav from '../Components/HeaderNav/HeaderNav';

import Home from './Home/Home';
import LocationList from './LocationList/LocationList';
// import locationList page here

const homePath = '/';
const locationListPath = '/locations';

export default () => (
  <Router>
    <div>
      <HeaderNav />

      <Switch>
        <Route exact={true} path={homePath} component={Home} />
        <Route exact={true} path={locationListPath} component={LocationList} />
      </Switch>
    </div>
  </Router>
);
