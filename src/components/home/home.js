import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import './home.css';
import icons from '../../images/home-icons.png';

const Home = () => {
  return (
    <div id="one-element" className="home-background">
      <div className="home-middle-container">
        <div className="home-middle-content">
        <h1 id="logo-mobile" className="logo">GoodLogoHere</h1>
          <div className="writing-logo">
            <div id="home-left" className="home-left">
              <h1 id="logo-desktop" className="logo">GoodLogoHere</h1>
              <h1 id="home-title" className="home-title">Grow your audience<br></br> and get paid.</h1>
              <p id="home-paragraph" className="home-paragraph">This is some text that is just going to take up space on the page.  this is just something htat is giong here for the puropse of things being here!!</p>
              <form id="submit-section" className="submit-section">
                <input className="signup-form" placeholder='example@gmail.com' type="text"></input>
                <button className="submit">Join Waitlist</button>
              </form>
            </div>
            <div id="home-right" className="home-right">
              <img className="home-icons" src={icons}></img>
            </div>
          </div>
        </div>
      </div>
      <Navbar></Navbar>
    </div>
  );
}

export default Home;
