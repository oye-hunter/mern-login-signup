import React, {useState} from "react";
import "./../styles/LoginSignup.css";
import axios from "axios";

const SignupPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      // Reset previous states
      setError("");

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Make API request to backend
      const { data } = await axios.post(
        "http://localhost:5500/api/users",
        { name, email, password },
        config
      );

      console.log(data);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred. Please try again.");
      console.error("Error:", err);
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Sign Up</h2>
        <form onSubmit={submitHandler}>
          <div className="input-box">
            <input type="text" required onChange={(e) => setName( e.target.value )} value={name} />
            <label>Full Name</label>
          </div>
          <div className="input-box">
            <input type="email" required onChange={(e) => setEmail( e.target.value )} value={email} />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="password" required onChange={(e) => setPassword( e.target.value )} value={password} />
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
