import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h1 style={{ fontSize: "28px", marginBottom: "30px", color: "#333" }}>
        Welcome! What would you like to do?
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
        }}
      >
        {/* Adopt a Pet Button */}
        <motion.button
          onClick={() => navigate("/login-details")}
          whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "500",
            borderRadius: "12px",
            border: "2px solid #B2DFDB",
            backgroundColor: "#E0F7FA",
            color: "#00796B",
            cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
        >
          Adopt a Pet
        </motion.button>

        {/* Add Pet for Adoption Button */}
        <motion.button
          onClick={() => navigate("/login-details")}
          whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "500",
            borderRadius: "12px",
            border: "2px solid #C5CAE9",
            backgroundColor: "#E8EAF6",
            color: "#303F9F",
            cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
        >
          Add Pet for Adoption
        </motion.button>
      </div>
    </div>
  );
}
