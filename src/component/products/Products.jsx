import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./Product.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchedData = async () => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => setData(data.products))
        .catch((err) => console.log(err));
    };

    fetchedData();
  }, []);

  return (
    <div className="products">
      {data.map((item) => (
        <div
          key={item.id}
          className="fetch"
          onClick={() => navigate(`/products/${item.id}`, { state: item })}
        >
          <ProductCard product={item} />
        </div>
      ))}
    </div>
  );
};

export default Products;
