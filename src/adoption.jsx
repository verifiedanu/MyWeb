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
    
    const matchesAnimalType = animalType === '' || animalType === 'Animal Type' ||
                             (animalType === 'Dog' && (pet.photo.includes('dog') || pet.name.toLowerCase().includes('buddy'))) ||
                             (animalType === 'Cat' && (pet.photo.includes('cat') || pet.name.toLowerCase().includes('mittens'))) ||
                             (animalType === 'Bird' && pet.photo.includes('bird')) ||
                             (animalType === 'Other' && !pet.photo.includes('dog') && !pet.photo.includes('cat') && !pet.photo.includes('bird'));
    
    const matchesStatus = status === '' || status === 'Status' || status === 'Available'; // All pets are available for now
    
    return matchesSearch && matchesAnimalType && matchesStatus;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setAnimalType('');
    setStatus('');
  };

  return (
    <div style={{ minHeight: "100vh", background: "hsl(45, 35%, 95%)", padding: "2rem 1rem" }}>
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
      </div>
    </div>
  );
}
