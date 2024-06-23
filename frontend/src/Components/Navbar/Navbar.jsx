import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../Assests/assests";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuref = useRef();

  const dropdown_toggle = (e) => {
    menuref.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  return (
    <div className="navbar">
      <div class="navbar-logo">
        <img src={assets.logo} alt="" />
        <p> SHOPPER</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={assets.dropdown_icon}
        alt=""
      />
      <ul ref={menuref} class="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/">
            Shop
          </Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/mens">
            Men
          </Link>{" "}
          {menu === "men" && <hr />}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link
            style={{ textDecoration: "none", color: "#626262" }}
            to="womens"
          >
            Women
          </Link>
          {menu === "women" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: "none", color: "#626262" }} to="kids">
            Kids
          </Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>
      <div class="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={assets.cart_icon} alt="" />
        </Link>

        <div class="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
