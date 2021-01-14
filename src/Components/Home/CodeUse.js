import React from "react";
import Slider from "react-slick";
import nescafe from "../../assets/nescafe.webp";
import dairymilk from "../../assets/dairymilk.webp";
import chings from "../../assets/Chings-noodles.webp";
import cosmetics from "../../assets/cosmetics.webp";

const CodeUse = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="codeUse container">
      <Slider {...settings}>
        <div>
          <img src={nescafe} alt="img" />
        </div>
        <div>
          <img src={dairymilk} alt="img" />
        </div>
        <div>
          <img src={chings} alt="img" />
        </div>
        <div>
          <img src={cosmetics} alt="img" />
        </div>
      </Slider>
    </div>
  );
};

export default CodeUse;
