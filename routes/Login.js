import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';

import Header from '../components/Header.js';
import Content from '../components/Content.js';
import Footer from '../components/Footer.js';
import SwipeMenu from '../components/SwipeMenu.js';
import Root from '../components/Root.js';

export default class Login extends Component
{
  render(){
    return(
      <Root>
        <Header />
        <SwipeMenu />
        <Content />
        <Footer />
      </Root>
    )
  }
}
