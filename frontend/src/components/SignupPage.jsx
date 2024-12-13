import React from "react";
import "./../styles/LoginSignup.css";

const SignupPage = () => {
  return (
    <div className="container">
      <div className="form-box">
        <h2>Sign Up</h2>
        <form>
          <div className="input-box">
            <input type="text" required />
            <label>Full Name</label>
          </div>
          <div className="input-box">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="password" required />
            <label>Password</label>
          </div>
          <button type="submit" className="btn">Sign Up</button>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
