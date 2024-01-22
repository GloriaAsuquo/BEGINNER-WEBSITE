import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DetailsSlider = ({ img }) => {
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
  console.log(img.images);
  return (
    <Slider {...settings}>
      {img?.images?.map((img) => (
        <img
          key={img}
          width={300}
          height={500}
          src={img}
          style={{ objectFit: "contain" }}
          alt=""
        />
      ))}
    </Slider>
  );
};

export default DetailsSlider;
