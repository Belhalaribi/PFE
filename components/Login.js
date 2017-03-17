import React, { Component } from 'react';
import classnames from 'classnames';

export default class Login extends Component
{

  constructor(){
    super();
    this.state = {
      loginHidden: true
    }
  }

  loginToggle = () => {
    this.setState({
      loginHidden: !this.state.loginHidden
    })
  }

  render(){
    return(
      <div class="login-section container">
        <div class="row">
          <div class="cl-s-2"></div>
          <div class={
            classnames({
              "login-form": true,
              "cl-s-8": true,
              "hidden": this.state.loginHidden
            })
          }>
            <input class="id" type="text" value=""/>
            <input class="pwd" type="password" value=""/>
            <div class="login-submit">
              <div class="login-button">Login</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="cl-s-2"></div>
          <div class="login-controls cl-s-8">
            <div class="login-toggle"
              onClick={this.loginToggle}
              >
                {
                  this.state.loginHidden ?
                  "Show":
                  "Hide"
                }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
