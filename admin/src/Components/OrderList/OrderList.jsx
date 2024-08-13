import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import "./OrderList.css";
import parcel_icon from "../../assets/parcel_icon.png";
const OrderList = ({ url }) => {
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.get(url + "/api/order/listOrders");
    if (response.data.success) {
      setData(response.data.orders);
    } else {
      console.log(response.data.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    console.log("event ", event.target.value);
    console.log("orderId ", orderId);
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });
    console.log(response.data);
    if (response.data.success) {
      await fetchOrders();
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="order-add">
      <h3>Order Page</h3>
      <div class="oder-list">
        {data.map((order, index) => {
          return (
            <div key={index} className="order-item">
              <img src={parcel_icon} alt="" />
              <div>
                <p class="order-item-food">
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " x" + item.quantity;
                    } else {
                      return item.name + " x" + item.quantity + ",";
                    }
                  })}
                </p>
                <p className="order-item-name">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <div class="order-item-address">
                  <p>{order.address.street + ","}</p>
                  <p>
                    {order.address.city +
                      "," +
                      order.address.state +
                      "," +
                      order.address.country +
                      "," +
                      order.address.zipCode}
                  </p>
                </div>
                <p className="order-item-phone">{order.address.phone}</p>
              </div>

              <p>Items: {order.items.length}</p>
              <p>${order.amount}</p>
              <select
                onChange={(event) => statusHandler(event, order._id)}
                value={order.status}
              >
                <option value="pending">pending</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderList;
