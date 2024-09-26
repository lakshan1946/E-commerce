import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import { assets } from "../Assests/assests";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const { cartItems, removeFromCart, getTotalCartAmount, list, img_url } =
    useContext(ShopContext);

  const navigate = useNavigate();

  return (
    <div className="cartitems">
      <div className="ci-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {list.map((item, index) => {
        if (cartItems[item._id] > 0) {
          return (
            <div key={index}>
              <div className="ci-format ci-format-main">
                <img
                  src={img_url + item.images[0]}
                  alt=""
                  className="ci-product-icon"
                />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <button>{cartItems[item._id]}</button>
                <p>${item.new_price * cartItems[item._id]}</p>
                <img
                  className="ci-remove-icon"
                  onClick={() => {
                    removeFromCart(item._id);
                  }}
                  src={assets.remove_icon}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="ci-down">
        <div className="ci-totals">
          <h1>Cart Totals</h1>
          <div className="ci-total-items">
            <div className="ci-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="ci-shipping">
              <p>Shipping free</p>
              <p>free</p>
            </div>
            <hr />
            <div className="ci-total">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button
            onClick={() => {
              navigate("/order");
            }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="ci-promo">
          <p>if you have a promo code,Enter it here</p>
          <div className="ci-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
