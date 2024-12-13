import React from "react";
import "./../styles/LoginSignup.css";

const ForgetPasswordPage = () => {
  return (
    <div className="container">
      <div className="form-box">
        <h2>Forget Password</h2>
        <form>
          <div className="input-box">
            <input type="email" required />
            <label>Enter your email</label>
          </div>
          <button type="submit" className="btn">Send Reset Link</button>
          <p>
            Remembered your password? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
