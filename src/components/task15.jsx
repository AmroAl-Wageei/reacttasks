import React from 'react';

const Greeting = ({ isLoggedIn }) => {
  return <h1>{isLoggedIn ? "Welcome back!" : "Please log in"}</h1>;
};

export default Greeting;
