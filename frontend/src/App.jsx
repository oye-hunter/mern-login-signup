import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import ForgetPasswordPage from "./components/ForgetPasswordPage";

const App = () => {
  const isAuthenticated = false; // Replace with actual authentication logic

  return (
    <Router>
      <Routes>
        {/* Unauthenticated Home Page */}
        <Route path="/" element={isAuthenticated ? <LandingPage /> : <HomePage />} />
        {/* Authenticated Landing Page */}
        <Route path="/landing" element={<LandingPage />} />
        {/* Login, Signup, Forget Password */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
      </Routes>
    </Router>
  );
};

export default App;
