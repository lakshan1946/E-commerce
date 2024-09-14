import React, { useContext, useEffect, useState } from "react";

import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../Components/Assests/assests";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { list } = useContext(ShopContext);

  //get category count
  const categoryCount = list.filter(
    (item) => item.category === props.category
  ).length;

  return (
    <div className="Shop-category">
      <img className="banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{categoryCount} </span> out of {categoryCount}{" "}
          products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={assets.dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products">
        {list.map((item, index) => {
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
