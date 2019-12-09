import React, { Component } from 'react';
import Matrix from './Matrix.js';

export default class Cell extends Component {


  constructor(props) {
    super()
      this.state = {
        color: props.value
      } // ...define initial state with a key of 'color' set to the 'value' prop
  }

  stateChanger = () => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div className="cell" onClick={this.stateChanger} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
