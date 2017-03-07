import React, { Component } from 'react';

import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

export default class Footer extends Component
{
  render(){
    return(
      <div class="footer">
        BIAT&copy; 2017. All right reserved
      </div>
    )
  }
}
