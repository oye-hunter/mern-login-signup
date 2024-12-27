import React, { useState } from "react";
import "./../styles/LoginSignup.css";
import axios from "axios";

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    // Reset previous states
    setError("");
    setSuccess("");

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    try {
      // Example API call to reset password
      const response = await axios.post(
        "http://localhost:5500/api/users/reset-password",
        { password: newPassword },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // On success
      setSuccess("Password has been reset successfully!");
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
        <h2>Reset Password</h2>

        {/* Success/Error Messages */}
        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={submitHandler}>
          <div className="input-box">
            <input
              type="password"
              required
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
            />
            <label>New Password</label>
          </div>

          <div className="input-box">
            <input
              type="password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
            <label>Confirm Password</label>
          </div>

          <button type="submit" className="btn">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
