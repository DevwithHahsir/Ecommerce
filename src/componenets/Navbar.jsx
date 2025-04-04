import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { IoMdTrendingUp } from "react-icons/io";
import { FaSortAmountUpAlt } from "react-icons/fa";

export default function Navbar() {
  const count = useSelector((state) => state.cart.count);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation(); // Get the current route

  // Handle scroll to update the active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adjust for offset
      const sections = ["home", "trending", "top-selling", "contact"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyStore</Link>
      </div>

      <div className="navbar-links">
        <a
          href="/"
          className={activeSection === "home" ? "active" : ""}
        >
          <GoHome /> Home
        </a>
        <a
          href="#trending"
          className={activeSection === "trending" ? "active" : ""}
        >
         <IoMdTrendingUp /> Trending
        </a>
        <a
          href="#top-selling"
          className={activeSection === "top-selling" ? "active" : ""}
        >
          <FaSortAmountUpAlt />Top Selling
        </a>
        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
        >
          <FaPhoneAlt /> Contact
        </a>
      </div>

      <div className="cart">
        <Link
          to="/cart"
          className={location.pathname === "/cart" ? "active" : ""}
        >
          <FaShoppingCart /> {count}
        </Link>
      </div>
    </nav>
  );
}