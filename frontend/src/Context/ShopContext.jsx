import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// Create a context for the shop
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [list, setList] = useState([]); // State to store the list of products
  const [cartItems, setCartItems] = useState({}); // State to store items in the cart
  const [token, setToken] = useState(""); // State to store the user's token
  const [search, setSearch] = useState(""); // State to store the search query
  const [showSearch, setShowSearch] = useState(false); // State to store the search visibility

  // API endpoints
  const url = "http://localhost:4000";
  const img_url = "http://localhost:4000/images/";

  // Function to fetch the list of products from the API
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/product/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };

  // Function to load the cart from the API
  const loadCart = async (token) => {
    const response = await axios.get(url + "/api/cart/get", {
      headers: { token },
    });
    setCartItems(response.data.cartData);
  };

  //Function to get the default cart items
  const getDefaultCart = () => {
    let cart = {};
    list.forEach((item) => {
      cart[item._id] = 0;
    });
    return cart;
  };

  // Function to add an item to the cart
  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
    }
  };

  // Function to calculate the total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  // Function to calculate the total number of items in the cart
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const getNewCollection = () => {
    let newCollection = list.slice(1).slice(-8);
    return newCollection;
  };

  //useEffect to load data on component mount
  useEffect(() => {
    async function loadData() {
      await fetchList();
      const token = localStorage.getItem("token");
      if (token) {
        setToken(token);
        await loadCart(token);
      }
    }
    loadData();
    setCartItems(getDefaultCart());
  }, []);

  // Context value to be provided to the components
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    fetchList,
    list,
    img_url,
    token,
    setToken,
    url,
    getNewCollection,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  // Provide the context value to the children components
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
