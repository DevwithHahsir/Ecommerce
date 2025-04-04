import React from "react";
import "./herosections.css";
// import charmingGirl from "../image/fashion-portrait-gorgeous-woman-stylish-winter-fluffy-blue-coat-black-hat-posing-bright-grey-wall-removebg-preview.png";
import FadeContent from "../animations/FadeContent";
import { CiLocationArrow1 } from "react-icons/ci";
import Carousel from "../animations/Carousel";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function Herosection() {
  return (
    <>
      <div className="hero-main-container">
      
        
          <div className="herotext-btn">
            <div className="hero-text" data-aos="fade-right">Be iconic, be unforgettable.</div>
            <div className="btn">
              <a href="#trending">

              <button data-aos="fade-up">
                Start Shopping <br />
                <br /> <CiLocationArrow1 />
              </button>
              </a>
            </div>
          </div>
       

        {/* <div className="hero-img">
          <img src={charmingGirl} loading="lazyload" alt="Charming Girl" />
        </div> */}

        <div  className="hero-img" data-aos="fade-left" style={{ position: "relative" }}>
          <Carousel
            baseWidth={300}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
      </div>
    </>
  );
}

export default Herosection;
