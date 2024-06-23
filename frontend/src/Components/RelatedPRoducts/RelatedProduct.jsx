import React from "react";
import "./RelatedProducts.css";
import data_product from "../Assests/data";
import Item from "../Item/Item";

const RelatedProduct = () => {
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div class="rp-item">
        {data_product.map((item, index) => {
          return (
            <Item
              index
              id={item.id}
              name={item.name}
              image={item.image}
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
