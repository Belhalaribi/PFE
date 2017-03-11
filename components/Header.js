import React, { Component } from 'react';

import logo from "../assets/biat.png";
import AppBar from 'material-ui/AppBar';


let style = {
  position: "relative",
  top: 0
}

export default class Header extends Component
{
  render(){
    return(
      <AppBar
        style={style}
        iconElementLeft={
          <div class="biat-logo">
            <img src={logo} />
          </div>
        }
        iconElementRight={<div> Deg </div>}
        zDepth={2}
      />
    )
  }
}
