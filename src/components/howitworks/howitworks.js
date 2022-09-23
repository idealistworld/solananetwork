import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import './howitworks.css';
import camera from '../../images/camera.png'
import message from '../../images/message.png'
import coin from '../../images/coin.png'

const Howitworks = () => {
    return (
        <div id = "two-element" className="howitworks-background">
            <div className="howitworks-middle-container">
                <div className="howitworks-middle-content">
                    <div className="card-pack">
                        <div className="card create-card">
                            <img id="camera" src={camera}></img>
                            <div className="camera-glow"></div>
                            <div className="card-paragraph-container">
                                <p className="card-paragraph">This is a thing explainging waht this tep does in detail.  this is a very cool paragraph thing.  Wow this is such a good producT!  so manazying!  Wow so great!  OMg this is cool!  This is a thing explainging waht this tep does in detail.  this is a very cool paragraph thing.</p>
                            </div>
                            <h1 className='card-title create'>Create Content</h1>
                        </div>
                        <div className="card message-card">
                            <img id="message" src={message}></img>
                            <div className="message-glow"></div>
                            <div className="card-paragraph-container">
                                <p className="card-paragraph">This is a thing explainging waht this tep does in detail.  this is a very cool paragraph thing.  Wow this is such a good producT!  so manazying!  Wow so great!  OMg this is cool!  This is a thing explainging waht this tep does in detail.  this is a very cool paragraph thing.</p>
                            </div>
                            <h1 className='card-title share'>Share Content</h1>
                        </div>
                        <div className="card coin-card">
                            <img id="coin" src={coin}></img>
                            <div className="coin-glow"></div>
                            <div className="card-paragraph-container">
                                <p className="card-paragraph">This is a thing explainging waht this tep does in detail.  this is a very cool paragraph thing.  Wow this is such a good producT!  so manazying!  Wow so great!  OMg this is cool!  This is a thing explainging waht this tep does in detail.  this is a very cool paragraph thing.</p>
                            </div>
                            <h1 className='card-title rewarded'>Get Rewarded</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Howitworks;
