import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom';
import s from '../styles/main.sass';

import { Router, Route, hashHistory } from 'react-router';

import Home from '../routes/Home.js';
import Login from '../routes/Login.js';
<<<<<<< HEAD
import Test from '../routes/Test.js';

=======
import Profile from '../routes/Profile.js';
>>>>>>> fb56d44733715d0a6bdded4e39b1d43e5ae6d8e9
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
<<<<<<< HEAD
        <Route path="/tchemou" component={Test} />
=======
        <Route path="/Profile" component={Profile} />
>>>>>>> fb56d44733715d0a6bdded4e39b1d43e5ae6d8e9
      </Router>
    </Theme>
    )
  }
}

render(<App/>, document.getElementById('app'));
