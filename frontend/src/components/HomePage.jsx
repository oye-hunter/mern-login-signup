import React from "react";
import "./../styles/LoginSignup.css";

const HomePage = () => {
  return (
    <div className="container">
      <div className="form-box">
        <h2>Welcome to the Home Page</h2>
        <p>You're now logged in! Explore our features and enjoy your stay.</p>
        <button className="btn">Explore</button>
        <button className="btn" onClick={() => (window.location.href = "/login")}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
