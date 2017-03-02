import React, { Component } from 'react';

import Header from '../components/Header.js';
import Content from '../components/Content.js';
import Footer from '../components/Footer.js';

export default class Login extends Component
{
  render(){
    return(
      <div class="root">
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}
