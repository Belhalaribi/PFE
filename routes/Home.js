import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Header from '../components/Header.js';
import Content from '../components/Content.js';
import Footer from '../components/Footer.js';
import Root from '../components/Root.js';

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

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
