import React, { useState } from 'react';

// Stats Cards Component
const StatsCards = ({ pets }) => {
  const stats = [
    {
      title: 'Pets Added',
      value: pets.length,
      icon: '🐕',
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Pending Requests',
      value: '12',
      icon: '⏳',
      color: 'bg-blue-400',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Completed Adoptions',
      value: pets.filter(pet => pet.status === 'Adopted').length || '8',
      icon: '❤️',
      color: 'bg-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.bgColor} rounded-2xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1" style={{ fontFamily: 'Arial, sans-serif' }}>
                {stat.title}
              </p>
              <p className={`text-3xl font-bold ${stat.textColor}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                {stat.value}
              </p>
            </div>
            <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}>
              <span className="text-2xl text-white">{stat.icon}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Empty State Component
const EmptyState = ({ onAddPet }) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 text-center shadow-lg border-2 border-dashed border-gray-300 transform transition-all duration-300 hover:shadow-xl">
      <div className="mb-6">
        <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce">
          <span className="text-4xl text-white">🐕</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          No Pets Added Yet
        </h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto" style={{ fontFamily: 'Arial, sans-serif' }}>
          Start building your pet adoption database by adding your first furry friend. Help them find their forever home! 🏠
        </p>
        <button
          onClick={onAddPet}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2 mx-auto"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          <span>➕</span>
          Add Your First Pet
        </button>
      </div>
    </div>
  );
};

// Add Pet Form Component
const AddPetForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    photoUrl: '',
    gender: 'Male',
    age: '',
    breed: '',
    vaccinated: false,
    neutered: false
  });

  const [pets, setPets] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newPet = {
      ...formData,
      id: `P${String(pets.length + 1).padStart(3, '0')}`,
      dateAdded: new Date().toISOString().split('T')[0],
      status: 'Available'
    };
    setPets([...pets, newPet]);
    
    // Reset form
    setFormData({
      name: '',
      photoUrl: '',
      gender: 'Male',
      age: '',
      breed: '',
      vaccinated: false,
      neutered: false
    });
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setShowForm(false);
    
    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Success Message */}
      {showSuccess && (
        <div className="mb-6 bg-green-50 border-2 border-green-200 rounded-2xl p-6 animate-bounce shadow-lg">
          <div className="flex items-center justify-center">
            <span className="text-3xl mr-3">✅</span>
            <p className="text-green-800 font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Pet added successfully! 🎉
            </p>
          </div>
        </div>
      )}

      {/* Main Add Pet Button */}
      {!showForm && (
        <div className="text-center mb-8">
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-6 rounded-3xl font-bold text-xl shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-3xl active:scale-95 flex items-center gap-4 mx-auto group"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <span className="text-2xl group-hover:animate-bounce">🐕</span>
            Add a Pet for Adoption
            <span className="text-2xl transform group-hover:translate-x-2 transition-transform duration-300">→</span>
          </button>
        </div>
      )}

      {/* Stats Cards */}
      <StatsCards pets={pets} />

      {/* Form or Empty State */}
      {showForm ? (
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl border border-gray-200 p-8 transform transition-all duration-500">
          {/* Form Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-center flex-1">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4 animate-pulse">
                <span className="text-4xl">🐕</span>
              </div>
              <h2 className="text-3xl font-bold text-blue-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Add New Pet
              </h2>
              <p className="text-gray-600" style={{ fontFamily: 'Arial, sans-serif' }}>
                Help a furry friend find their forever home ❤️
              </p>
            </div>
            <button
              onClick={() => setShowForm(false)}
              className="text-gray-400 hover:text-gray-600 text-2xl p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
            >
              ✕
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pet Name */}
              <div className="transform transition-all duration-300 hover:scale-105">
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                  Pet Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                      focusedField === 'name' 
                        ? 'border-blue-500 shadow-lg transform scale-105' 
                        : 'border-gray-300 hover:border-blue-300'
                    }`}
                    placeholder="Enter pet name"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                  />
                  {focusedField === 'name' && (
                    <div className="absolute -top-2 left-3 bg-white px-2 text-xs text-blue-600 animate-fadeIn">
                      What's their name? 🐕
                    </div>
                  )}
                </div>
              </div>

              {/* Photo URL */}
              <div className="transform transition-all duration-300 hover:scale-105">
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                  Photo URL *
                </label>
                <div className="relative">
                  <input
                    type="url"
                    name="photoUrl"
                    required
                    value={formData.photoUrl}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('photoUrl')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                      focusedField === 'photoUrl' 
                        ? 'border-blue-500 shadow-lg transform scale-105' 
                        : 'border-gray-300 hover:border-blue-300'
                    }`}
                    placeholder="https://example.com/pet-photo.jpg"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                  />
                  {focusedField === 'photoUrl' && (
                    <div className="absolute -top-2 left-3 bg-white px-2 text-xs text-blue-600 animate-fadeIn">
                      Show their adorable face! 📸
                    </div>
                  )}
                </div>
              </div>

              {/* Gender */}
              <div className="transform transition-all duration-300 hover:scale-105">
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                  Gender *
                </label>
                <select
                  name="gender"
                  required
                  value={formData.gender}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('gender')}
                  onBlur={() => setFocusedField('')}
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                    focusedField === 'gender' 
                      ? 'border-blue-500 shadow-lg transform scale-105' 
                      : 'border-gray-300 hover:border-blue-300'
                  }`}
                  style={{ fontFamily: 'Arial, sans-serif' }}
                >
                  <option value="Male">Male ♂️</option>
                  <option value="Female">Female ♀️</option>
                </select>
              </div>

              {/* Age */}
              <div className="transform transition-all duration-300 hover:scale-105">
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                  Age (in years) *
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="age"
                    required
                    min="0"
                    max="30"
                    value={formData.age}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('age')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                      focusedField === 'age' 
                        ? 'border-blue-500 shadow-lg transform scale-105' 
                        : 'border-gray-300 hover:border-blue-300'
                    }`}
                    placeholder="Enter age"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                  />
                  {focusedField === 'age' && (
                    <div className="absolute -top-2 left-3 bg-white px-2 text-xs text-blue-600 animate-fadeIn">
                      How many years young? 🎂
                    </div>
                  )}
                </div>
              </div>

              {/* Breed */}
              <div className="md:col-span-2 transform transition-all duration-300 hover:scale-105">
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                  Breed *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="breed"
                    required
                    value={formData.breed}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('breed')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                      focusedField === 'breed' 
                        ? 'border-blue-500 shadow-lg transform scale-105' 
                        : 'border-gray-300 hover:border-blue-300'
                    }`}
                    placeholder="Enter breed (e.g., Golden Retriever, Persian Cat)"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                  />
                  {focusedField === 'breed' && (
                    <div className="absolute -top-2 left-3 bg-white px-2 text-xs text-blue-600 animate-fadeIn">
                      What breed are they? 🎯
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="flex items-center p-4 bg-blue-50 rounded-xl border-2 border-blue-200 transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                <input
                  type="checkbox"
                  name="vaccinated"
                  id="vaccinated"
                  checked={formData.vaccinated}
                  onChange={handleInputChange}
                  className="h-5 w-5 text-blue-600 border-blue-300 rounded focus:ring-blue-500 transition-all duration-300"
                />
                <label htmlFor="vaccinated" className="ml-3 text-sm font-medium text-blue-800 flex items-center" style={{ fontFamily: 'Arial, sans-serif' }}>
                  <span className="mr-2">💉</span>
                  Vaccinated
                </label>
              </div>

              <div className="flex items-center p-4 bg-blue-50 rounded-xl border-2 border-blue-200 transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                <input
                  type="checkbox"
                  name="neutered"
                  id="neutered"
                  checked={formData.neutered}
                  onChange={handleInputChange}
                  className="h-5 w-5 text-blue-600 border-blue-300 rounded focus:ring-blue-500 transition-all duration-300"
                />
                <label htmlFor="neutered" className="ml-3 text-sm font-medium text-blue-800 flex items-center" style={{ fontFamily: 'Arial, sans-serif' }}>
                  <span className="mr-2">✂️</span>
                  Neutered/Spayed
                </label>
              </div>
            </div>

            {/* Photo Preview */}
            {formData.photoUrl && (
              <div className="pt-4 animate-fadeIn">
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                  Photo Preview ✨
                </label>
                <div className="relative group">
                  <div className="w-40 h-40 border-4 border-blue-200 rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-110 hover:shadow-2xl">
                    <img 
                      src={formData.photoUrl} 
                      alt="Pet preview" 
                      className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/160x160?text=No+Image';
                      }}
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center animate-pulse">
                    ✓
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-6 flex gap-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium transition-all duration-300 hover:bg-gray-50 hover:border-gray-400"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group relative px-12 py-4 font-bold rounded-2xl transition-all duration-300 transform ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-500 hover:bg-blue-600 hover:scale-105 hover:shadow-xl active:scale-95'
                } text-white shadow-lg flex-1`}
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                <span className={`flex items-center justify-center ${isSubmitting ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                  <span className="mr-2">🐕</span>
                  Add Pet to Database
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
                
                {isSubmitting && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span className="ml-2">Adding Pet...</span>
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      ) : pets.length === 0 ? (
        <EmptyState onAddPet={() => setShowForm(true)} />
      ) : null}

      {/* Recently Added Pets Display */}
      {pets.length > 0 && (
        <div className="mt-8 animate-slideUp">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Recently Added Pets 🎉
              </h3>
              <div className="inline-block mt-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold animate-bounce">
                {pets.length} Pet{pets.length > 1 ? 's' : ''} Added!
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pets.map((pet, index) => (
                <div 
                  key={pet.id} 
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-gray-200 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:border-blue-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img 
                        src={pet.photoUrl} 
                        alt={pet.name}
                        className="w-20 h-20 object-cover rounded-xl border-4 border-white shadow-lg"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/80x80?text=No+Image';
                        }}
                      />
                      <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {pet.name} 
                        <span className="ml-2">{pet.gender === 'Male' ? '♂️' : '♀️'}</span>
                      </h4>
                      <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                        {pet.breed} • {pet.age} years old
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {pet.vaccinated && (
                          <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium animate-pulse">
                            💉 Vaccinated
                          </span>
                        )}
                        {pet.neutered && (
                          <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium animate-pulse">
                            ✂️ Neutered
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      ID: {pet.id} • Added: {pet.dateAdded}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Main Admin Dashboard Component
export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-blue-500 px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center animate-slideInLeft">
            <div className="p-3 bg-blue-500 rounded-full mr-4 animate-spin-slow">
              <span className="text-2xl text-white">🐕</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-blue-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Admin Dashboard
              </h1>
              <p className="text-sm text-gray-600 mt-1" style={{ fontFamily: 'Arial, sans-serif' }}>
                Helping pets find their forever homes 🏠❤️
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 animate-slideInRight">
            <div className="relative">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110">
                <span className="text-white text-lg font-bold">A</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div>
              <span className="text-gray-700 font-semibold" style={{ fontFamily: 'Arial, sans-serif' }}>
                Admin
              </span>
              <p className="text-xs text-gray-500">Online</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="p-6 relative">
        {/* Floating Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-100 rounded-full opacity-20 animate-float-slow"></div>
        
        <div className="relative z-10">
          <AddPetForm />
        </div>
      </main>
    </div>
  );
}
