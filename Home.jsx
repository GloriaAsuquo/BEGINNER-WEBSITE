import React from "react";
import Header from "../../component/header/Header";
import First from "../../component/first/First";
import Products from "../../component/products/Products";

export default function home({ closeNavbar, handleClick, click }) {
  return (
    <div>
      <Header />
      <First />
      <Products />
    </div>
  );
}
