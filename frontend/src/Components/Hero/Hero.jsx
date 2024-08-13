import React from "react";
import "./Hero.css";
import { assets } from "../Assests/assests";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={assets.hand_icon} alt="" />
          </div>
          <p>collections </p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest collection</div>
          <img src={assets.arrow} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={assets.hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
