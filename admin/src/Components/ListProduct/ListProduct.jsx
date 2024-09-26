import React, { useEffect, useState } from "react";
import axios from "axios";

import "./ListProduct.css";
import { toast } from "react-toastify";

const ListProduct = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/product/list`);
    // console.log(response.data);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };
  const removeProduct = async (productid) => {
    const response = await axios.post(`${url}/api/product/remove`, {
      id: productid,
    });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <div className="lp-format-main lp-format">
        <p>Products</p>
        <p>Title</p>
        <p className="lp-three">Old Price</p>
        <p className="lp-four">New Price</p>
        <p className="lp-five">Category</p>
        <p className="">Remove</p>
      </div>
      <div className="lp-allproducts ">
        <hr className="hr-top" />
        {list.map((item, index) => {
          return (
            <div key={index} className="lp-all-item">
              <div className="lp-items lp-format-main">
                <img
                  className="lp-one"
                  src={`${url}/images/` + item.images[0]}
                  alt=""
                />
                <p className="lp-two">{item.name}</p>
                <p className="lp-three">{item.old_price}</p>
                <p className="lp-four">{item.new_price}</p>
                <p className="lp-five">{item.category}</p>
                <div className="lp-box lp-six">
                  <p onClick={() => removeProduct(item._id)} className="remove">
                    x
                  </p>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
