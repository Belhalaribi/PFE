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
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';

import Login from '../components/Login.js';

export default class Home extends Component
{
  render(){
    return(
      <Root>
      <Header />
        <div class="content">

          <div class="Wrapper">
            <Paper class="LangPaper">
              <Menu class="LangMenu">
                <a href="#/login">
                <MenuItem class="LangMenuItem"
                  primaryText="Log In"
                  leftIcon={<RemoveRedEye />}
                />
                </a>
            <MenuItem
              class="LangMenuItem"
              primaryText="Location"
              leftIcon={<ContentLink />}

              />
            <MenuItem
               class="LangMenuItem"
               primaryText="Ads"
               leftIcon={<RemoveRedEye />}
               />
             </Menu>
          </Paper>
        </div>
      </div>

      <Footer>
      </Footer>

      {/*  <div>

          <Paper >
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
              <BottomNavigationItem
                label="Recents"
                icon={recentsIcon}
                onTouchTap={() => this.select(0)}
              />
              <BottomNavigationItem
                label="Favorites"
                icon={favoritesIcon}
                onTouchTap={() => this.select(1)}
              />
            <BottomNavigationItem
              label="Nearby"
              icon={nearbyIcon}
              onTouchTap={() => this.select(2)}
              />
            </BottomNavigation>
      </Paper>


           export default BottomNavigationExampleSimple;
        </div>*/}


   {/*<Footer>
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
        </Footer>*/}

      </Root>


    )
  }
}
