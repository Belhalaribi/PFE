import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom';
import s from '../styles/main.sass';

import { Router, Route, hashHistory } from 'react-router';

import Home from '../routes/Home.js';
import Login from '../routes/Login.js';
import Test from '../routes/Test.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin()
class App extends Component {

  render() {
    return(
      <MuiThemeProvider >
      <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/tchemou" component={Test} />
      </Router>
      </MuiThemeProvider>
    )
  }
}

render(<App/>, document.getElementById('app'));
