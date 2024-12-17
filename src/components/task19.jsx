import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>My Website</h1>
        <nav>
          <ul>
            <li><a href={this.props.homeLink}>Home</a></li>
            <li><a href={this.props.aboutLink}>About</a></li>
            <li><a href={this.props.servicesLink}>Services</a></li>
          </ul>
        </nav>
        <h2>Welcome to My Website!</h2>
      </header>
    );
  }
}

export default Header;
