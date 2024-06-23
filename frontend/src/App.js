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
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
