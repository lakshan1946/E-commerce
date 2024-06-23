import React from "react";
import "./Breadcrum.css";
import { assets } from "../Assests/assests";

const Breadcrum = ({ product }) => {
  return (
    <div className="breadcrum">
      HOME <img src={assets.breadcrum_arrow} alt="" /> shop{" "}
      <img src={assets.breadcrum_arrow} alt="" /> {product.category}{" "}
      <img src={assets.breadcrum_arrow} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
