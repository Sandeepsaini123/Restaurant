import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}      
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? <></> :<input type="text" placeholder="Your name" required />}

          <input type="emails" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>

        <button>{currState === "Login" ? "Login" : "Sign Up"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Continuing,I Agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p> 
            Create a New Account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Register</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login Here</span>
          </p>
        )} 
      </form>
    </div>
  );
};

export default LoginPopup;
