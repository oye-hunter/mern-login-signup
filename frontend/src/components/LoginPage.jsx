import React from "react";
import "./../styles/LoginSignup.css";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="form-box">
        <h2>Login</h2>
        <form>
          <div className="input-box">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="password" required />
            <label>Password</label>
          </div>
          <button type="submit" className="btn">Login</button>
          <p>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
          <p>
  Forgot your password? <a href="/forget-password">Reset here</a>
</p>

        </form>
      </div>
    </div>
  );
};

export default LoginPage;
