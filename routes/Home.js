import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Header from '../components/Header.js';
import Content from '../components/Content.js';
import Footer from '../components/Footer.js';
import Root from '../components/Root.js';

import Login from '../components/Login.js';

export default class Home extends Component
{
  render(){
    return(

      <div class="root">
        <Login />
      </div>
    )
  }
}
