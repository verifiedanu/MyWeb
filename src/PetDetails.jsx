import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePets } from './context/PetsContext';

export default function PetDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pets } = usePets();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const pet = pets.find(p => p.id === id);
  
  if (!pet) {
    return (
      <div style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', color: 'white' }}
        >
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Pet Not Found</h1>
          <button 
            onClick={() => navigate('/adoption')}
            style={{
              padding: '1rem 2rem',
              background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              boxShadow: '0 8px 20px rgba(238, 90, 36, 0.3)'
            }}
          >
            Back to Adoption
          </button>
        </motion.div>
      </div>
    );
  }

  // Enhanced pet data with realistic information
  const enhancedPet = {
    ...pet,
    description: pet.name,
    breed: pet.name === 'Mittens' || pet.name === 'Luna' || pet.name === 'Max' ? 'Asian' : 'Mixed',
    gender: ['Female', 'Male'][Math.floor(Math.random() * 2)],
    vaccinated: 'Yes',
    age: ['Kitten', 'Young', 'Adult', 'Senior'][Math.floor(Math.random() * 4)],
    neutered: ['Yes', 'No'][Math.floor(Math.random() * 2)],
    petId: `TPN${pet.id.replace('pet', '')}507`,
    story: `I cannot afford my ${Math.floor(Math.random() * 5) + 1} cats anymore`,
    additionalInfo: `They are very friendly and gets adapted easily. They don't eat chicken directly but they love it when I give boiled chicken or wet food mixed with dry cat food.`,
    images: [pet.photo],
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        padding: '2rem 1rem',
        fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif',
        position: 'relative'
      }}
    >
        {/* Subtle floating elements */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          zIndex: 0
        }}>
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [-15, -60, -15],
                x: [-8, 8, -8],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 1.5
              }}
              style={{
                position: 'absolute',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(99, 102, 241, 0.1)',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          padding: '2rem'
        }}
      >
        {/* Back button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/adoption')}
          style={{
            marginBottom: '2rem',
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(100, 116, 139, 0.2)',
            borderRadius: '12px',
            padding: '0.8rem 1.5rem',
            fontSize: '14px',
            cursor: 'pointer',
            color: '#475569',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          ← Back to Adoption
        </motion.button>

        {/* Main Content Layout */}
        <div style={{
          display: 'flex',
          gap: '3rem',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          background: 'rgba(255, 255, 255, 0.4)',
          borderRadius: '24px',
          padding: '2rem',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          {/* Left Side - Pet Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ 
              flex: '0 0 400px',
              minWidth: '300px'
            }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              height: '500px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}>
              <img
                src={enhancedPet.images[currentImageIndex]}
                alt={enhancedPet.name}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
              />
              
              {/* Pet name overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '80px',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
                display: 'flex',
                alignItems: 'end',
                padding: '1.5rem',
                color: 'white'
              }}>
                <h1 style={{ 
                  fontSize: '2.2rem',
                  fontWeight: '700',
                  margin: 0,
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                }}>
                  {enhancedPet.name}
                </h1>
              </div>
              
              {/* Navigation arrows */}
              {enhancedPet.images.length > 1 && (
                <>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevImage}
                    style={{
                      position: 'absolute',
                      left: '15px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(255, 255, 255, 0.95)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      cursor: 'pointer',
                      fontSize: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#64748b',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    ←
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextImage}
                    style={{
                      position: 'absolute',
                      right: '15px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(255, 255, 255, 0.95)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      cursor: 'pointer',
                      fontSize: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#64748b',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    →
                  </motion.button>
                </>
              )}
            </div>
          </motion.div>

          {/* Right Side - Pet Information */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ 
              flex: '1',
              minWidth: '400px',
              maxHeight: '600px',
              overflowY: 'auto',
              paddingRight: '1rem'
            }}
          >
            {/* Facts About Me */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ marginBottom: '3rem' }}
            >
              <h2 style={{ 
                fontSize: '1.8rem',
                color: '#374151',
                marginBottom: '1.5rem',
                fontWeight: '700'
              }}>
                About {enhancedPet.name}
              </h2>
              
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                {[
                  { label: 'Breed', value: enhancedPet.breed },
                  { label: 'Gender', value: enhancedPet.gender },
                  { label: 'Age', value: enhancedPet.age },
                  { label: 'Vaccinated', value: enhancedPet.vaccinated },
                  { label: 'Neutered', value: enhancedPet.neutered },
                  { label: 'Pet ID', value: enhancedPet.petId }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.6)',
                      border: '1px solid rgba(148, 163, 184, 0.2)',
                      borderRadius: '12px',
                      padding: '1.2rem',
                      textAlign: 'center',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{ 
                      background: 'rgba(255, 255, 255, 0.8)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                  >
                    <div style={{ 
                      color: '#6b7280', 
                      fontSize: '0.9rem',
                      marginBottom: '0.3rem',
                      fontWeight: '500'
                    }}>
                      {item.label}
                    </div>
                    <div style={{ 
                      color: '#374151', 
                      fontWeight: '600', 
                      fontSize: '1rem' 
                    }}>
                      {item.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Additional Adoption Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              style={{ marginBottom: '2rem' }}
            >
              <h2 style={{ 
                fontSize: '2rem',
                color: '#000000',
                marginBottom: '1.5rem',
                fontWeight: '700'
              }}>
                Additional Adoption Info
              </h2>
              <div style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                border: '1px solid #e9ecef',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
              }}>
                <p style={{ 
                  color: '#495057',
                  lineHeight: '1.6',
                  fontSize: '1.1rem',
                  margin: 0
                }}>
                  {enhancedPet.additionalInfo}
                </p>
              </div>
            </motion.div>

            {/* Action button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => { 
                  alert(`Thank you for your interest in adopting ${enhancedPet.name}! We'll contact you soon.`); 
                }}
                style={{ 
                  width: '100%',
                  padding: '1.5rem 2rem',
                  borderRadius: '15px',
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
                  transition: 'all 0.3s ease'
                }}
              >
                🐾 Contact About {enhancedPet.name} 🐾
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

    </motion.div>
  );
}
