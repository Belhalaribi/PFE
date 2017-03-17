import React, { Component } from 'react';
import classnames from 'classnames';

export default class Login extends Component
{
  render(){
    return(
      <div class="login-section">
        <div class="login-form">
          <input class="id" type="text" value=""/>
          <input class="pwd" type="password" value=""/>
        </div>
        <div class="login-toggle">^</div>
        <button class="login-button">Login</button>
      </div>
    )
  }
}
