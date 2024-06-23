import React, { useContext } from "react";
import "./ProductDisplay.css";
import { assets } from "../Assests/assests";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div class="pd-left">
        <div class="pd-image-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div class="pd-image">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div class="pd-right">
        <h1>{product.name}</h1>
        <div class="star">
          <img src={assets.star_icon} alt="" />
          <img src={assets.star_icon} alt="" />
          <img src={assets.star_icon} alt="" />
          <img src={assets.star_icon} alt="" />
          <img src={assets.star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div class="pd-price">
          <div class="pd-price-old">${product.old_price}</div>
          <div class="pd-price-new">${product.new_price}</div>
        </div>
        <p className="pd-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          consequatur eveniet unde eligendi qui? Quaerat porro voluptates rem
          iste, at nam minima perferendis, illo incidunt, doloribus deleniti?
          Dicta, aspernatur corrupti.
        </p>
        <div class="pd-sizes">
          <h3>Select Size</h3>
          <div className="pd-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          className="cart"
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <div>
          <p className="pd-category">
            <span>Category : </span>Women,T-shirt,Crop Top
          </p>
          <p className="pd-tags">
            <span> Tags :</span>Modern,Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
