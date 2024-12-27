import React, { useState } from "react";
import "./../styles/LoginSignup.css";
// import { config } from "dotenv";
import axios from "axios";

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");



  const submitHandler = async (e) => {
    e.preventDefault();
    
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }
      const { data } = await axios.post(
        "http://localhost:5500/api/users/login",
        { email, password },
        config
      ); 
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      
      // navigate("/landing");
    }
    catch (error) {
      setError(error.response?.data?.message || "An unexpected error occurred.");
  }
  };
  return (
    <div className="container">
      <div className="form-box">
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <div className="input-box">
            <input type="email" required onChange={(e) => setEmail( e.target.value )} value={email}/>
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="password" required onChange={(e) => setPassword( e.target.value )} value={password}/>
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
