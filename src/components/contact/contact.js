import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import './contact.css';
import next from '../../images/next.png'

const Contact = () => {
    return (
        <div id = "three-element" className = "contact-background">
            <div className = "contact-middle-container">
                <div className = "contact-middle-content">
                    <img className = "next-arrow" src={next}></img>
                    <h1 className = "contact-title">Let's get Talking</h1>
                    <div className = "contact-paragraph-container">
                        <p className = "contact-paragraph">This is some text that is just going to take up space on the page.  this is just something htat is giong here for the puropse of things being here!!</p>
                        <div className = "contact-button-container">
                        <button className = "contact-button">Email</button>
                        <button className = "contact-button">Telegram</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
