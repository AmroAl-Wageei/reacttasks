import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.isSuccess ? 'Success!' : 'Error!'}</h1>
      </div>
    );
  }
}

export default Message;
