import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/LoginSignup.css";
import axios from "axios";
export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (input) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;
    return emailPattern.test(input) || phonePattern.test(input);
  };

  const validatePassword = (password) => {
    const minLength = 8;
    return password.length >= minLength;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Enter a valid email");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setError("");

    const userData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:7000/login",
        userData
      );

      if (response.status === 200) {
        console.log("User Login successfull");
        emailRef.current.value = "";
        passwordRef.current.value = "";

        navigate("/dashboard");
      } else {
        setError("Failed to register.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(
        error.response?.data?.message ||
          "An error occurred. Please try again later."
      );
    }
  };

  return (
    <div className="login-signup-page">
      <div className="login-container">
        <h1>StockScholar</h1>
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="email"
              placeholder="Enter Email"
              ref={emailRef}
              required
            />
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              ref={passwordRef}
              required
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="signup-button">
              Log in
            </button>
            <Link to="/signup" className="signup-link">
              Sign up
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
