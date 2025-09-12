import React from 'react';
import { motion } from 'framer-motion';

export default function PetModal({ pet, onClose }) {
  if (!pet) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.9)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        padding: '2rem',
        overflowY: 'auto',
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '1200px',
          height: '90vh',
          backgroundColor: '#fff',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'row',
          overflow: 'hidden'
        }}
      >
        <div style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
          <img
            src={pet.photo}
            alt={pet.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div style={{ flex: 1, padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1>{pet.name}</h1>
          <p><strong>ID:</strong> {pet.id}</p>
          <p><strong>Shelter:</strong> {pet.shelter}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pet details can go here.</p>
          
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
            <button
              onClick={() => { alert(`Adoption initiated for ${pet.name}!`); onClose(); }}
              style={{ padding: '0.8rem 1.5rem', borderRadius: '6px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Adopt
            </button>
            <button
              onClick={onClose}
              style={{ padding: '0.8rem 1.5rem', borderRadius: '6px', backgroundColor: '#f44336', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
