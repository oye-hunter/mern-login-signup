import React from "react";
import "./../styles/LoginSignup.css";

const HomePage = () => {
  return (
    <div className="container">
      <div className="form-box">
        <h2>Welcome to Our App</h2>
        <p>Please log in or sign up to continue.</p>
        <div className="button-group">
          <button className="btn" onClick={() => (window.location.href = "/login")}>
            Login
          </button>
          <button className="btn" onClick={() => (window.location.href = "/signup")}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
