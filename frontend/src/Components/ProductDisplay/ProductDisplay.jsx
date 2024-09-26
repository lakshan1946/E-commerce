import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import { assets } from "../Assests/assests";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const { img_url } = useContext(ShopContext);

  // State to keep track of the currently displayed image
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image); // Update the selected image
  };

  return (
    <div className="productdisplay">
      <div className="pd-left">
        <div className="pd-image-list">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={`${img_url}${image}`}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(image)} // Set selected image on click
            />
          ))}
        </div>
        <div className="pd-image">
          <img src={`${img_url}${selectedImage}`} alt="Selected" />{" "}
          {/* Display the selected image */}
        </div>
      </div>
      <div className="pd-right">
        <h1>{product.name}</h1>
        <div className="star">
          <img src={assets.star_icon} alt="" />
          <img src={assets.star_icon} alt="" />
          <img src={assets.star_icon} alt="" />
          <img src={assets.star_icon} alt="" />
          <img src={assets.star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div nonce="pd-price">
          <div className="pd-price-old">${product.old_price}</div>
          <div className="pd-price-new">${product.new_price}</div>
        </div>
        <p className="pd-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          consequatur eveniet unde eligendi qui? Quaerat porro voluptates rem
          iste, at nam minima perferendis, illo incidunt, doloribus deleniti?
          Dicta, aspernatur corrupti.
        </p>
        <div className="pd-sizes">
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
            addToCart(product._id);
          }}
        >
          ADD TO CART
        </button>
        <div>
          <p className="pd-category">
            <span>Category : </span>Women, T-shirt, Crop Top
          </p>
          <p className="pd-tags">
            <span> Tags :</span> Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
