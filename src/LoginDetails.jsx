import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LoginDetails() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    aadhaarLast4: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          marginBottom: "30px",
          color: "black",
        }}
      >
        Fill Your Details 🐾
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "320px",
          backgroundColor: "#fefefe",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        }}
      >
        {/* Full Name */}
        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name (e.g., John Doe)"
          value={formData.fullName}
          onChange={handleChange}
          required
          style={{
            padding: "12px",
            borderRadius: "12px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "15px",
            transition: "0.2s",
            color: "#333",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#6c63ff")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter your email address (e.g., john@example.com)"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            padding: "12px",
            borderRadius: "12px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "15px",
            transition: "0.2s",
            color: "#333",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#6c63ff")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />

        {/* Phone Number */}
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number (e.g., +91 98765 43210)"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{
            padding: "12px",
            borderRadius: "12px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "15px",
            transition: "0.2s",
            color: "#333",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#6c63ff")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />

        {/* Aadhaar Last 4 digits */}
        <input
          type="text"
          name="aadhaarLast4"
          placeholder="Enter last 4 digits of Aadhaar (e.g., 1234)"
          value={formData.aadhaarLast4}
          onChange={handleChange}
          maxLength="4"
          required
          style={{
            padding: "12px",
            borderRadius: "12px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "15px",
            transition: "0.2s",
            color: "#333",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#6c63ff")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "12px",
            borderRadius: "12px",
            border: "none",
            backgroundColor: "#6c63ff",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Submit
        </motion.button>

        {/* 👇 New user message */}
        <p
          style={{
            marginTop: "15px",
            fontStyle: "italic",
            textAlign: "center",
            fontSize: "14px",
            color: "#000000",
          }}
        >
          New user?{" "}
          <Link
            to="/login/signup"
            style={{ color: "#6c63ff", fontWeight: "600", textDecoration: "none" }}
          >
            Click to make a new account
          </Link>
        </p>
      </form>
    </div>
  );
}