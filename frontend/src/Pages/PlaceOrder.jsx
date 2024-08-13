import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/PlaceOrder.css";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, list, cartItems, url } =
    useContext(ShopContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const onchangeHandler = (event) => {
    setData((data) => ({ ...data, [event.target.name]: event.target.value }));
  };
  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    console.log(orderItems);
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount(),
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    console.log(response);
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Something went wrong");
    }
  };
  console.log(data);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);
  return (
    <form onSubmit={placeOrder} action="" className="place-order">
      <div className="po-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            name="firstName"
            type="text"
            placeholder="First name"
            onChange={onchangeHandler}
            value={data.firstName}
            required
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last name"
            onChange={onchangeHandler}
            value={data.lastName}
            required
          />
        </div>
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={onchangeHandler}
          value={data.email}
          required
        />
        <input
          name="street"
          type="text"
          placeholder="Street"
          onChange={onchangeHandler}
          value={data.street}
          required
        />
        <div className="multi-fields">
          <input
            name="city"
            type="text"
            placeholder="City"
            onChange={onchangeHandler}
            value={data.city}
            required
          />
          <input
            name="state"
            type="text"
            placeholder="State"
            onChange={onchangeHandler}
            value={data.state}
            required
          />
        </div>
        <div className="multi-fields">
          <input
            name="zipCode"
            type="text"
            placeholder="Zip code"
            onChange={onchangeHandler}
            value={data.zipCode}
            required
          />
          <input
            name="country"
            type="text"
            placeholder="Country"
            onChange={onchangeHandler}
            value={data.country}
            required
          />
        </div>
        <input
          name="phone"
          type=""
          placeholder="Phone"
          onChange={onchangeHandler}
          value={data.phone}
          required
        />
      </div>
      <div className="po-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="ct-detail">
            <div className="ct-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="ct-details">
              <p>Delivery fee</p>
              <p>free</p>
            </div>
            <hr />
            <div className="ct-details">
              <b>Total</b>
              <b>${getTotalCartAmount()}</b>
            </div>
          </div>
          <button type="submit" className="cart-total-button">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
