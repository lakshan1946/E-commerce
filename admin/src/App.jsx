import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin/Admin";

const App = () => {
  return (
    <div>
      <Theme>
        <ToastContainer />
        <Navbar />
        <Admin />
      </Theme>
    </div>
  );
};

export default App;
