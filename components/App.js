import React, { Component } from 'react';
import { render } from 'react-dom';
import Comp1 from './Comp1';
import s from '../styles/main.sass';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      degla: 5,
      numbers: [6],
    }
  }

  clickMe(n) {
    let newN = this.state.numbers;
    let newD = this.state.degla + n;

    newN.push(newD);

    this.setState({
      degla: newD,
      numbers: newN,
    })
  }

  getNumbers(){
    let res = this.state.numbers.map(function(item, index){
      return(
        <button key={"btn"+index}>{item}</button>
      )
    })
    return res;
  }

  render() {
    return(
      <div class="root">
        <div
          class="buttonz"
          onClick={this.clickMe.bind(this, 5)}
        >click me</div>
        {this.state.degla}
        {this.getNumbers()}
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
