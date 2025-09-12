import React, { useState, useContext } from 'react';
import { PetsContext } from './context/PetsContext';

export default function Admin() {
  const { pets, addPet, deletePet } = useContext(PetsContext);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    photo: '',
    shelter: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.id || !formData.name || !formData.shelter) {
      alert('Please fill all required fields');
      return;
    }

    const newPet = { ...formData, adminAdded: true };
    addPet(newPet);
    alert(`Pet "${formData.name}" added successfully!`);

    // Clear form
    setFormData({ id: '', name: '', photo: '', shelter: '' });
    setShowForm(false); // hide form after adding
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h1>Admin Dashboard</h1>

      {/* Toggle Form Button */}
      <button
        onClick={() => setShowForm(prev => !prev)}
        style={{
          padding: '0.5rem 1rem',
          marginTop: '1rem',
          borderRadius: '6px',
          backgroundColor: '#4CAF50',
          color: '#fff',
          border: 'none',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        {showForm ? 'Close Form' : 'Add a Pet for Adoption'}
      </button>

      {/* Add Pet Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}
        >
          <input
            required
            name="id"
            placeholder="Pet ID"
            value={formData.id}
            onChange={handleChange}
          />
          <input
            required
            name="name"
            placeholder="Pet Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="photo"
            placeholder="Photo URL"
            value={formData.photo}
            onChange={handleChange}
          />
          <input
            required
            name="shelter"
            placeholder="Shelter Name"
            value={formData.shelter}
            onChange={handleChange}
          />

          <button
            type="submit"
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
            Add Pet
          </button>
        </form>
      )}

      {/* Admin Added Pets List */}
      <h2 style={{ marginTop: '2rem' }}>Your Added Pets</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        {pets.filter(p => p.adminAdded).length === 0 && (
          <p>You haven’t added any pets yet.</p>
        )}

        {pets.filter(p => p.adminAdded).map(pet => (
          <div
            key={pet.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #ccc',
              padding: '1rem',
              borderRadius: '8px',
              gap: '1rem',
              backgroundColor: '#f9f9f9'
            }}
          >
            {pet.photo && (
              <img
                src={pet.photo}
                alt={pet.name}
                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
              />
            )}
            <div style={{ flex: 1 }}>
              <h3>{pet.name}</h3>
              <p><strong>ID:</strong> {pet.id}</p>
              <p><strong>Shelter:</strong> {pet.shelter}</p>
              <p><strong>Admin Added:</strong> {pet.adminAdded ? 'Yes' : 'No'}</p>
            </div>
            <button
              onClick={() => deletePet(pet.id)}
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
          </div>
        ))}
      </div>
    </div>
  );
}
