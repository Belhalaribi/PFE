pfeimport React, { Component } from 'react';

import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import {Tabs, Tab} from 'material-ui/Tabs';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
export default class NavBar extends Component
{
  render(){
    return(
      <div class="NavBar">
        <MenuItem class="LangMenuItem"
          primaryText="Log In"
          leftIcon={<RemoveRedEye />}>  
          </MenuItem>
      </div >
    )
  }
}
