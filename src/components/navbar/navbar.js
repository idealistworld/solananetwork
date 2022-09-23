import React, { Component } from 'react';
import './navbar.css';
import scrollFunction from '../../scripts/scroll'

const Navbar = () => {

  setInterval(scrollFunction, 1);

  return (
    <div className = "nav-container">
      <div className = "nav-links">
      <h1 id = "one-nav" className = "nav-link">Sign Up</h1>
      <h1 id = "two-nav" className = "nav-link">How it Works</h1>
      <h1 id = "three-nav" className = "nav-link">Contact</h1>
      </div>
    </div>
  );
}

export default Navbar;