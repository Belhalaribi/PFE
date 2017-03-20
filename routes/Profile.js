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
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import SvgIcon from 'material-ui/SvgIcon';

export default class Profle extends Component
{

    constructor(){
      super();
      this.state = {
        open: false
      }
    }

    swipe = () => {
      this.setState({
        open: true
      })
    }

    handleClose = () => this.setState({open: false});
  render(){
    return(
      <Root>
      <AppBar class="Profile-AppBar"
          title="Profile"
          iconElementRight={<ContentLink />}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap	={this.swipe}
      />
      <SwipeMenu />

      </Root>
    )
  }
}
