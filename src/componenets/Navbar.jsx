/* eslint-disable no-unused-vars */
import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

import GooeyNav from "../animations/GooeyNav";

export default function Navbar() {
  // Access the count from the Redux state
  const count = useSelector((state) => state.cart.count);

  const items = [
    { label: "Home", icon: <GoHome />, href: "/" },
    { label: "Trending", icon: <GoHome />, href: "/" },
    { label: "Top Selling", icon: <GoHome />, href: "/" },
    { label: "Contact", icon: <FaPhoneAlt />, href: "/" },
    { label: "About US", icon: <FaPhoneAlt />, href: "/" },
    
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyStore</Link> {/* Link to the home page */}
      </div>

      <div style={{ position: "relative" }}>
        <GooeyNav
          items={items.map((item) => ({
            ...item,
            label: (
              <>
                {item.icon} {item.label}
              </>
            ),
          }))}
          animationTime={600}
          pCount={15}
          minDistance={20}
          maxDistance={42}
          maxRotate={75}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          timeVariance={300}
        />
      </div>

      <div className="cart">
        <Link to="/cart">
        <FaShoppingCart /> {count}
        </Link>
      </div>
    </nav>
  );
}
