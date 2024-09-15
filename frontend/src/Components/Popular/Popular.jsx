import React, { useContext } from "react";
import "./Popular.css";
import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";

export const Popular = () => {
  const { list } = useContext(ShopContext);
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-items">
        {list
          .filter((item) => item.category === "women")
          .slice(0, 4)
          .map((item, index) => {
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
          })}
      </div>
    </div>
  );
};
