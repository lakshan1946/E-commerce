import React from "react";
import "./NewsLetter.css";
import { assets } from "../Assests/assests";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated.</p>
      <div className="email">
        <input type="email" placeholder="Your email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
