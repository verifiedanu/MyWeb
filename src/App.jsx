import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './home';
import Adoption from './adoption';
import Admin from './admin';
import LoginDetails from './LoginDetails';

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  // Hide nav bar on login-details page
  if (location.pathname === '/login-details') return null;

  return (
    <nav
      style={{
        backgroundColor: '#9be3ffff',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '15px',
        fontFamily: "'Poppins', sans-serif",
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Normal nav buttons */}
      {['Home', 'Adoption', 'Admin'].map((item) => (
        <Link
          key={item}
          to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
          style={{ textDecoration: 'none' }}
        >
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              backgroundColor: '#AEDFF7',
              color: '#03396C',
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            {item}
          </motion.button>
        </Link>
      ))}

      {/* Login/Sign up with popup options */}
      <div style={{ position: 'relative' }}>
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            backgroundColor: '#AEDFF7',
            color: '#03396C',
            border: 'none',
            fontWeight: '600',
            cursor: 'pointer',
          }}
          onClick={() => setShowLoginOptions((prev) => !prev)}
        >
          Login / Sign up
        </motion.button>

        {/* Popup menu */}
        {showLoginOptions && (
          <div
            style={{
              position: 'absolute',
              top: '110%',
              right: 0,
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              display: 'flex',
              flexDirection: 'column',
              minWidth: '180px',
              padding: '10px',
              zIndex: 2000,
            }}
          >
            <motion.button
              onClick={() => navigate('/login-details')}
              whileHover={{ scale: 1.05 }}
              style={{
                padding: '10px',
                border: 'none',
                background: '#E0F7FA',
                color: '#00796B',
                borderRadius: '8px',
                cursor: 'pointer',
                marginBottom: '8px',
              }}
            >
              Adopt a Pet
            </motion.button>
            <motion.button
              onClick={() => navigate('/login-details')}
              whileHover={{ scale: 1.05 }}
              style={{
                padding: '10px',
                border: 'none',
                background: '#E8EAF6',
                color: '#303F9F',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              Add Pet for Adoption
            </motion.button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap"
        rel="stylesheet"
      />

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login-details" element={<LoginDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
