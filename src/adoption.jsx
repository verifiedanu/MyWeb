import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PetsContext } from './context/PetsContext';
import { motion } from 'framer-motion';

export default function Adoption() {
  const { pets, deletePet } = useContext(PetsContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [animalType, setAnimalType] = useState('');
  const [status, setStatus] = useState('');

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this pet?")) {
      deletePet(id);
    }
  };

  // Filter pets based on search and filters
  const filteredPets = pets.filter(pet => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pet.shelter.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Better animal type detection based on pet names and photos
    let petType = 'Other';
    if (pet.photo.includes('dog') || 
        ['buddy', 'mittens', 'luna', 'daisy', 'molly'].includes(pet.name.toLowerCase())) {
      petType = 'Dog';
    } else if (pet.photo.includes('cat') || 
               ['charlie', 'oliver', 'max'].includes(pet.name.toLowerCase())) {
      petType = 'Cat';
    } else if (pet.photo.includes('bird')) {
      petType = 'Bird';
    }
    
    const matchesAnimalType = animalType === '' || animalType === 'Animal Type' || animalType === petType;
    
    const matchesStatus = status === '' || status === 'Status' || status === 'Available'; // All pets are available for now
    
    return matchesSearch && matchesAnimalType && matchesStatus;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setAnimalType('');
    setStatus('');
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F8F9FA", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "#1a202c",
            marginBottom: "0.5rem"
          }}>
            Our Pets
          </h1>
          <p style={{
            fontSize: "1.1rem",
            color: "#718096",
            maxWidth: "500px",
            margin: "0 auto 2rem auto"
          }}>
            Find your perfect companion from our loving pets
          </p>
        </div>

        {/* Filter Section */}
        <div style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "2rem",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center"
        }}>
          {/* Search Input */}
          <div style={{
            position: "relative",
            minWidth: "300px",
            flex: "1",
            maxWidth: "400px"
          }}>
            <div style={{
              position: "absolute",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#9ca3af",
              fontSize: "1.2rem"
            }}>
              🔍
            </div>
            <input
              type="text"
              placeholder="Search by name or breed"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "16px 16px 16px 48px",
                border: "2px solid #e5e7eb",
                borderRadius: "50px",
                fontSize: "1rem",
                outline: "none",
                transition: "border-color 0.2s",
                background: "#ffffff"
              }}
              onFocus={(e) => e.target.style.borderColor = "#3b82f6"}
              onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
            />
          </div>

          {/* Animal Type Dropdown */}
          <div style={{ position: "relative", minWidth: "180px" }}>
            <select 
              value={animalType}
              onChange={(e) => setAnimalType(e.target.value)}
              style={{
                width: "100%",
                padding: "16px 20px",
                border: "2px solid #e5e7eb",
                borderRadius: "50px",
                fontSize: "1rem",
                outline: "none",
                background: "#ffffff",
                color: "#6b7280",
                appearance: "none",
                cursor: "pointer"
              }}
            >
              <option value="">Animal Type</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Bird">Bird</option>
              <option value="Other">Other</option>
            </select>
            <div style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: "#9ca3af"
            }}>
              ▼
            </div>
          </div>

          {/* Status Dropdown */}
          <div style={{ position: "relative", minWidth: "150px" }}>
            <select 
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              style={{
                width: "100%",
                padding: "16px 20px",
                border: "2px solid #e5e7eb",
                borderRadius: "50px",
                fontSize: "1rem",
                outline: "none",
                background: "#ffffff",
                color: "#6b7280",
                appearance: "none",
                cursor: "pointer"
              }}
            >
              <option value="">Status</option>
              <option value="Available">Available</option>
              <option value="Adopted">Adopted</option>
              <option value="Pending">Pending</option>
            </select>
            <div style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: "#9ca3af"
            }}>
              ▼
            </div>
          </div>

          {/* Apply Filters Button */}
          <button 
            onClick={clearFilters}
            style={{
              background: "linear-gradient(135deg, #6EE7B7 0%, #3B82F6 100%)",
              color: "white",
              border: "none",
              padding: "16px 32px",
              borderRadius: "50px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              minWidth: "180px",
              justifyContent: "center",
              transition: "transform 0.2s"
            }}
            onMouseEnter={(e) => e.target.style.transform = "scale(1.02)"}
            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
          >
            <span>�</span>
            Clear Filters
          </button>
        </div>

        {/* Pet Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
          padding: "0"
        }}>
          {filteredPets.map(pet => (
            <motion.div
              key={pet.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                border: "1px solid #e2e8f0",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onClick={() => navigate(`/pet/${pet.id}`)}
            >
              {/* Pet Image */}
              <div style={{ 
                position: "relative",
                height: "200px",
                overflow: "hidden"
              }}>
                <img
                  src={pet.photo}
                  alt={pet.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>

              {/* Pet Info */}
              <div style={{ padding: "1.25rem" }}>
                <h3 style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#2d3748",
                  marginBottom: "0.5rem",
                  margin: "0 0 0.5rem 0"
                }}>
                  {pet.name}
                </h3>
                
                <p style={{
                  color: "#718096",
                  fontSize: "0.9rem",
                  marginBottom: "1rem",
                  margin: "0 0 1rem 0"
                }}>
                  {pet.shelter}
                </p>

                {/* Pet Details */}
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "1rem",
                  borderTop: "1px solid #e2e8f0"
                }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem"
                  }}>
                    <span style={{
                      fontSize: "0.75rem",
                      color: "#718096",
                      background: "#f7fafc",
                      padding: "2px 6px",
                      borderRadius: "4px"
                    }}>
                      ID: {pet.id}
                    </span>
                  </div>
                  
                  <div style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center"
                  }}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/pet/${pet.id}`);
                      }}
                      style={{
                        background: "#4299e1",
                        color: "white",
                        border: "none",
                        padding: "6px 12px",
                        borderRadius: "6px",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        cursor: "pointer"
                      }}
                    >
                      View
                    </motion.button>

                    {pet.adminAdded && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(pet.id);
                        }}
                        style={{
                          background: "#fed7d7",
                          color: "#c53030",
                          border: "none",
                          padding: "6px 8px",
                          borderRadius: "6px",
                          fontSize: "0.875rem",
                          cursor: "pointer"
                        }}
                      >
                        ×
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPets.length === 0 && pets.length > 0 && (
          <div style={{
            textAlign: "center",
            padding: "4rem 2rem",
            color: "#718096",
            gridColumn: "1 / -1"
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>No pets found</h3>
            <p>Try adjusting your search or filters to find more pets.</p>
            <button 
              onClick={clearFilters}
              style={{
                marginTop: "1rem",
                background: "#3b82f6",
                color: "white",
                border: "none",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                cursor: "pointer"
              }}
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Empty State */}
        {pets.length === 0 && (
          <div style={{
            textAlign: "center",
            padding: "4rem 2rem",
            color: "#718096"
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🐾</div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>No pets available</h3>
            <p>Check back later for new furry friends!</p>
          </div>
        )}

        {/* FAQ Section */}
        <div style={{
          marginTop: "6rem",
          marginBottom: "4rem",
          padding: "0 1rem"
        }}>
          <div style={{
            textAlign: "center",
            marginBottom: "4rem"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "1rem"
            }}>
              <div style={{
                width: "60px",
                height: "2px",
                background: "linear-gradient(90deg, transparent, #3b82f6, transparent)"
              }} />
              <h2 style={{
                fontSize: "2.8rem",
                fontWeight: "800",
                color: "#1a202c",
                margin: 0,
                letterSpacing: "1px",
                textTransform: "uppercase",
                fontFamily: "'Inter', 'Segoe UI', sans-serif"
              }}>
                Frequently Asked Questions
              </h2>
              <div style={{
                width: "60px",
                height: "2px",
                background: "linear-gradient(90deg, transparent, #3b82f6, transparent)"
              }} />
            </div>
          </div>

          <div style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}>
            {[
              {
                question: "How does the adoption process work?",
                answer: "Our adoption process is simple and thorough. First, browse our available pets online or visit our shelter. Fill out an adoption application, meet with our adoption counselors, and spend time with your chosen pet. Once approved, complete the adoption paperwork and take your new family member home!",
                isOpen: true
              },
              {
                question: "What documents do I need to adopt a pet?",
                answer: "You'll need a valid ID, proof of residence, and if you're renting, written permission from your landlord. We also require contact information for your current veterinarian if you have other pets, and references from previous pet ownership experiences.",
                isOpen: false
              },
              {
                question: "Are the pets vaccinated and health-checked?",
                answer: "Yes! All our pets receive comprehensive health checks, age-appropriate vaccinations, and are spayed or neutered before adoption. Each pet comes with medical records and a health certificate from our partnered veterinarians.",
                isOpen: false
              },
              {
                question: "What if my new pet doesn't get along with my family?",
                answer: "We offer a 30-day adjustment period where you can return the pet if there are compatibility issues. Our team provides ongoing support and training resources to help ensure a successful transition for both you and your new pet.",
                isOpen: false
              },
              {
                question: "Do you offer training and behavioral support?",
                answer: "Absolutely! We provide basic training tips, behavioral guidance, and can connect you with certified pet trainers. Many of our staff are experienced in animal behavior and are available for consultation even after adoption.",
                isOpen: false
              },
              {
                question: "What are the adoption fees and what do they cover?",
                answer: "Adoption fees vary by animal type and age, typically ranging from $50-$300. Fees cover spaying/neutering, vaccinations, microchipping, health checks, and help support our rescue operations to save more animals in need.",
                isOpen: false
              }
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} isOpen={faq.isOpen} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// FAQ Item Component
function FAQItem({ question, answer, isOpen: initialOpen }) {
  const [isOpen, setIsOpen] = React.useState(initialOpen);

  return (
    <div style={{
      border: "1px solid #e2e8f0",
      borderRadius: "12px",
      overflow: "hidden",
      background: "#ffffff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      transition: "all 0.3s ease"
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "1.5rem 2rem",
          border: "none",
          background: "transparent",
          textAlign: "left",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "1.2rem",
          fontWeight: "600",
          color: "#2d3748",
          transition: "background-color 0.2s ease",
          fontFamily: "'Inter', 'Segoe UI', sans-serif"
        }}
        onMouseEnter={(e) => {
          if (!isOpen) e.target.style.backgroundColor = "#f7fafc";
        }}
        onMouseLeave={(e) => {
          if (!isOpen) e.target.style.backgroundColor = "transparent";
        }}
      >
        <span>{question}</span>
        <span style={{
          fontSize: "1.5rem",
          color: "#3b82f6",
          transition: "transform 0.3s ease",
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
        }}>
          {isOpen ? "−" : "+"}
        </span>
      </button>
      
      {isOpen && (
        <div style={{
          padding: "0 2rem 1.5rem 2rem",
          borderTop: "1px solid #f1f5f9",
          background: "#fafafa"
        }}>
          <p style={{
            margin: 0,
            color: "#718096",
            lineHeight: "1.7",
            fontSize: "1.05rem",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            fontWeight: "400"
          }}>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
