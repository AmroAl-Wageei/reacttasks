import React from 'react';


const StyledComponent = () => {
  const containerStyle = {
    backgroundColor: "lightblue",
    padding: "20px",
    borderRadius: "5px"
  };

  const headingStyle = {
    fontSize: "24px",
    color: "darkblue"
  };

  const paragraphStyle = {
    fontSize: "16px",
    color: "gray",
    lineHeight: "1.5"
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "orange",
    border: "none",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer"
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Orange Coding Academy</h1>
      <p style={paragraphStyle}>Welcome to the world of coding with React!</p>
      <button style={buttonStyle}>Get Started</button>
    </div>
  );
};

export default StyledComponent;
