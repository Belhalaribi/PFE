import React, { Component } from 'react';
import { render } from 'react-dom';
import s from '../styles/main.sass';

import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';



class App extends Component {

  render() {
    return(
      <div class="root">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
