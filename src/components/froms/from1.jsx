// Step 1 : Set up a basic React class component
import React, { Component } from 'react';

class LoginForm extends Component {
    // Step 2
     constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  render() {
    return (
      <div>
        <h2>Login Form</h2>
        <form>
v   
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
