import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
  
  render() {
    return (
      <div className="app">
        <h1>Counter: {this.state.counter}</h1>
        <MyComponent doThing={this.increment} />
      </div>
    );
  }
}

export default App;
