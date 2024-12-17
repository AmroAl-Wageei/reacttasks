import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

export default function Route1() {
  const navStyle = {
    backgroundColor: '#333',
    padding: '10px'
  };

  const ulStyle = {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    display: 'flex',
    justifyContent: 'space-around'
  };

  const liStyle = {
    margin: '0'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    padding: '10px 20px'
  };

  const linkHoverStyle = {
    backgroundColor: '#575757',
    borderRadius: '4px'
  };

  return (
    <div>
      <Router>
        <div>
          <nav style={navStyle}>
            <ul style={ulStyle}>
              <li style={liStyle}>
                <Link to="/" style={linkStyle}>Home</Link>
              </li>
              <li style={liStyle}>
                <Link to="/about" style={{ ...linkStyle, ...linkHoverStyle }}>About</Link>
              </li>
              <li style={liStyle}>
            <Link to="/contact" style={linkStyle}>Contact</Link>              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
