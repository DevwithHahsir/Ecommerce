import React from "react";
import "./Footer.css";
import { FaTwitter, FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

function Fotter() {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-left">
        <div className="footer-logo heading">
          <h1>MyStore</h1>
        </div>
        <p className="footer-text">
          Heap automates the annoying parts of user analytics. No more manual anything. Just insights.
        </p>
        <div className="social-icons">
          <FaTwitter />
          <FaLinkedin />
          <FaFacebook />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h4>Explore</h4>
          <a href="#">Resources</a>
          <a href="#">Blog</a>
          <a href="#">Docs</a>
          <a href="#">Heap University</a>
          <a href="#">Pricing</a>
          <a href="#">Free Trial</a>
        </div>

        <div className="footer-column">
          <h4>Product</h4>
          <a href="#">Autocapture</a>
          <a href="#">Data Governance</a>
          <a href="#">Virtual Events</a>
          <a href="#">Virtual Users</a>
          <a href="#">Behavioral Analytics</a>
          <a href="#">Connect</a>
        </div>

        <div className="footer-column">
          <h4>Solutions</h4>
          <a href="#">Conversion Rate Optimization</a>
          <a href="#">Product Analytics</a>
          <a href="#">Build Your Own CDP</a>
          <a href="#">eCommerce</a>
          <a href="#">Financial Services</a>
          <a href="#">SaaS</a>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Partners</a>
          <a href="#">Customers</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p className="copyright">© 2019 Heap Inc.</p>
      <div className="legal-links">
        <a href="#">Security</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>
    </div>
  </footer>
  )
}

export default Fotter
