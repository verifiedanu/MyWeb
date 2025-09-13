import React, { useEffect } from "react";

/**
 * Props:
 *  - title: string (the text to split/animate)
 *  - onFinish: function called when animation is done
 *  - duration: milliseconds for splash before finishing (default 1800)
 */
export default function SplashScreen({ title = "AdoptMe", onFinish = () => {}, duration = 1600 }) {
  useEffect(() => {
    const t = setTimeout(() => onFinish(), duration);
    return () => clearTimeout(t);
  }, [duration, onFinish]);

  // split text into letters (preserve spaces)
  const letters = Array.from(title);

  return (
    <div
      aria-hidden="false"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 4s ease infinite'
      }}
    >
      {/* Floating particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              position: 'absolute',
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              background: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        padding: '1.5rem',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ position: 'relative' }}>
          {/* Glowing background effect */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%',
            height: '120%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'pulse 2s ease-in-out infinite'
          }} />
          
          <h1 style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: 'clamp(4rem, 12vw, 6rem)',
            fontWeight: '800',
            letterSpacing: '-0.025em',
            color: '#ffffff',
            userSelect: 'none',
            fontFamily: "'Poppins', sans-serif",
            textShadow: '0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.3)',
            position: 'relative',
            zIndex: 3
          }}>
            {letters.map((ch, i) => {
              // small stagger using inline style delay
              const delay = `${i * 85}ms`; // increased delay for more dramatic effect
              // keep space width
              if (ch === " ") {
                return <span key={i} style={{ marginLeft: '0.25rem', marginRight: '0.25rem', width: '0.5rem', display: 'inline-block' }} />;
              }
              return (
                <span
                  key={i}
                  className="animate-letter"
                  style={{ 
                    display: 'inline-block',
                    transform: 'translateY(2rem) rotateX(90deg)',
                    opacity: 0,
                    animationDelay: delay
                  }}
                >
                  {ch}
                </span>
              );
            })}
          </h1>

          {/* Enhanced loading section */}
          <div style={{
            position: 'absolute',
            bottom: '-4rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}>
            {/* Animated paw prints */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  className="paw-bounce"
                  style={{
                    fontSize: '1.5rem',
                    animationDelay: `${i * 0.2}s`
                  }}
                >
                  🐾
                </span>
              ))}
            </div>
            
            {/* Loading bar */}
            <div style={{
              width: '200px',
              height: '4px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '2px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                animation: 'shimmer 1.5s ease-in-out infinite'
              }} />
            </div>
            
            <span style={{
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: '500',
              fontFamily: "'Poppins', sans-serif",
              animation: 'fadeInOut 2s ease-in-out infinite'
            }}>
              Loading your perfect companion...
            </span>
          </div>
        </div>
      </div>

      {/* local CSS in a style tag to keep component portable */}
      <style>{`
        @keyframes letterIn {
          0% { 
            opacity: 0; 
            transform: translateY(20px) rotateX(90deg); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) rotateX(0deg); 
          }
        }
        
        .animate-letter {
          animation-name: letterIn;
          animation-duration: 800ms;
          animation-timing-function: cubic-bezier(.2,.9,.3,1);
          animation-fill-mode: forwards;
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        .floating-particle {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) rotate(90deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-40px) rotate(180deg);
            opacity: 1;
          }
          75% {
            transform: translateY(-20px) rotate(270deg);
            opacity: 0.8;
          }
        }

        .paw-bounce {
          animation: pawBounce 1s ease-in-out infinite;
        }

        @keyframes pawBounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) scale(1);
          }
          40% {
            transform: translateY(-10px) scale(1.2);
          }
          60% {
            transform: translateY(-5px) scale(1.1);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }

        /* Smooth fade-out when the parent container is hidden by React */
      `}</style>
    </div>
  );
}
