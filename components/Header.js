import React, { Component } from 'react';

export default class Header extends Component
{
  render(){
    return(
      <div class="header">
        <div class="logo-wrapper">
          <div class="logo-placeholder">
            <span class="logo-text">
             BIAT
            </span>
          </div>
        </div>
        <div class="description">
            <div class="first-line">
              BIATNET mobile
            </div>
            <div class="second-line">
              Your hyper bank mobile
            </div>
        </div>
      </div>
    )
  }
}
