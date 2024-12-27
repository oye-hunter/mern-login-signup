import React, { useState } from "react";
import "./../styles/LoginSignup.css";
import axios from "axios";

const OTP = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    // Reset previous states
    setError("");
    setSuccess("");

    // Check if OTP is valid (6 digits)
    if (!/^\d{6}$/.test(otp)) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      // Example API call to verify OTP
      const response = await axios.post(
        "http://localhost:5500/api/users/verify-otp",
        { otp },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // On success
      setSuccess("OTP verified successfully!");
      console.log("Server Response:", response.data);
    } catch (err) {
      // Handle errors
      setError(err.response?.data?.message || "An error occurred. Please try again.");
      console.error("Error:", err);
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Verify OTP</h2>

        {/* Success/Error Messages */}
        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={submitHandler}>
          <div className="input-box">
            <input
              type="text"
              placeholder=""
              required
              onChange={(e) => setOtp(e.target.value)}
              value={otp}
              maxLength="6"
            />
            <label>One-Time Password</label>
          </div>

          <button type="submit" className="btn">Verify OTP</button>
          <p>
            Didn't receive the OTP? <a href="/resend-otp">Resend OTP</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default OTP;
