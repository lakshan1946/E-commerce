import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg";

const AddProduct = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    old_price: "",
    new_price: "",
    category: "women",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
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
    formData.append("image", image);
    const response = await axios.post(`${url}/api/product/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        old_price: "",
        new_price: "",
        category: "women",
      });
      setImage(false);
      console.log(response.data.message);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
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
            id=""
            className="ap-selector"
          >
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
          </select>
        </div>
        <div className="ap-itemfield">
          <label htmlFor="file-input">
            <img
              className="ap-thumbnail-img"
              src={image ? URL.createObjectURL(image) : upload_area}
              alt=""
            />
          </label>
          <input
            onChange={imageHandler}
            type="file"
            name="image"
            id="file-input"
            hidden
          />
        </div>
        <button type="submit" className="ap-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
