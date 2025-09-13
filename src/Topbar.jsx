<<<<<<< HEAD
import React, { useState } from "react";

// Pet images + adopter messages
const petImages = [
  {
    src: "https://i.pinimg.com/736x/a7/0d/f5/a70df517e67605307c6c4cbf7cbc5a43.jpg",
   
    adopterMessage: "“Bella has brought so much joy to our family!” — Alex",
  },
  {
    src: "https://i.pinimg.com/736x/ee/35/6c/ee356cf98754dc6a065922a72be675d4.jpg",
   
    adopterMessage: "“Max is full of energy, we love playing fetch!” — Priya",
  },
  {
    src: "https://i.pinimg.com/736x/0d/c5/a0/0dc5a0ce74d28ff1af4bfaf411cfbc0b.jpg",
   
    adopterMessage: "“Luna curls up with me every night. Best decision ever!” — Sharan",
  },
  {
    src: "https://i.pinimg.com/736x/92/d6/95/92d6956bb5ec68fa36c408091d939a3c.jpg",
   
    adopterMessage: "“Charlie loves long walks. He’s part of our family now!” — Meera",
  },
];

const cardWidth = 220;
const cardHeight = 320;

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div style={{ textAlign: "center", marginTop: 20, padding: "0 20px" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap"
        rel="stylesheet"
      />

      <header style={{ marginBottom: 20, fontFamily: "'Poppins', sans-serif" }}>
        <h1 style={{ fontSize: 36, fontWeight: 700 }}>Looking to Adopt a Pet?</h1>
      </header>
      <p style={{ fontFamily: "Arial, sans-serif", fontSize: 18 }}>
        Hear from people who adopted their best friends ❤️
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 20,
          marginTop: 30,
          perspective: "1000px",
        }}
      >
        {petImages.map((pet, index) => {
          const rotateDeg = index % 2 === 0 ? "-5deg" : "5deg";
          const isHovered = hoveredIndex === index;

          const cardStyle = {
            width: cardWidth,
            height: cardHeight,
            borderRadius: 10,
            overflow: "hidden",
            position: "relative",
            backgroundColor: "#f9f9f9",
            boxShadow: isHovered
              ? "0 16px 32px rgba(0,0,0,0.4)"
              : "0 8px 16px rgba(0,0,0,0.3)",
            transform: isHovered
              ? "rotate(0deg) scale(1.05) translateY(-10px)"
              : `rotate(${rotateDeg})`,
            transition: "transform 0.35s ease, box-shadow 0.25s ease",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          };

          const overlayStyle = {
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            padding: 12,
            textAlign: "center",
            fontSize: 14,
            fontFamily: "'Poppins', sans-serif",
            color: "#fff",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 80%)",
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
            pointerEvents: "none",
          };

          return (
            <div
              key={index}
              style={cardStyle}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={pet.src}
                alt={`Pet ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                draggable={false}
              />

              {/* Overlay with adopter message */}
              <div style={overlayStyle}>
                <div style={{ fontWeight: "600", marginBottom: 6 }}>{pet.message}</div>
                <div style={{ fontStyle: "italic", fontSize: "13px" }}>
                  {pet.adopterMessage}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
// import React, { useState } from "react";

// // Pet images + adopter messages
// const petImages = [
//   {
//     src: "https://i.pinimg.com/736x/a7/0d/f5/a70df517e67605307c6c4cbf7cbc5a43.jpg",
//     message: "“Bella has brought so much joy to our family!” — Alex",
//   },
//   {
//     src: "https://i.pinimg.com/736x/ee/35/6c/ee356cf98754dc6a065922a72be675d4.jpg",
//     message: "“Max is full of energy, we love playing fetch!” — Priya",
//   },
//   {
//     src: "https://i.pinimg.com/736x/0d/c5/a0/0dc5a0ce74d28ff1af4bfaf411cfbc0b.jpg",
//     message: "“Luna curls up with me every night. Best decision ever!” — Meera",
//   },
//   {
//     src: "https://i.pinimg.com/736x/92/d6/95/92d6956bb5ec68fa36c408091d939a3c.jpg",
//     message: "“Charlie loves long walks. He’s part of our family now!” — Rohan",
//   },
// ];

// const cardWidth = 320;   // wider cards to match screenshot feel
// const cardHeight = 440;  // taller cards with caption area

// export default function Home() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const containerStyle = {
//     display: "flex",
//     overflowX: "auto",
//     overflowY: "hidden",
//     gap: "20px",
//     padding: "30px 40px",
//     scrollSnapType: "x mandatory",           // enable horizontal snap [3][17]
//     scrollPadding: "0 20%",                   // keep center room for snap-to-center [5]
//     WebkitOverflowScrolling: "touch",
//   };

//   const trackStyle = {
//     display: "flex",
//     alignItems: "stretch",
//   };

//   const getCardStyle = (isHovered) => ({
//     width: cardWidth,
//     height: cardHeight,
//     flex: "0 0 auto",                         // prevent shrinking so snap is clean [5]
//     borderRadius: 16,
//     overflow: "hidden",
//     position: "relative",
//     backgroundColor: "#fff",
//     boxShadow: isHovered
//       ? "0 18px 36px rgba(0,0,0,0.25)"
//       : "0 10px 20px rgba(0,0,0,0.15)",
//     transform: isHovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
//     transition: "transform 0.25s ease, box-shadow 0.25s ease",
//     scrollSnapAlign: "center",                // each card snaps to center [5][9]
//     marginInline: "6px",                      // slight side bleed to show neighbors
//   });

//   const overlayTextStyle = (isHovered) => ({
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: "12px 12px 14px",
//     textAlign: "left",
//     fontSize: 14,
//     fontFamily: "'Poppins', sans-serif",
//     color: "#fff",
//     background: "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.75) 80%)",
//     opacity: isHovered ? 1 : 0.95,
//   });

//   return (
//     <div style={{ textAlign: "center", marginTop: 20 }}>
//       <link
//         href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap"
//         rel="stylesheet"
//       />
//       <header style={{ marginBottom: 8, fontFamily: "'Poppins', sans-serif" }}>
//         <h1 style={{ fontSize: 36, fontWeight: 700 }}>Looking to Adopt a Pet?</h1>
//       </header>
//       <p style={{ fontFamily: "Arial, sans-serif", fontSize: 18, marginBottom: 8 }}>
//         Hear from people who adopted their best friends ❤️
//       </p>

//       {/* Horizontal snap carousel */}
//       <div style={containerStyle}>
//         <div style={trackStyle}>
//           {petImages.map((pet, index) => {
//             const isHovered = hoveredIndex === index;
//             return (
//               <div
//                 key={pet.src}
//                 style={getCardStyle(isHovered)}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//               >
//                 <img
//                   src={pet.src}
//                   alt={⁠ Pet ${index + 1} ⁠}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     display: "block",
//                   }}
//                   draggable={false}
//                 />
//                 <div style={overlayTextStyle(isHovered)}>{pet.message}</div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
=======
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const buttons = ["Home", "Adoption", "Admin"];
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#4CAF50",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Left side buttons */}
      <div style={{ display: "flex", gap: "20px" }}>
        {buttons.map((btn, index) => (
          <button
            key={index}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#fff",
              color: "#4CAF50",
              fontSize: "16px",
              fontWeight: "600",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Right side - Login/Signup */}
      <button
        style={{
          padding: "10px 24px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#fff",
          color: "#4CAF50",
          fontSize: "16px",
          fontWeight: "600",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onClick={() => navigate("/login")}
      >
        Login / Sign Up
      </button>
    </div>
  );
}
>>>>>>> 5703315 (Initial commit)
