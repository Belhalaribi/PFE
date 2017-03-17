import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Header from '../components/Header.js';
import Content from '../components/Content.js';
import Footer from '../components/Footer.js';
import Root from '../components/Root.js';
import SwipeMenu from '../components/SwipeMenu.js';

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

export default class Profle extends Component
{
  render(){
    return(
      <Root>
      <Header>
        <div>

        </div>
      </Header>
      <SwipeMenu />

        </Root>
    )
  }
}
