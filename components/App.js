import React, { Component } from 'react';
import { render } from 'react-dom';

import s from '../styles/main.sass';

class App extends Component {
  render() {
    return(
      <div>
        hello
        bilel

      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
