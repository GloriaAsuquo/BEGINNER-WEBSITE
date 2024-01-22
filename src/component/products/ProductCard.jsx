import React from "react";
import "./Product.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="">
        <h2>{product.title}</h2>
      </div>
      <img width={200} height={200} src={product.thumbnail} alt="" />
    </div>
  );
};

export default ProductCard;
