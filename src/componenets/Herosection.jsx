import React from "react";
import "./herosections.css";
import charmingGirl from "../image/fashion-portrait-gorgeous-woman-stylish-winter-fluffy-blue-coat-black-hat-posing-bright-grey-wall-removebg-preview.png";


function Herosection() {
  return (
    <>
      <div className="hero-main-container">
        <div className="hero-text">
        Be iconic, be unforgettable.
       
        </div>


        <div className="hero-img">
          <img src={charmingGirl} loading="lazyload" alt="Charming Girl" />
        </div>
      </div>
    </>
  );
}

export default Herosection;
