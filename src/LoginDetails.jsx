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
          color: "#ff6f61",
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
          placeholder="Full Name"
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
          }}
          onFocus={(e) => (e.target.style.borderColor = "#6c63ff")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
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
          }}
          onFocus={(e) => (e.target.style.borderColor = "#6c63ff")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />

        {/* Phone Number */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
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
          }}
          onFocus={(e) => (e.target.style.borderColor = "#6c63ff")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />

        {/* Aadhaar Last 4 digits */}
        <input
          type="text"
          name="aadhaarLast4"
          placeholder="Last 4 digits of Aadhaar"
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
            color: "#555",
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
