import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProduct from "../Components/RelatedPRoducts/RelatedProduct";

const Product = () => {
  const  {list}  = useContext(ShopContext)
  const { productId } = useParams();

  const product = list.find((e) => e._id === productId);
  if (!product) {
    // You can return a loading indicator or some placeholder here
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  );
};

export default Product;
