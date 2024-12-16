import React, { Component } from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
  }

  change = () => {
    this.setState({ Amro: !this.state.Amro });
  };

  render() {
    return (
      <div>
        <h1>{this.state.Amro ? 'ON' : 'OFF'}</h1>
        <button onClick={this.change}>Change</button>
      </div>
    );
  }
}

export default Toggle;