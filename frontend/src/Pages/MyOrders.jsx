import React, { useContext, useEffect, useState } from "react";
import "./CSS/MyOrders.css";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";
import { assets } from "../Components/Assests/assests";

const MyOrders = () => {
  const { url, token } = useContext(ShopContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userOrders",
      {},
      { headers: { token } }
    );
    setData(response.data.orders);
  };
  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  console.log(data);
  return (
    <div className="my-orders">
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} class="my-orders-order">
              <img src={assets.parcel_icon} alt="" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items:{order.items.length}</p>
              <p>
                <span>&#x25cf;</span>
                <b>{order.status}</b>
              </p>
              <button onClick={() => fetchOrders()}>Track Order</button>
            </div>
          );
          // return (
          //
          //
          //     <button onClick={fetchOrders()}>Track Order</button>
          //
          // );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
