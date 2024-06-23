import React from "react";
import "./Offer.css";
import { assets } from "../Assests/assests";

const Offer = () => {
  return (
    <div className="offer">
      <div class="offer-left">
        <h1>Exclusive </h1>
        <h1>Offer For You</h1>
        <p> ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check now</button>
      </div>
      <div class="offer-right">
        <img src={assets.exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offer;
