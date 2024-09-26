import React, { useState, useEffect } from "react";
import "./Hero.css";
import { assets } from "../Assests/assests";

const Hero = () => {
  const images = [
    assets.hero_1,
    assets.hero_2,
    assets.hero_3,
    assets.hero_4,
    assets.hero_5,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToNewCollection = () => {
    const newCollectionSection = document.getElementById("new-collections");
    if (newCollectionSection) {
      newCollectionSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero">
      <div className="slider">
        <img src={images[currentImageIndex]} alt="slideshow" id="slideImg" />
      </div>
      <div className="overlay">
        <div className="hero-left">
          <div>
            <h1>Discover the Latest Trends in Fashion</h1>
            <p>
              Curated collections for every season. Shop now and stay ahead of
              the style curve!
            </p>
          </div>
          <div onClick={scrollToNewCollection} className="hero-latest-btn">
            <div>Latest collection</div>
            <img src={assets.arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
