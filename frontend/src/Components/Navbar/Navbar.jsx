import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../Assests/assests";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const { getTotalCartItems, token, setToken, setShowSearch } =
    useContext(ShopContext);
  const menuref = useRef();
  const navigate = useNavigate();

  const dropdown_toggle = (e) => {
    menuref.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
  };
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="navbar-logo">
          <img src={assets.logo} alt="" />
          <p> SHOPPER</p>
        </div>
      </Link>

      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={assets.dropdown_icon}
        alt=""
      />
      <ul ref={menuref} className="nav-menu">
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
      <div className="nav-login-cart">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="search"
        />
        {!token ? (
          <Link style={{ textDecoration: "none" }} to="/login">
            <button>Login</button>
          </Link>
        ) : (
          <div className="nav-profile">
            <img src={assets.profile_icon} alt="" />
            <div className="nav-profile-dropdown">
              <button
                onClick={() => {
                  navigate("/myorders");
                }}
                className="nav-btn"
              >
                Oders
              </button>
              <hr />
              <button onClick={logout} className="nav-btn">
                Log out
              </button>
            </div>
          </div>
        )}

        <Link to="/cart">
          <img src={assets.cart_icon} alt="" />
        </Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
