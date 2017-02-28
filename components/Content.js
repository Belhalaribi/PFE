import React, { Component } from 'react';

export default class Content extends Component
{
  render(){
    return(
      <div class="content">
        <input
          type="text"
          class="username"
          placeholder="Your ID" />
        <input
          class="password"
          type="password"
          placeholder="Your Password" />
      </div>
    )
  }
}
