import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './home';
import Adoption from './adoption';
import Admin from './admin';

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{
        padding: '1rem',
        borderBottom: '1px solid #ccc',
        marginBottom: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: 'bold'
      }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/">Home</Link>
          <Link to="/adoption">Adoption</Link>
          <Link to="/admin">Admin</Link>
        </div>
        <div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '0.3rem 0.6rem',
              borderRadius: '6px',
              backgroundColor: '#4CAF50',
              color: '#fff',
              border: 'none',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Add Wallet
          </motion.button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
