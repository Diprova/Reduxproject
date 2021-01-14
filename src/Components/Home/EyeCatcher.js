import React, { useState, useEffect } from "react";
import fruitsnveggies from "../../assets/fruitsnveg.png";
import truck from "../../assets/truck.png";

const EyeCatcher = () => {
  const [interval, setIntervl] = useState(true);

  useEffect(() => {
    const change = setInterval(() => {
      setIntervl(!interval);
    }, 2000);
    return () => clearInterval(change);
  }, [interval]);

  return (
    <div>
      {interval ? (
        <div className="eyeCatcher1 container">
          <img src={fruitsnveggies} alt="fruits" className="fruits" />
          <h1>Fruits, grocceries and daily needs</h1>
        </div>
      ) : (
        <div className="eyeCatcher2 container">
          <img src={truck} alt="truck" className="truck" />
          <h1>
            <span className="spanClass">Next day </span>delivery of your order
          </h1>
        </div>
      )}
    </div>
  );
};
export default EyeCatcher;