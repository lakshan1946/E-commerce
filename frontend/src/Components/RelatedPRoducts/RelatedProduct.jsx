import React, { useContext } from "react";
import "./RelatedProducts.css";
import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";

const RelatedProduct = ({ product }) => {
  const { list } = useContext(ShopContext);
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="rp-item">
        {list
          .filter((item) => item.category === product.category)
          .slice(0, 4)
          .map((item, index) => {
            return (
              <Item
                key={index}
                id={item._id}
                name={item.name}
                image={item.images[0]}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
      </div>
    </div>
  );
};

export default RelatedProduct;
