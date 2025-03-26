/* eslint-disable no-unused-vars */
import React from "react";
import { Products } from "./productArray";
import { v4 as uuidv4 } from "uuid";
import "./card.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import ScrollVelocity from "../animations/ScrollVelocity";

import { addcart } from "../features/cart/SliceCart";
import { useDispatch } from "react-redux";
import Herosection from "../componenets/Herosection";
import DecryptedText from "../animations/DecryptedText";
import TiltedCard from "../animations/TiltedCard";
import CountUp from "../animations/CountUp";
import { FaPerson } from "react-icons/fa6";
import { IoBarChartOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { useEffect } from "react";
import Fotter from "../componenets/Fotter";
const velocity = 100;
// Define velocity with an appropriate value

export default function Cards() {
  const dispatch = useDispatch();

  const addCart = (img, title, price) => {
    const item = {
      id: uuidv4(),
      img: img,
      title: title,
      price: price,
    };
    dispatch(addcart(item));
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Herosection />

      <div className="cards-container">
        {Products.map((product, id) => (
          <div className="card" key={id}>
            <div className="card-img">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="card-title">{product.title}</div>
            <div className="card-subtitle">{product.description}</div>
            <hr className="card-divider" />
            <div className="card-footer">
              <div className="card-price">
                <span>$</span> {product.price}
              </div>
              <button
                className="card-btn"
                onClick={() =>
                  addCart(product.img, product.title, product.price)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="card-icon"
                >
                  <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                  <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                  <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                  <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* VELOCIIITYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY */}
      <div className="velocity-container">
        <ScrollVelocity
          texts={["Electronics", "Clothes"]}
          velocity={velocity}
          className="custom-scroll-text"
        />
      </div>

      {/* 2 cards container/////////////////////// */}

      <div className="main-heading">
        <marquee behavior="scroll" direction="">
          {" "}
          <h1>Top Treanding</h1>{" "}
        </marquee>
      </div>

      <div className="sec-card-container">
        <div className="sec-one-card" data-aos="fade-right">
          <div className="img">
            <img
              src="https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <div className="heading">Headphone</div>
          <div className="title">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            blanditiis et quod beatae ad ullam recusandae eum labore minus
            harum.
          </div>
          <div className="btn">
            <button
              onClick={() =>
                addCart({
                  id: uuidv4,
                  title: "Headphone",
                  price: 199.99,
                  image:
                    "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
                })
              }
            >
              Buy
            </button>
            <div className="price">$199.9</div>
          </div>
        </div>

        <div className="sec-two-card" data-aos="fade-left">
          <div className="img">
            <img
              src="https://images.unsplash.com/3/www.madebyvadim.com.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <div className="heading">Men's Accessories</div>
          <div className="title">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            blanditiis et quod beatae ad ullam recusandae eum labore minus
            harum.
          </div>

          <div className="btn">
            <button
              onClick={() =>
                addCart({
                  id: uuidv4,
                  title: "Men's Accessories",
                  price: 200,
                  image:
                    "https://images.unsplash.com/3/www.madebyvadim.com.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
                })
              }
            >
              Buy
            </button>
            <div className="price">$200.00</div>
          </div>
        </div>
      </div>

      {/* Decripted text */}

      <div className="decript-text">
        {/* Example 3: Animate on view (runs once) */}
        <div style={{ marginTop: "4rem" }}>
          <DecryptedText
            text="Upgrade your tech with our premium electronics! Fast shipping, great prices, top brands, and reliable performance. Shop now for the latest gadgets!"
            animateOn="view"
            revealDirection="center"
          />
        </div>
      </div>

      {/* 3rddddddddd ccccaaaaaaaaarrrrrrrrrrrrrrddddddddddddddd  sssssssewcececcececetionnnnn */}
      <div className="thrd-card-sec">
        <div className="cards-container">
          {Products.map((product, id) => (
            <div className="card" key={id}>
              <div className="card-img">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="card-title">{product.title}</div>
              <div className="card-subtitle">{product.description}</div>
              <hr className="card-divider" />
              <div className="card-footer">
                <div className="card-price">
                  <span>$</span> {product.price}
                </div>
                <button
                  className="card-btn"
                  onClick={() =>
                    addCart(product.img, product.title, product.price)
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="card-icon"
                  >
                    <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                    <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                    <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                    <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* textttttttttttttttt  &&&&&&&&&&&&&&   pRODUCTTTTTTTTTTTTTTT -CONTAINERRRRRRRRR */}

      <div className="text-prod-container">
        <div className="main-heading">
          <marquee behavior="scroll" direction="">
            {" "}
            <h1>Top Selling Products</h1>{" "}
          </marquee>
        </div>
        <div className="text-prod-container1">
          <div className="text-container" data-aos="fade-right">
            <div className="heading">Black Oudh</div>
            <div className="title">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
              perspiciatis vitae sapiente consequuntur velit sequi unde
              consectetur minus blanditiis dicta provident doloribus neque,
              cupiditate impedit sint, fuga quam dignissimos, id quos?
              Asperiores aut explicabo magni ipsa fuga, ipsum dolor?
              Voluptatibus ducimus iste numquam pariatur vitae dignissimos
              minus, sequi rerum nostrum.
            </div>

            <div className="btn">
              <button
                onClick={() =>
                  addCart({
                    id: uuidv4,
                    title: "Black oudh",
                    price: 150,
                    image:
                      "https://images.unsplash.com/photo-1724157073080-fcffb8d6c956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcmZ1bWVzfGVufDB8fDB8fHww",
                  })
                }
              >
                Buy
              </button>
              <div className="price">$150.00</div>
            </div>
          </div>

          <div className="img" data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1724157073080-fcffb8d6c956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcmZ1bWVzfGVufDB8fDB8fHww"
              alt=""
            />
          </div>
        </div>

        <div className="text-prod-container2">
          <div className="img" data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1632690642793-a270624dd20d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoZWxzZWElMjBib290c3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>

          <div className="text-container" data-aos="fade-left">
            <div className="heading">Chelsea Boots</div>
            <div className="title">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
              perspiciatis vitae sapiente consequuntur velit sequi unde
              consectetur minus blanditiis dicta provident doloribus neque,
              cupiditate impedit sint, fuga quam dignissimos, id quos?
              Asperiores aut explicabo magni ipsa fuga, ipsum dolor?
              Voluptatibus ducimus iste numquam pariatur vitae dignissimos
              minus, sequi rerum nostrum.
            </div>

            <div className="btn">
              <button
                onClick={() =>
                  addCart({
                    id: uuidv4,
                    title: "Chealse Boots",
                    price: 200,
                    image:
                      "https://images.unsplash.com/photo-1632690642793-a270624dd20d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoZWxzZWElMjBib290c3xlbnwwfHwwfHx8MA%3D%3D",
                  })
                }
              >
                Buy
              </button>
              <div className="price">$200.00</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tiled       cccccccccccaaaaaaaaaaaarrrrrrrrrrddddd
       */}

      <div className="tiled-card" data-aos="fade-up">
        <TiltedCard
          imageSrc="https://plus.unsplash.com/premium_photo-1671656349240-c2dac4acfc2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJlc3MlMjBwZW50c2hpcnR8ZW58MHx8MHx8fDA%3D"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Baggy Style T-Shirt ($10)"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={<p className="tilted-card-demo-text"></p>}
        />
        <TiltedCard
          imageSrc="https://images.unsplash.com/photo-1557690267-fad2f168bb95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vYmlsZSUyMHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Samsung S20 ($2100)"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={<p className="tilted-card-demo-text"></p>}
        />
        <TiltedCard
          imageSrc="https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="echanical Keyboard ($30)"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={<p className="tilted-card-demo-text"></p>}
        />
      </div>

      {/* COUNTER */}

      <div className="counter-container">




        <div className="count1 count" data-aos="fade-right" >
          <div className="name">Cutomer <FaPerson /></div>
          <CountUp
            from={0}
            to={50000}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
          />
        </div>
        <div className="count2 count" data-aos="fade-up">
        <div className="name">Sales <IoBarChartOutline /></div>
          <CountUp  
            from={0}
            to={100000}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
          />
        </div>
        <div className="count3 count" data-aos="fade-left">
        <div className="name">Outlets <CiShop /></div>
          <CountUp
            from={0}
            to={100}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
          />
        </div>
       
      </div>




      <div className="fotter">
      <Fotter/>
      </div>
    </>
  );
}
