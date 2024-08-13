import React from "react";
import "./Footer.css";
import { assets } from "../Assests/assests";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={assets.logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-menu">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-contact">
        <div className="box">
          <img src={assets.instagram_icon} alt="" />
        </div>
        <div className="box">
          <img src={assets.pintester_icon} alt="" />
        </div>
        <div className="box">
          <img src={assets.whatsapp_icon} alt="" />
        </div>
      </div>
      <hr />
      <p className="copyright">copyright @2023 - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
