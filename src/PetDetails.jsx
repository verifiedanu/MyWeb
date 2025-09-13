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
        background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
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
        background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        padding: '2rem 1rem',
        fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif',
        position: 'relative'
      }}
    >
      {/* Floating particles background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 0
      }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, -100, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5
            }}
            style={{
              position: 'absolute',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
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
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Glass morphism container */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
            position: 'relative'
          }}
        >
          {/* Back button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/adoption')}
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '12px',
              padding: '0.7rem 1.2rem',
              fontSize: '14px',
              cursor: 'pointer',
              color: 'white',
              zIndex: 1001,
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease'
            }}
          >
            ← Back
          </motion.button>

          {/* Pet Introduction with gradient text */}
          <div style={{ 
            padding: '4rem 2rem 2rem 2rem',
            textAlign: 'center',
            position: 'relative'
          }}>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{ 
                fontSize: '2rem',
                background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '1rem',
                fontWeight: '700',
                lineHeight: '1.2',
                animation: 'gradient 3s ease infinite'
              }}
            >
              {enhancedPet.description}
            </motion.h1>
          </div>

          {/* Pet Image with advanced styling */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{ 
              position: 'relative',
              padding: '2rem',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div style={{
              position: 'relative',
              width: '350px',
              height: '280px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              border: '3px solid rgba(255, 255, 255, 0.2)'
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
              
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '60px',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.4))',
                display: 'flex',
                alignItems: 'end',
                padding: '1rem',
                color: 'white',
                fontWeight: '600'
              }}>
                {enhancedPet.name}
              </div>
              
              {/* Navigation arrows with glow effect */}
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
                      background: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      cursor: 'pointer',
                      fontSize: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ff6b6b',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
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
                      background: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      cursor: 'pointer',
                      fontSize: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ff6b6b',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    →
                  </motion.button>
                </>
              )}
            </div>
          </motion.div>

          {/* Content sections with glass cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{ 
              padding: '2rem',
              maxHeight: '500px',
              overflowY: 'auto'
            }}
          >
            {/* Facts About Me */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              style={{ marginBottom: '2rem' }}
            >
              <h2 style={{ 
                fontSize: '1.4rem',
                color: 'white',
                marginBottom: '1rem',
                fontWeight: '700',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}>
                Facts About Me
              </h2>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '1.5rem',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}>
                {[
                  { label: 'Breed', value: enhancedPet.breed },
                  { label: 'Gender', value: enhancedPet.gender },
                  { label: 'Vaccinated', value: enhancedPet.vaccinated },
                  { label: 'Pet Id', value: enhancedPet.petId },
                  { label: 'Age', value: enhancedPet.age },
                  { label: 'Neutered', value: enhancedPet.neutered }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <span style={{ fontWeight: '500', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>{item.label}</span>
                    <div style={{ color: 'white', fontWeight: '600', marginTop: '0.3rem', fontSize: '1rem' }}>{item.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* My Info with animated status cards */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              style={{ marginBottom: '2rem' }}
            >
              <h2 style={{ 
                fontSize: '1.4rem',
                color: 'white',
                marginBottom: '1rem',
                fontWeight: '700',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}>
                My Info
              </h2>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.8rem',
                fontSize: '0.9rem'
              }}>
                {[
                  { icon: enhancedPet.traits.spayed ? '⚠️' : '✅', text: enhancedPet.traits.spayed ? 'Not Spayed' : 'Spayed', positive: !enhancedPet.traits.spayed },
                  { icon: enhancedPet.traits.shotsUpToDate ? '✅' : '⚠️', text: enhancedPet.traits.shotsUpToDate ? 'Shots up to Date' : 'Shots not up to Date', positive: enhancedPet.traits.shotsUpToDate },
                  { icon: '✅', text: 'Needs Loving Adopter', positive: true },
                  { icon: enhancedPet.traits.goodWithCats ? '✅' : '⚠️', text: enhancedPet.traits.goodWithCats ? 'Good with Cats' : 'Not Good with Cats', positive: enhancedPet.traits.goodWithCats },
                  { icon: enhancedPet.traits.goodWithDogs ? '✅' : '⚠️', text: enhancedPet.traits.goodWithDogs ? 'Good with Dogs' : 'Not Good with Dogs', positive: enhancedPet.traits.goodWithDogs },
                  { icon: enhancedPet.traits.goodWithKids ? '✅' : '⚠️', text: enhancedPet.traits.goodWithKids ? 'Good with Kids' : 'Not Good with Kids', positive: enhancedPet.traits.goodWithKids }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0.8rem',
                      borderRadius: '12px',
                      background: item.positive 
                        ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(34, 197, 94, 0.2))'
                        : 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(251, 191, 36, 0.2))',
                      border: `1px solid ${item.positive ? 'rgba(16, 185, 129, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`,
                      backdropFilter: 'blur(10px)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <span style={{ marginRight: '0.5rem', fontSize: '1.1rem' }}>{item.icon}</span>
                    <span style={{ color: 'white', fontWeight: '600' }}>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Additional Adoption Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              whileHover={{ scale: 1.02 }}
              style={{ marginBottom: '1rem' }}
            >
              <h2 style={{ 
                fontSize: '1.4rem',
                color: 'white',
                marginBottom: '1rem',
                fontWeight: '700',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}>
                Additional Adoption Info
              </h2>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
                padding: '1.5rem',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}>
                <p style={{ 
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: '1.6',
                  fontSize: '1rem',
                  margin: 0
                }}>
                  {enhancedPet.additionalInfo}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Action button with gradient animation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            style={{ 
              padding: '2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => { 
                alert(`Thank you for your interest in adopting ${enhancedPet.name}! We'll contact you soon.`); 
              }}
              style={{ 
                width: '100%',
                padding: '1.2rem 2rem',
                borderRadius: '16px',
                background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)',
                backgroundSize: '300% 300%',
                color: '#ffffff',
                border: 'none',
                fontWeight: '700',
                fontSize: '1.1rem',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(238, 90, 36, 0.4)',
                position: 'relative',
                overflow: 'hidden',
                animation: 'gradient 3s ease infinite'
              }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>
                🐾 Contact About {enhancedPet.name} 🐾
              </span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </motion.div>
  );
}
