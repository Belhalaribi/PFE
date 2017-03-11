import React, { Component } from 'react';

let style = {
  height: window.screen.height+'px'
}

const Root = ({children}) => (
  <div class="root"
    style={style}
    >
    {children}
  </div>
)

export default Root;
