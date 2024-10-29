import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../css/LoginSignup.css";

export default function Signup() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const addressRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const passwordRef = useRef(null);

  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phoneNumber);
  };

  const validatePassword = (password) => {
    const minLength = 8;
    return password.length >= minLength;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value.trim();
    const phoneNumber = phoneNumberRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setError("");
    console.log({
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email,
      address: addressRef.current.value,
      phoneNumber,
      password,
    });
  };

  return (
    <div className="login-signup-page">
      <div className="signup-container">
        <h1>StockQuest</h1>
        <div className="signup-box">
          <h2>Create a New Account!</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First name"
            ref={firstNameRef}
            required
          />
          <input
            type="text"
            placeholder="Last name"
            ref={lastNameRef}
            required
          />
          <input type="email" placeholder="Email" ref={emailRef} required />
          <input type="text" placeholder="Address" ref={addressRef} required />
          <input
            type="text"
            placeholder="Phone number"
            ref={phoneNumberRef}
            required
          />
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />

          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="signup-button">
            Register
          </button>
          <Link to="/login" className="login-link">
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
}
