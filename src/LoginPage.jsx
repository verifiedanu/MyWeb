import React from "react";

export default function LoginPage() {
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
          flexDirection: "column", // 👈 stack vertically
          alignItems: "center",
          gap: "15px",
        }}
      >
        {/* Option 1 */}
        <button
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "500",
            borderRadius: "12px",
            border: "2px solid #B2DFDB",
            backgroundColor: "#E0F7FA", // soft pastel
            color: "#00796B",
            cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Want to Adopt a Pet?
        </button>

        {/* Option 2 */}
        <button
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "500",
            borderRadius: "12px",
            border: "2px solid #C5CAE9",
            backgroundColor: "#E8EAF6", // another soft pastel
            color: "#303F9F",
            cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
           Want to Add Pet for Adoption?
        </button>
      </div>
    </div>
  );
}
