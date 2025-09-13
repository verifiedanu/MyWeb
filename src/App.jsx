import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './home';
import Adoption from './adoption';
import Admin from './admin';
import LoginPage from './LoginPage'; 
import LoginDetails from './LoginDetails'; 

// NavBar component
function NavBar() {
  const location = useLocation();

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
      {['Home', 'Adoption', 'Admin', 'Login/Sign up'].map((item) => (
        <Link
          key={item}
          to={
            item === 'Home'
              ? '/'
              : item === 'Login/Sign up'
              ? '/login-details'
              : `/${item.toLowerCase()}`
          }
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

      {/* Conditionally render top bar */}
      <NavBar />

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login-details" element={<LoginDetails />} /> {/* Form page */}
        <Route path="/login/signup" element={<LoginPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}
