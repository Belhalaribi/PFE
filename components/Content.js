import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


export default class Content extends Component
{
  render(){
    return(
      <div class="content">
        <div class="login">

          <TextField
            hintText="ID"
            floatingLabelText=""
            floatingLabelFixed={true}
            /><br />
            <TextField
              hintText="Password Field"
              floatingLabelText="Password"
              type="password"
             /><br />
          <div>
            <FlatButton
              class="Connect" label="Connect"  primary={true}
              backgroundColor="white"
              hoverColor="red"    />
            </div>
          <a href="" class="passchange">
             Forgot Your Password ?
          </a>

          <a href="" class="Help"> ? </a>
        </div>

      </div>
    )
  }
}
