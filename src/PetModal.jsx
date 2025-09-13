import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function PetModal({ pet, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!pet) return null;

  // Enhanced pet data with realistic information
  const enhancedPet = {
    ...pet,
    description: `Hello !!! My name is ${pet.name}, orange, fluffy, grey.`,
    breed: pet.name === 'Mittens' || pet.name === 'Luna' || pet.name === 'Max' ? 'Asian' : 'Mixed',
    gender: ['Female', 'Male'][Math.floor(Math.random() * 2)],
    vaccinated: 'Yes',
    age: ['Kitten', 'Young', 'Adult', 'Senior'][Math.floor(Math.random() * 4)],
    neutered: ['Yes', 'No'][Math.floor(Math.random() * 2)],
    petId: `TPN${pet.id.replace('pet', '')}507`,
    story: `I cannot afford my ${Math.floor(Math.random() * 5) + 1} cats anymore`,
    additionalInfo: `They are very friendly and gets adapted easily. They don't eat chicken directly but they love it when I give boiled chicken or wet food mixed with dry cat food.`,
    images: [pet.photo], // In real app, this would be an array of multiple images
    traits: {
      spayed: Math.random() > 0.5,
      shotsUpToDate: Math.random() > 0.3,
      needsLovingAdopter: true,
      goodWithCats: Math.random() > 0.2,
      goodWithDogs: Math.random() > 0.6,
      goodWithKids: Math.random() > 0.4
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % enhancedPet.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + enhancedPet.images.length) % enhancedPet.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      style={{
        minHeight: '100vh',
        backgroundColor: 'hsl(45, 35%, 95%)',
        padding: '2rem 0',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: '#fff',
          borderRadius: '12px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'row',
          minHeight: 'calc(100vh - 4rem)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}
      >
        {/* Left side - Image */}
        <div style={{ 
          flex: '0 0 50%',
          position: 'relative',
          backgroundColor: '#f8f9fa'
        }}>
          <img
            src={enhancedPet.images[currentImageIndex]}
            alt={enhancedPet.name}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }}
          />
          
          {/* Navigation arrows */}
          {enhancedPet.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                style={{
                  position: 'absolute',
                  left: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  fontSize: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ←
              </button>
              <button
                onClick={nextImage}
                style={{
                  position: 'absolute',
                  right: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  fontSize: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                →
              </button>
            </>
          )}
        </div>

        {/* Right side - Content */}
        <div style={{ 
          flex: 1,
          padding: '2rem',
          overflowY: 'auto',
          backgroundColor: '#fff'
        }}>
          {/* Back/Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: '#f5f5f5',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '0.5rem 1rem',
              fontSize: '14px',
              cursor: 'pointer',
              color: '#666',
              zIndex: 1001,
              fontWeight: '500'
            }}
          >
            ← Back
          </button>

          {/* Pet description */}
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{ 
              fontSize: '2rem',
              color: '#333',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              {enhancedPet.description}
            </h1>
          </div>

          {/* Facts About Me */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ 
              fontSize: '1.5rem',
              color: '#555',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              Facts About Me
            </h2>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.8rem',
              fontSize: '0.95rem'
            }}>
              <div>
                <span style={{ fontWeight: '500', color: '#666' }}>Breed</span>
                <div style={{ color: '#333' }}>{enhancedPet.breed}</div>
              </div>
              <div>
                <span style={{ fontWeight: '500', color: '#666' }}>Gender</span>
                <div style={{ color: '#333' }}>{enhancedPet.gender}</div>
              </div>
              <div>
                <span style={{ fontWeight: '500', color: '#666' }}>Vaccinated</span>
                <div style={{ color: '#333' }}>{enhancedPet.vaccinated}</div>
              </div>
              <div>
                <span style={{ fontWeight: '500', color: '#666' }}>Pet Id</span>
                <div style={{ color: '#333' }}>{enhancedPet.petId}</div>
              </div>
              <div>
                <span style={{ fontWeight: '500', color: '#666' }}>Age</span>
                <div style={{ color: '#333' }}>{enhancedPet.age}</div>
              </div>
              <div>
                <span style={{ fontWeight: '500', color: '#666' }}>Neutered</span>
                <div style={{ color: '#333' }}>{enhancedPet.neutered}</div>
              </div>
            </div>
          </div>

          {/* My Info */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ 
              fontSize: '1.5rem',
              color: '#555',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              My Info
            </h2>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.8rem',
              fontSize: '0.9rem'
            }}>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                color: enhancedPet.traits.spayed ? '#ff9800' : '#4caf50'
              }}>
                <span style={{ marginRight: '0.5rem' }}>
                  {enhancedPet.traits.spayed ? '⚠️' : '✅'}
                </span>
                {enhancedPet.traits.spayed ? 'Not Spayed' : 'Spayed'}
              </div>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                color: enhancedPet.traits.shotsUpToDate ? '#4caf50' : '#ff9800'
              }}>
                <span style={{ marginRight: '0.5rem' }}>
                  {enhancedPet.traits.shotsUpToDate ? '✅' : '⚠️'}
                </span>
                {enhancedPet.traits.shotsUpToDate ? 'Shots up to Date' : 'Shots not up to Date'}
              </div>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                color: '#4caf50'
              }}>
                <span style={{ marginRight: '0.5rem' }}>✅</span>
                Needs Loving Adopter
              </div>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                color: enhancedPet.traits.goodWithCats ? '#4caf50' : '#ff9800'
              }}>
                <span style={{ marginRight: '0.5rem' }}>
                  {enhancedPet.traits.goodWithCats ? '✅' : '⚠️'}
                </span>
                {enhancedPet.traits.goodWithCats ? 'Good with Cats' : 'Not Good with Cats'}
              </div>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                color: enhancedPet.traits.goodWithDogs ? '#4caf50' : '#ff9800'
              }}>
                <span style={{ marginRight: '0.5rem' }}>
                  {enhancedPet.traits.goodWithDogs ? '✅' : '⚠️'}
                </span>
                {enhancedPet.traits.goodWithDogs ? 'Good with Dogs' : 'Not Good with Dogs'}
              </div>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                color: enhancedPet.traits.goodWithKids ? '#4caf50' : '#ff9800'
              }}>
                <span style={{ marginRight: '0.5rem' }}>
                  {enhancedPet.traits.goodWithKids ? '✅' : '⚠️'}
                </span>
                {enhancedPet.traits.goodWithKids ? 'Good with Kids' : 'Not Good with Kids'}
              </div>
            </div>
          </div>

          {/* My Story */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ 
              fontSize: '1.5rem',
              color: '#555',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              My Story
            </h2>
            <div style={{ 
              display: 'flex',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <button style={{ 
                padding: '0.5rem',
                border: 'none',
                borderRadius: '50%',
                backgroundColor: '#3b5998',
                color: 'white',
                cursor: 'pointer'
              }}>f</button>
              <button style={{ 
                padding: '0.5rem',
                border: 'none',
                borderRadius: '50%',
                backgroundColor: '#1da1f2',
                color: 'white',
                cursor: 'pointer'
              }}>t</button>
              <button style={{ 
                padding: '0.5rem',
                border: 'none',
                borderRadius: '50%',
                backgroundColor: '#bd081c',
                color: 'white',
                cursor: 'pointer'
              }}>p</button>
              <button style={{ 
                padding: '0.5rem',
                border: 'none',
                borderRadius: '50%',
                backgroundColor: '#0077b5',
                color: 'white',
                cursor: 'pointer'
              }}>in</button>
              <button style={{ 
                padding: '0.5rem',
                border: 'none',
                borderRadius: '50%',
                backgroundColor: '#25d366',
                color: 'white',
                cursor: 'pointer'
              }}>w</button>
            </div>
            <p style={{ 
              color: '#666',
              lineHeight: '1.6',
              fontSize: '0.95rem'
            }}>
              {enhancedPet.story}
            </p>
          </div>

          {/* Additional Adoption Info */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ 
              fontSize: '1.5rem',
              color: '#555',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              Additional Adoption Info
            </h2>
            <p style={{ 
              color: '#666',
              lineHeight: '1.6',
              fontSize: '0.95rem'
            }}>
              {enhancedPet.additionalInfo}
            </p>
          </div>

          {/* Action buttons */}
          <div style={{ 
            display: 'flex',
            gap: '1rem',
            marginTop: '2rem',
            paddingTop: '1rem',
            borderTop: '1px solid #eee'
          }}>
            <button
              onClick={() => { 
                alert(`Thank you for your interest in adopting ${enhancedPet.name}! We'll contact you soon.`); 
                onClose(); 
              }}
              style={{ 
                flex: 1,
                padding: '1rem 2rem',
                borderRadius: '8px',
                backgroundColor: '#ff6b35',
                color: '#fff',
                border: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#e55a2b'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#ff6b35'}
            >
              Contact About {enhancedPet.name}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
