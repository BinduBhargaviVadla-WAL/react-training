import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class UseStateClassComp extends Component {
    // intialize the state object of this class in the constructor function 
  constructor() {
    super();
    this.state = {
      count: 0
    };
    //change the state by calling setState() passing the new object.
  }
  render() {
    return (
      <div className="App">
        <h1>Current count: {this.state.count}</h1>
        
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrement
        </button>
        <button onClick={() => this.setState({ count: 0 })}>
          Reset
        </button>
      </div>
    );
  }
}
