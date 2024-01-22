import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import DetailsSlider from "./DetailsSlider";

const ProductDetails = () => {
  const location = useLocation();
  const [products, setProducts] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      await setProducts(location.state);
    };
    fetchData();
  }, []);

  console.log(products);
  return (
    <div className="cardD">
      <div className="dhead">
        <div className="images">
          <DetailsSlider img={products} />
        </div>
        <div className="headtop">
          <h3 className="headd">{products.title}</h3>
          <h6>{products.brand}</h6>
        </div>
      </div>
      <div className="details">
        <p className="desc"> {products.description}</p>
        <p>price: {products.price}</p>
        <div className="btn">add to cart</div>
      </div>
    </div>
  );
};

export default ProductDetails;
