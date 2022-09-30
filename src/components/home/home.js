import React, { useState } from 'react';
import Navbar from '../navbar/navbar';
import './home.css';
import icons from '../../images/home-icons.png';
import { app, database } from '../../firebase';
import { addDoc, collection, Timestamp } from 'firebase/firestore';


const Home = () => {
  const [data, setData] = useState({});
  const collectionRef = collection(database, "emails");

  const handleInput = (event) => {
    let newInupt = { [event.target.name]: event.target.value }
    setData({ ...data, ...newInupt });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addDoc(collectionRef, { email: data.email }).then(() => { document.getElementById("email-input").value = "Your email has been added." });
  }

  return (

    <div id="one-element" className="home-background">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <div className="home-middle-container">
        <div className="home-middle-content">
          <h1 id="logo-mobile" className="logo">GetCascade.me</h1>
          <div className="writing-logo">
            <div id="home-left" className="home-left">
              <h1 id="logo-desktop" className="logo">GetCascade.me</h1>
              <h1 id="home-title" className="home-title">Grow your audience<br></br> and get paid.</h1>
              <p id="home-paragraph" className="home-paragraph">This is some text that is just going to take up space on the page.  this is just something htat is giong here for the puropse of things being here!!</p>
              <form id="submit-section" className="submit-section">
                <input id="email-input" name="email" onChange={(event) => handleInput(event)} className="signup-form" placeholder='example@gmail.com' type="text"></input>
                <button onClick={(event) => handleSubmit(event)} className="submit">Join Waitlist</button>
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
