import React, { useContext, useState } from 'react';
import { PetsContext } from './context/PetsContext';
import { motion } from 'framer-motion';
import PetModal from './PetModal';

export default function Adoption() {
  const { pets, deletePet } = useContext(PetsContext); // now deletePet is available
  const [selectedPet, setSelectedPet] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this pet?")) {
      deletePet(id); // use context delete function
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Adoption</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1.5rem',
        justifyItems: 'center'
      }}>
        {pets.map(pet => (
          <motion.div
            key={pet.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: '0px 8px 20px rgba(0,0,0,0.2)' }}
            style={{
              border: '1px solid #ccc',
              borderRadius: '12px',
              padding: '1rem',
              width: '250px',
              backgroundColor: '#fff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <img
              src={pet.photo}
              alt={pet.name}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '12px',
                backgroundColor: '#f0f0f0'
              }}
            />
            <h3 style={{ margin: '0.5rem 0' }}>{pet.name}</h3>
            <p><strong>ID:</strong> {pet.id}</p>
            <p><strong>Shelter:</strong> {pet.shelter}</p>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
              <button
                onClick={() => setSelectedPet(pet)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  backgroundColor: '#4CAF50',
                  color: '#fff',
                  border: 'none',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Adopt
              </button>

              {pet.adminAdded && (
                <button
                  onClick={() => handleDelete(pet.id)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    backgroundColor: '#f44336',
                    color: '#fff',
                    border: 'none',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Delete
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {selectedPet && <PetModal pet={selectedPet} onClose={() => setSelectedPet(null)} />}
    </div>
  );
}
