import React, { Component } from 'react';
import './navbar.css';
import scrollFunction from '../../scripts/scroll'

const Navbar = () => {

  setInterval(scrollFunction, 10);
  
  return (
    <div className = "nav-container">
      <div className = "nav-links">
      <a href = "#home"><h1 id = "one-nav" className = "nav-link">Sign Up</h1></a>
      <a href = "#howitworks"><h1 id = "two-nav" className = "nav-link">How it Works</h1></a>
      <a href = "#contact"><h1 id = "three-nav" className = "nav-link">Contact</h1></a>
      </div>
    </div>
  );
}

export default Navbar;