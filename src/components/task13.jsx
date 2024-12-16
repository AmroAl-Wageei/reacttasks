import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  decrement = () => {
    this.setState({ count: this.state.count - 4 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
