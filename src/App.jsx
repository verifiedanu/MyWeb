import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './home';
import Adoption from './adoption';
import Admin from './admin';
import PetDetails from './PetDetails';
import LoginPage from './LoginPage'; 
import LoginDetails from './LoginDetails';
import SplashScreen from './SplashScreen';
import { PetsProvider } from './context/PetsContext'; 

// NavBar component
function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Hide nav bar on login-details page
  if (location.pathname === '/login-details') return null;

  return (
    <nav
      style={{
        backgroundColor: '#ffffff',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '15px',
        fontFamily: "'Poppins', sans-serif",
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Left side - Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        <span
          style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#000000",
            letterSpacing: "-0.5px",
          }}
        >
          AdoptMe
        </span>
        <div
          style={{
            width: "8px",
            height: "8px",
            backgroundColor: "#8b5cf6",
            borderRadius: "50%",
            marginBottom: "4px",
          }}
        />
      </div>

      {/* Center - Navigation Links */}
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        {[
          { label: "Home", path: "/" },
          { label: "Adoption", path: "/adoption" },
          { label: "Admin", path: "/admin" },
          { label: "Login/Signup", path: "/login-details" },
        ].map((item) => (
          <Link
            key={item.label}
            to={item.path}
            style={{ textDecoration: 'none' }}
          >
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                backgroundColor: '#f8f9fa',
                color: '#495057',
                border: '1px solid #e9ecef',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              {item.label}
            </motion.button>
          </Link>
        ))}
      </div>

      {/* Right side - Contact Us Button */}
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
        whileTap={{ scale: 0.95 }}
        style={{
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          backgroundColor: '#f8f9fa',
          color: '#495057',
          border: '1px solid #e9ecef',
          fontWeight: '600',
          cursor: 'pointer',
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
        onClick={() => navigate("/contact")}
      >
        {/* Phone icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Contact us
      </motion.button>
    </nav>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Show splash screen first
  if (showSplash) {
    return (
      <SplashScreen 
        title="AdoptMe" 
        onFinish={() => setShowSplash(false)}
        duration={3000}
      />
    );
  }

  return (
    <PetsProvider>
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
          <Route path="/pet/:id" element={<PetDetails />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login-details" element={<LoginDetails />} /> {/* Form page */}
          <Route path="/login/signup" element={<LoginPage />} /> 
        </Routes>
      </BrowserRouter>
    </PetsProvider>
  );
}
