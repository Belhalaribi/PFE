import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';
import Swipeable from 'react-swipeable';

export default class SwipeMenu extends Component
{

  constructor(){
    super();
    this.state = {
      open: false
    }
  }

  swipe = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => this.setState({open: false});

  render(){
    return(
      <Swipeable class="swipe-menu"
        onSwipedRight={this.swipe}>
        <Drawer
          width={150}
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          children="ill"
          children="bill"


          >
        </Drawer>

      </Swipeable>
    )
  }
}
