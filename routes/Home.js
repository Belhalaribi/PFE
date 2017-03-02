import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Header from '../components/Header.js';
import Content from '../components/Content.js';
import Footer from '../components/Footer.js';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


export default class Home extends Component
{
  render(){
    return(
      <div class="root">
      <Header />
        <div class="content">
          
          <div >
        <Paper class="LangPaper">
          <Menu class="LangMenu">
            <MenuItem class="LangMenuItem" primaryText="English" />
            <MenuItem class="LangMenuItem" primaryText="Francais" />
            <MenuItem class="LangMenuItem" primaryText="العربية" />
          </Menu>
        </Paper>

        </div>
        </div>
        <Footer />
      </div>
    )
  }
}
