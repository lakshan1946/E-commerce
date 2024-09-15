import React, { useContext, useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import Searchbar from "../Components/Searchbar/Searchbar";

const ShopCategory = (props) => {
  const { list, search, showSearch } = useContext(ShopContext);
  const [sortedList, setSortedList] = useState([]);

  // Sync the sorted list with the original list initially
  useEffect(() => {
    if (list) {
      setSortedList(list);
    }
  }, [list]);

  // Get category count
  const categoryCount = sortedList.filter(
    (item) => item.category === props.category
  ).length;

  // Sort products
  const sortProduct = (sortType) => {
    let sorted;
    switch (sortType) {
      case "low-high":
        sorted = [...list].sort((a, b) => a.new_price - b.new_price); // Non-mutating sort
        break;
      case "high-low":
        sorted = [...list].sort((a, b) => b.new_price - a.new_price); // Non-mutating sort
        break;
      default:
        sorted = list; // Default to original list
        break;
    }
    setSortedList(sorted);
  };

  // Search function
  useEffect(() => {
    if (showSearch && search) {
      const filteredProducts = list.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setSortedList(filteredProducts);
    } else {
      setSortedList(list); // Reset to the original list if search is cleared
    }
  }, [list, search, showSearch]);

  return (
    <div className="Shop-category">
      <img className="banner" src={props.banner} alt="" />
      <Searchbar />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{categoryCount} </span> out of {categoryCount}{" "}
          products
        </p>
        <div className="shopcategory-sort">
          <select onChange={(e) => sortProduct(e.target.value)}>
            <option value="">Sort by : Relevant</option>
            <option value="low-high">Sort by : Low to High</option>
            <option value="high-low">Sort by : High to Low</option>
          </select>
        </div>
      </div>

      <div className="shopcategory-products">
        {sortedList.map((item, index) => {
          if (props.category === item.category) {
            return (
              <Item
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="explore-btn">Explore More</div>
    </div>
  );
};

export default ShopCategory;
