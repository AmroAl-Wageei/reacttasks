import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <nav>
          <a href="#home">Home</a> | <a href="#about">About</a>  | <a href="#about">Contact</a>
        </nav>
      </header>
    );
  }
}

export default Header;
