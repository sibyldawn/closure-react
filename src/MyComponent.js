import React, { Component } from 'react';

export default class MyComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.doThing}>Click me</button>
      </div>
    );
  }
}