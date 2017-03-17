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
      <Root>
      <Header />
        <div class="content">

          <div >
        <Paper class="LangPaper">
          <Menu class="LangMenu">
            <a href="#/login">
            <MenuItem class="LangMenuItem" primaryText="English" />
            </a>
            <MenuItem class="LangMenuItem" primaryText="Francais" />
            <MenuItem class="LangMenuItem" primaryText="العربية" />
          </Menu>
        </Paper>

        </div>

        </div>
        <Footer>
          <Tabs>
            <Tab
              icon={<FontIcon className="material-icons">phone</FontIcon>}
              label="RECENTS"
            />
            <Tab
              icon={<FontIcon className="material-icons">favorite</FontIcon>}
              label="FAVORITES"
            />
            <Tab
              icon={<MapsPersonPin />}
              label="NEARBY"
            />
          </Tabs>
        </Footer>
      </Root>
    )
  }
}
