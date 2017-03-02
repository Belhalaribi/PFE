import React, { Component } from 'react';

export default class Content extends Component
{
  render(){
    return(
      <div class="content">
        <div class="login">
          <input
            type="text"
            class="username"
            placeholder="Your ID" />
          <input
            class="password"
            type="password"
            placeholder="Your Password" />
          <a href="" class="passchange">
             Forgot Your Password ?
          </a>
          <a href="" class="Help"> ? </a>
        </div>

      </div>
    )
  }
}
