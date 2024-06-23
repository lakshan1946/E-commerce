import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../Components/Assests/assests";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="Shop-category">
      <img className="banner" src={props.banner} alt="" />
      <div class="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div class="shopcategory-sort">
          Sort by <img src={assets.dropdown_icon} alt="" />
        </div>
      </div>

      <div class="shopcategory-products">
        {all_product.map((item, index) => {
          if (props.category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
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
      <div class="explore-btn">Explore More</div>
    </div>
  );
};

export default ShopCategory;
