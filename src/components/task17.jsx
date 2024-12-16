import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    const styleImage = {
        width : "160px",
        height : "200px",
        borderRadius: "50%"
    }

    const main = {
        background: "#BFEFFF",
        border: "2px black solid",
        opacity: 0.9 ,
        color : "black",
        width : "180px",
        borderRadius: "10%",
        padding : "20px"
    };
    return (
      <div style={main}>
        <img src={this.props.avatar} alt="User Avatar"  style={styleImage}/>
        <h2>{this.props.name}</h2>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

export default UserProfile;
