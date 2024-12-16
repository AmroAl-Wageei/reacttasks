import React, { Component } from 'react';

class HelloWorld extends Component {
  render() {
     return <h1>I Live in {this.props.location}</h1>;
  }
}

export default HelloWorld;
