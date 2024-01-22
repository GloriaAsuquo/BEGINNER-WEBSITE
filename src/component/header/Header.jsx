// import React from "react";
import React, { useState } from "react";
import "./Header.css";
import { FiMenu } from "react-icons/fi";
// import { Link } from "react-router-dom";
import { GiEgyptianBird } from "react-icons/gi";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [click, setClick] = useState(false);

  const handleClick = () => {
    console.log("clicked");
    setClick(!click);
  };

  const closeNavbar = () => {
    setClick(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>
            HEUB
            <span>
              <GiEgyptianBird />
            </span>
            WL
            <br />
            Fairness
          </h2>
        </div>
        <ul className={click ? "navbar active" : "navbar"}>
          <li className={location.pathname === "/" ? "active" : ""}>
            <a href="/">home</a>
          </li>
          <li className={location.pathname === "contact" ? "active" : ""}>
            <a href="/contact">contact</a>
          </li>
          <li className={location.pathname === "blog" ? "active" : ""}>
            <a href="/blog">blog</a>
          </li>
          <li className={location.pathname === "package" ? "active" : ""}>
            <a href="/package">package</a>
          </li>
        </ul>
        <div className="menu-toggler" onClick={handleClick}>
          <FiMenu />
        </div>
      </div>
    </header>
  );
}
