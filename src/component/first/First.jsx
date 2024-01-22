import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sdata from "./Sdata";
import img1 from "../image/today3.jpeg";
import img2 from "../image/gardern.jpeg";
import "./First.css";

export default function first() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    // <div>
    <div>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <div className="box" key={index}>
              <div className="left">
                <h1>{value.title}</h1>
                <h2>{value.location}</h2>
                <h2>{value.price}</h2>
                <p>{value.desc}</p>
                <button className="btn-primary">VIEW OUR MENUE</button>
              </div>
              <div className="right">
                <img src={value.cover} alt="" />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
