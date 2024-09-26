import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg";

const AddProduct = ({ url }) => {
  // Use an array to handle multiple images
  const [images, setImages] = useState([null, null, null, null]);
  const [data, setData] = useState({
    name: "",
    old_price: "",
    new_price: "",
    category: "women",
  });

  const imageHandler = (e, index) => {
    // Copy the images array and update the specific index with the new image
    const newImages = [...images];
    newImages[index] = e.target.files[0];
    setImages(newImages);
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("old_price", data.old_price);
    formData.append("new_price", data.new_price);
    formData.append("category", data.category);

    // Append each image to FormData with the same field name "images"
    images.forEach((image) => {
      if (image) {
        formData.append("images", image); // use "images" for all files
      }
    });

    try {
      const response = await axios.post(`${url}/api/product/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          old_price: "",
          new_price: "",
          category: "women",
        });
        setImages([null, null, null, null]); // Reset images
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error("Error uploading the product.");
    }
  };

  return (
    <div className="add-product">
      <form onSubmit={onSubmitHandler}>
        <div className="ap-itemfield">
          <p>Product title</p>
          <input
            value={data.name}
            onChange={changeHandler}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="ap-price">
          <div className="ap-itemfield">
            <p>Price</p>
            <input
              value={data.old_price}
              onChange={changeHandler}
              type="text"
              name="old_price"
              placeholder="Type here"
            />
          </div>
          <div className="ap-itemfield">
            <p>Offer Price</p>
            <input
              value={data.new_price}
              onChange={changeHandler}
              type="text"
              name="new_price"
              placeholder="Type here"
            />
          </div>
        </div>
        <div className="ap-itemfield">
          <p>Product Category</p>
          <select
            value={data.category}
            onChange={changeHandler}
            name="category"
            className="ap-selector"
          >
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
          </select>
        </div>

        <div className="images">
          {/* Render 4 image inputs */}
          {images.map((img, index) => (
            <div className="ap-itemfield" key={index}>
              <label htmlFor={`file-input${index}`}>
                <img
                  className="ap-thumbnail-img"
                  src={img ? URL.createObjectURL(img) : upload_area}
                  alt=""
                />
              </label>
              <input
                onChange={(e) => imageHandler(e, index)}
                type="file"
                name="images"
                id={`file-input${index}`}
                hidden
              />
            </div>
          ))}
        </div>

        <button type="submit" className="ap-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
