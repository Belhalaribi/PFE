import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Visibility from 'material-ui/svg-icons/action/visibility';
import IconButton from 'material-ui/IconButton';


export default class Content extends Component
{

  constructor(props){
    super(props);
    this.state = {
      pwdVisible: false
    }
  }

  togglePwd(){
    this.setState({
      pwdVisible: !this.state.pwdVisible
    })
  }

  render(){
    return(
      <div class="content">
        <div class="login">

          <TextField
            hintText="ID"
            floatingLabelText="ID"
            /><br />
            <TextField
              hintText="Password Field"
              floatingLabelText="Password"
              type={
                this.state.pwdVisible ?
                "text" :
                "password"}
             />
             <IconButton onTouchTap={this.togglePwd.bind(this)}>
               <Visibility />
             </IconButton>
          <div>
            <RaisedButton
              class="Connect" label="Connect"
              primary={true}
              backgroundColor="white"
              />
            </div>
          <a href="#/login" class="passchange">
             Forgot Your Password ?
          </a>

        </div>

      </div>
    )
  }
}
