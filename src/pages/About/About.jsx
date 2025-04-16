import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container" id="about-container">
      <div className="about-content">
        <h1 className="about-title">Info About Me</h1>
        <p className="about-subtitle">Serving memories with every meal</p>

        <div className="about-flex">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Restaurant"
            className="about-image"
          />
          <div className="about-text">
            <h2>Welcome to My Restaurant</h2>
            <p>
              At My Restaurant, we believe in serving not just food,
              but memories. Our chefs craft each dish with passion and
              precision, using only the freshest ingredients.
            </p>
            <p>
              Whether you're here for a romantic dinner, a family gathering, or
              just to grab a bite with friends, we promise an unforgettable
              dining experience in a cozy, welcoming atmosphere.
            </p>
            <p>Come taste the love in every bite. Your table is waiting!</p>

            <div className="address-box">
              <h3>📍 Our Location</h3>
              <p>Sector 63 Noida Street, Foodville, Delicious City 456789</p>
              <p>Phone: +91 98765 43210</p>
              <p>Email: contact@myrestaurant.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
