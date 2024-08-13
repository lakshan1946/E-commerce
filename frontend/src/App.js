import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Footer from "./Components/Footer/Footer";
import { assets } from "./Components/Assests/assests";
import PlaceOrder from "./Pages/PlaceOrder";
import Verify from "./Pages/Verify";
import MyOrders from "./Pages/MyOrders";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/mens"
          element={<ShopCategory banner={assets.banner_men} category="men" />}
        />
        <Route
          path="/womens"
          element={
            <ShopCategory banner={assets.banner_women} category="women" />
          }
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={assets.banner_kids} category="kid" />}
        />
        <Route path="/product/:productId" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/myorders" element={<MyOrders />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
