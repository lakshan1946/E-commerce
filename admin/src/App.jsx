import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin/Admin";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Admin />
    </div>
  );
};

export default App;
