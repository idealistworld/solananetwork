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
                        <p className = "contact-paragraph">The project is in the early stages of development, so if you have feedback or would just like to chat, let’s connect!  Contact me using the links below!</p>
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
