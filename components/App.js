import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom';
import s from '../styles/main.sass';

import { Router, Route, hashHistory } from 'react-router';

import Home from '../routes/Home.js';
import Login from '../routes/Login.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Theme from '../themes/CustomTheme.js';

injectTapEventPlugin()
class App extends Component {

  render() {
    return(
      <Theme>
      <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Router>
    </Theme>
    )
  }
}

render(<App/>, document.getElementById('app'));
