import React from "react";
import maggi from "../../assets/maggi.jpg";
import aata from "../../assets/AashirvaadAata.jpg";
import tide from "../../assets/Tide.jpg";

const productDetails = [
  {
    currentPrice: "130",
    oldPrice: "139",
    image: maggi,
    quantity: "12 * 70g",
  },
  { currentPrice: "331", oldPrice: "375", image: aata, quantity: "10kg" },
  {
    currentPrice: "690",
    oldPrice: "724",
    image: tide,
    quantity: "7kg + 3kg",
  },
];

const Slide = () => {
  return (
    <div className="offerContainer container">
      {productDetails.map((item, index) => {
        return (
          <div className="product-detail" key={index}>
            <div className="header2">
              <h6>Our Price</h6>
              <h5> ₹ {item.currentPrice}</h5>
              <h6>
                MRP ₹<span className="oldPriceClass">{item.oldPrice}</span>
              </h6>
            </div>
            <div>
              <img
                src={item.image}
                alt="images"
                className="offerContainerImage"
              />
            </div>
            <div className="footer">{item.quantity}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Slide;
