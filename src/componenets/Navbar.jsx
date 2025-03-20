/* eslint-disable no-unused-vars */
import React from "react";
import "./navbar.css";
import { href, Link } from "react-router-dom";
// import { useSelector } from "react-redux";

import GooeyNav from "../animations/GooeyNav";

export default function Navbar() {
  // Access the count from the Redux state
  // const count = useSelector((state) => state.cart.count);

  const items = [
    { label: "Home", href: "/" },
    // { label: "Cart", href: "/cart" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyStore</Link> {/* Link to the home page */}
      </div>

      <div style={{ position: "relative" }}>
        <GooeyNav
          items={items}
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
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}
