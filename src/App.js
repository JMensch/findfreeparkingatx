import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Routes />
        </Grid>
      </div>
    );
  }
}

export default App;
