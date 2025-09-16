import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { color, motion } from "framer-motion";


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
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: 20, padding: "0 20px" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap"
        rel="stylesheet"
      />

      <header style={{ marginBottom: 20, fontFamily: "'Poppins', sans-serif" }}>
        <h1 style={{ fontSize: 36, fontWeight: 700, color: "black" }}>Looking to Adopt a Pet?</h1>
      </header>
      <p style={{ fontFamily: "Arial, sans-serif", fontSize: 18, color: "black" }}>
        Hear from people who adopted their best friends ❤️
      </p>



      {/* Cards Section */}

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

      {/* Why Adopt Section */}
     {/* Why Adopt Section */}
      {/* Why Pet Adoption Section */}
      <section style={{
        marginTop: '80px',
        padding: '60px 20px',
        backgroundColor: '#f8f9fa',
        fontFamily: "'Poppins', sans-serif"
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Header with decorative lines */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
            gap: '20px'
          }}>
            <div style={{
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #3498db)',
              borderRadius: '2px'
            }}></div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#2c3e50',
              margin: 0,
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              WHY PET ADOPTION?
            </h2>
            <div style={{
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #3498db, transparent)',
              borderRadius: '2px'
            }}></div>
          </div>

          {/* Main description */}
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#6c757d',
            maxWidth: '900px',
            margin: '0 auto 60px auto',
            fontWeight: '400'
          }}>
            Pet adoption offers a win-win solution for both humans and animals. By choosing adoption, you save a life and combat unethical breeding practices, such as puppy mills. Additionally, adopting a pet is financially savvy, as fees often cover essential services like vaccinations and spaying/neutering.
          </p>

          {/* Two column section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'flex-start',
            textAlign: 'left'
          }}>
            {/* Left Column */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              {/* Green star icon */}
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#d4edda',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '30px',
                border: '3px solid #c3e6cb'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#28a745">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.7',
                color: '#6c757d',
                textAlign: 'center',
                margin: 0,
                maxWidth: '400px'
              }}>
                Pet adoption isn't just about adding a furry friend to your family—it's about making a profound difference. By adopting, you're saving a life, combating unethical breeding practices, and promoting responsible pet ownership.
              </p>
            </div>

            {/* Right Column */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              {/* Pink heart/drop icon */}
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#f8d7da',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '30px',
                border: '3px solid #f5c6cb'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#dc3545">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.7',
                color: '#6c757d',
                textAlign: 'center',
                margin: 0,
                maxWidth: '400px'
              }}>
                Embrace the rewards of unconditional love, companionship, and the satisfaction of knowing you've made a positive impact. Join the movement towards a world where every pet has a loving home. Start your journey towards pet adoption today!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section style={{
        marginTop: '80px',
        padding: '80px 20px',
        backgroundColor: '#ffffff',
        fontFamily: "'Poppins', sans-serif"
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Header with decorative lines */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '60px',
            gap: '20px'
          }}>
            <div style={{
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #3498db)',
              borderRadius: '2px'
            }}></div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#2c3e50',
              margin: 0,
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              ABOUT US
            </h2>
            <div style={{
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #3498db, transparent)',
              borderRadius: '2px'
            }}></div>
          </div>

          {/* Main content with phone mockup and text */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '80px',
            alignItems: 'center'
          }}>
            {/* Left side - Phone mockup */}
            <div style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center'
            }}>
              {/* Phone frame */}
              <div style={{
                width: '300px',
                height: '600px',
                backgroundColor: '#1a1a1a',
                borderRadius: '30px',
                padding: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                position: 'relative'
              }}>
                {/* Screen */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  {/* Header */}
                  <div style={{
                    backgroundColor: '#ffffff',
                    padding: '15px',
                    borderBottom: '1px solid #e9ecef',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#28a745',
                      borderRadius: '50%'
                    }}></div>
                    <span style={{
                      fontSize: '14px',
                      color: '#6c757d',
                      fontWeight: '500'
                    }}>AdoptMe Platform</span>
                  </div>

                  {/* Pet cards in phone */}
                  <div style={{ padding: '15px' }}>
                    {/* First pet card */}
                    <div style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '15px',
                      padding: '15px',
                      marginBottom: '15px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}>
                      <div style={{
                        width: '100%',
                        height: '120px',
                        backgroundColor: '#f0c674',
                        borderRadius: '10px',
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '40px'
                      }}>🐕</div>
                      <h4 style={{
                        margin: '0 0 5px 0',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#2c3e50'
                      }}>Buddy</h4>
                      <p style={{
                        margin: '0 0 8px 0',
                        fontSize: '12px',
                        color: '#6c757d'
                      }}>Golden Retriever • 2 years old</p>
                      <div style={{
                        display: 'flex',
                        gap: '5px'
                      }}>
                        <span style={{
                          backgroundColor: '#e8f5e8',
                          color: '#28a745',
                          padding: '2px 8px',
                          borderRadius: '10px',
                          fontSize: '10px',
                          fontWeight: '500'
                        }}>Friendly</span>
                        <span style={{
                          backgroundColor: '#e3f2fd',
                          color: '#1976d2',
                          padding: '2px 8px',
                          borderRadius: '10px',
                          fontSize: '10px',
                          fontWeight: '500'
                        }}>Active</span>
                      </div>
                    </div>

                    {/* Second pet card */}
                    <div style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '15px',
                      padding: '15px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}>
                      <div style={{
                        width: '100%',
                        height: '120px',
                        backgroundColor: '#8ab4f8',
                        borderRadius: '10px',
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '40px'
                      }}>🐱</div>
                      <h4 style={{
                        margin: '0 0 5px 0',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#2c3e50'
                      }}>Luna</h4>
                      <p style={{
                        margin: '0 0 8px 0',
                        fontSize: '12px',
                        color: '#6c757d'
                      }}>Persian Cat • 1 year old</p>
                      <div style={{
                        display: 'flex',
                        gap: '5px'
                      }}>
                        <span style={{
                          backgroundColor: '#fce4ec',
                          color: '#c2185b',
                          padding: '2px 8px',
                          borderRadius: '10px',
                          fontSize: '10px',
                          fontWeight: '500'
                        }}>Calm</span>
                        <span style={{
                          backgroundColor: '#fff3e0',
                          color: '#f57c00',
                          padding: '2px 8px',
                          borderRadius: '10px',
                          fontSize: '10px',
                          fontWeight: '500'
                        }}>Loving</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div style={{
              textAlign: 'left'
            }}>
              <div style={{ marginBottom: '30px' }}>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#6c757d',
                  marginBottom: '25px',
                  fontWeight: '400'
                }}>
                  Hundreds of pets are abandoned and rescued every day. Although there are many wonderful souls across the nation who work extra hours and put in efforts beyond their capacity, there is always a shortage of funding and communication across the animal activist circuit.
                </p>

                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#6c757d',
                  marginBottom: '25px',
                  fontWeight: '400'
                }}>
                  AdoptMe is your trusted digital pet adoption platform. AdoptMe allows aspiring pet parents to search for their furry companion as well as existing pet parents to rehome their pet conveniently.
                </p>

                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#6c757d',
                  marginBottom: '25px',
                  fontWeight: '400'
                }}>
                  It does not end here, AdoptMe refreshes your pet parenting journey by sharing weekly articles and allowing you to discover pet services near you!
                </p>

                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#2c3e50',
                  fontWeight: '600'
                }}>
                  Join us in welcoming the most credible source for pet parenting with your trusted Pet Adoption Platform.
                </p>
              </div>

              {/* Call to action button */}
              <div style={{
                display: 'flex',
                gap: '15px',
                marginTop: '40px'
              }}>
                <button style={{
                  backgroundColor: '#3498db',
                  color: 'white',
                  border: 'none',
                  padding: '15px 30px',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => navigate('/adoption')}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(52, 152, 219, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(52, 152, 219, 0.3)';
                }}
                >
                  Start Adopting 🐾
                </button>
                
                <button style={{
                  backgroundColor: 'transparent',
                  color: '#3498db',
                  border: '2px solid #3498db',
                  padding: '15px 30px',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#3498db';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#3498db';
                }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section 
        id="contact-us"
        data-section="contact"
        style={{
        marginTop: '80px',
        padding: '80px 20px',
        backgroundColor: '#f8f9fa',
        fontFamily: "'Poppins', sans-serif"
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '60px',
            alignItems: 'flex-start'
          }}>
            {/* Connect with us section */}
            <div style={{
              textAlign: 'left'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '600',
                color: '#3498db',
                marginBottom: '30px',
                letterSpacing: '-0.5px'
              }}>
                Connect with us
              </h2>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px',
                marginBottom: '25px'
              }}>
                <div style={{
                  width: '45px',
                  height: '45px',
                  backgroundColor: '#3498db',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <div style={{
                  flex: 1
                }}>
                  <p style={{
                    margin: '0 0 8px 0',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#2c3e50'
                  }}>
                    Have questions? Mail Us
                  </p>
                  <a href="mailto:adoptme.pets@gmail.com" style={{
                    fontSize: '16px',
                    color: '#3498db',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}>
                    adoptme.pets@gmail.com
                  </a>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px'
              }}>
                <div style={{
                  width: '45px',
                  height: '45px',
                  backgroundColor: '#3498db',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <div style={{
                  flex: 1
                }}>
                  <p style={{
                    margin: '0 0 8px 0',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#2c3e50'
                  }}>
                    Call us for immediate help
                  </p>
                  <a href="tel:+919876543210" style={{
                    fontSize: '16px',
                    color: '#3498db',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}>
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links section */}
            <div style={{
              textAlign: 'left'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#2c3e50',
                marginBottom: '30px'
              }}>
                Quick Links
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '18px'
              }}>
                {[
                  { label: 'Home', path: '/' },
                  { label: 'Adoption', path: '/adoption' },
                  { label: 'Admin', path: '/admin' }
                ].map((link) => (
                  <button
                    key={link.label}
                    onClick={() => navigate(link.path)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: '0',
                      fontSize: '16px',
                      color: '#6c757d',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'color 0.3s ease',
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: '400'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#3498db';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#6c757d';
                    }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Follow Us section */}
            <div style={{
              textAlign: 'left'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#2c3e50',
                marginBottom: '30px'
              }}>
                Follow Us
              </h3>
              
              <div style={{
                display: 'flex',
                gap: '15px',
                marginBottom: '25px'
              }}>
                {/* Facebook */}
                <a
                  href="https://facebook.com/adoptme"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#e9ecef',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#1877f2';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#e9ecef';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#6c757d" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/adoptme"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#e9ecef',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#e9ecef';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#6c757d" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com/adoptme"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#e9ecef',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#1da1f2';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#e9ecef';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#6c757d" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
              
              <p style={{
                fontSize: '15px',
                color: '#6c757d',
                lineHeight: '1.6',
                margin: 0
              }}>
                Follow us on social media for daily pet updates, adoption success stories, and helpful pet care tips!
              </p>
            </div>
          </div>

          {/* Bottom section */}
          <div style={{
            marginTop: '70px',
            paddingTop: '35px',
            borderTop: '1px solid #e9ecef',
            textAlign: 'center'
          }}>
            <p style={{
              margin: 0,
              fontSize: '14px',
              color: '#6c757d'
            }}>
              © 2025 AdoptMe. All rights reserved. Made with ❤️ for pets and their families.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
