import React, { useState } from "react";
<<<<<<< HEAD
=======
import { motion } from "framer-motion";
>>>>>>> 5703315 (Initial commit)

// Pet images + adopter messages
const petImages = [
  {
    src: "https://i.pinimg.com/736x/a7/0d/f5/a70df517e67605307c6c4cbf7cbc5a43.jpg",
<<<<<<< HEAD
   
=======
>>>>>>> 5703315 (Initial commit)
    adopterMessage: "“Bella has brought so much joy to our family!” — Alex",
  },
  {
    src: "https://i.pinimg.com/736x/ee/35/6c/ee356cf98754dc6a065922a72be675d4.jpg",
<<<<<<< HEAD
   
=======
>>>>>>> 5703315 (Initial commit)
    adopterMessage: "“Max is full of energy, we love playing fetch!” — Priya",
  },
  {
    src: "https://i.pinimg.com/736x/0d/c5/a0/0dc5a0ce74d28ff1af4bfaf411cfbc0b.jpg",
<<<<<<< HEAD
   
=======
>>>>>>> 5703315 (Initial commit)
    adopterMessage: "“Luna curls up with me every night. Best decision ever!” — Sharan",
  },
  {
    src: "https://i.pinimg.com/736x/92/d6/95/92d6956bb5ec68fa36c408091d939a3c.jpg",
<<<<<<< HEAD
   
=======
>>>>>>> 5703315 (Initial commit)
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

<<<<<<< HEAD
=======
      {/* Cards Section */}
>>>>>>> 5703315 (Initial commit)
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
<<<<<<< HEAD
                <div style={{ fontWeight: "600", marginBottom: 6 }}>{pet.message}</div>
=======
>>>>>>> 5703315 (Initial commit)
                <div style={{ fontStyle: "italic", fontSize: "13px" }}>
                  {pet.adopterMessage}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Why Adopt Section */}
     {/* Why Adopt Section */}
<section
  style={{
    marginTop: "60px",
    padding: "20px 40px",
    maxWidth: "800px",
    marginInline: "auto",
    textAlign: "left",
    fontFamily: "Arial, sans-serif",
  }}
>
  {/* Cute Header Bar */}
  <motion.h2
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    style={{
      textAlign: "center",
      marginBottom: "25px",
      fontSize: "28px",
      fontWeight: "700",
      fontFamily: "'Poppins', sans-serif",
      color: "#ff6f61",
    }}
  >
    🐾 Why Adopt? 🐾
  </motion.h2>

  {/* Paragraph */}
  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    viewport={{ once: true }}
    style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "15px" }}
  >
    Adopting a pet is more than just giving them a home — it’s about giving
    them a second chance at life. Millions of pets are abandoned each year,
    and by adopting, you’re saving a life.
  </motion.p>

  {/* List */}
  <motion.ul
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.4 }}
    viewport={{ once: true }}
    style={{ fontSize: "18px", lineHeight: "1.8" }}
  >
    <li><strong>Save a Life:</strong> Adoption gives homeless pets a loving family.</li>
    <li><strong>Affordable:</strong> Adoption costs are much lower than buying from breeders.</li>
    <li><strong>Health Checked:</strong> Most pets come vaccinated and dewormed.</li>
    <li><strong>Fight Pet Mills:</strong> Adopting helps reduce unethical breeding practices.</li>
    <li><strong>Unconditional Love:</strong> Rescued pets often form the strongest bonds ❤️</li>
  </motion.ul>
</section>

    </div>
  );
}
