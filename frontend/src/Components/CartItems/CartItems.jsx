import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import { assets } from "../Assests/assests";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <div className="cartitems">
      <div class="ci-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div>
              <div class="ci-format ci-format-main">
                <img src={item.image} alt="" className="ci-product-icon" />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <button>{cartItems[item.id]}</button>
                <p>${item.new_price * cartItems[item.id]}</p>
                <img
                  className="ci-remove-icon"
                  onClick={() => {
                    removeFromCart(item.id);
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
      <div class="ci-down">
        <div class="ci-totals">
          <h1>Cart Totals</h1>
          <div className="ci-total-items">
            <div class="ci-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div class="ci-shipping">
              <p>Shipping free</p>
              <p>free</p>
            </div>
            <hr />
            <div class="ci-total">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div class="ci-promo">
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
