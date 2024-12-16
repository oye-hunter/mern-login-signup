import React from "react";
import "./../styles/LoginSignup.css";

const LandingPage = () => {
  return (
    <div className="container">
      <div className="form-box">
        <h2>Welcome to the Landing Page</h2>
        <p>You are now logged in! Explore the features of our app.</p>
        <button className="btn" onClick={() => (window.location.href = "/")}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
