import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./Search.css";
import { assets } from "../Assests/assests";

const Searchbar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  return showSearch ? (
    <div class="searchbar-container">
      <div className="search-main">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          placeholder="Type to search..."
          class="search-input"
        />
        <button class="search-button">
          <img src={assets.search_icon} />
        </button>
      </div>
      <img
        className="close"
        onClick={() => setShowSearch(false)}
        src={assets.close}
      />
    </div>
  ) : null;
};

export default Searchbar;
