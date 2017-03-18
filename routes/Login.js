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
        {/*<div class="container">
          <div class="row">
            <div class="cl-2 cl-s-6 b"></div>
            <div class="cl-10 cl-s-6 a"></div>
          </div>
        </div>  */}
      </Root>
    )
  }
}
