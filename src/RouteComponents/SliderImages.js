import React from "react";
import Slider from "react-slick";

const SliderImages = ({ itemDetails }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={images[0]} />
        </div>
        <div>
          <img src={images[1]} />
        </div>
        <div>
          <img src={images[2]} />
        </div>
      </Slider>
    </div>
  );
};

export default SliderImages;
