import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import './howitworks.css';
import camera from '../../images/camera.png'
import message from '../../images/message.png'
import coin from '../../images/coin.png'

const Howitworks = () => {
    return (
        <div id="two-element" className="howitworks-background">
            <div className="howitworks-middle-container">
                <div className="howitworks-middle-content">
                    <div className="card-pack">
                        <div className="card create-card">
                        <div className = "card-icon">
                                <img id="camera" src={camera}></img>
                                <div className="camera-glow"></div>
                            </div>
                            <div className="card-content">
                            <h1 className='card-title create'>Create Content</h1>
                                <div className="card-paragraph-container">
                                    <p className="card-paragraph">This is a thing explainging waht this tep does in detail.  this is a very cool paragraph thing.  Wow this is such a good producT!  so manazying!  Wow so great!</p>
                                </div>
                            </div>
                        </div>
                        <div className="card message-card">
                        <div className = "card-icon">
                                <img id="message" src={message}></img>
                                <div className="message-glow"></div>
                            </div>
                            <div className="card-content">
                            <h1 className='card-title share'>Share Content</h1>
                                <div className="card-paragraph-container">
                                    <p className="card-paragraph">This is a thing explainging waht this tep does in detail.  this is a very cool paragraph thing.  Wow this is such a good producT!  so manazying!  Wow so great!</p>
                                </div>
                            </div>
                        </div>
                        <div className="card coin-card">
                            <div className = "card-icon">
                                <img id="coin" src={coin}></img>
                                <div className="coin-glow"></div>
                            </div>
                            <div className="card-content">
                            <h1 className='card-title rewarded'>Get Rewarded</h1>
                                <div className="card-paragraph-container">
                                    <p className="card-paragraph">This is a thing explainging waht this tep does in detail.  this is a very cool paragraph thing.  Wow this is such a good producT!  so manazying!  Wow so great!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Howitworks;
