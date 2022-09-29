import './App.css';
import React, { Component } from 'react';
import Home from './components/home/home.js'
import Howitworks from './components/howitworks/howitworks';
import Contact from './components/contact/contact'

function App() { 
  return (
    <div className="App container">
      <section id = "home" className="child"><Home></Home></section>
      <section id = "howitworks" className="child"><Howitworks></Howitworks></section>
      <section id = "contact" className="child"><Contact></Contact></section>
    </div>
  );
}

export default App;
