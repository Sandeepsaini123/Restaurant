import React from 'react';
import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>FOOD RESTRO</h2>
          <p>Delicious Food, Cozy Atmosphere</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📍 H-169 Noida, Ghaziabad U.P.</p>
          <p>📞 +1 234 567 890</p>
          <p>✉️ info@foodrestro.com</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us On</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagramSquare /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Restaurant Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
