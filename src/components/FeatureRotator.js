import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/FeatureRotator.css';

// Animation variants
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Apple-style curve
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    }
  })
};

// Image style to ensure consistent rounded corners and center cropping
const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: '50% 50%',
  willChange: 'transform',
  filter: 'drop-shadow(0 5px 15px rgba(0, 0, 0, 0.1))',
};

const FeatureRotator = ({ features, interval = 5000, showButtons = true, autoPlay = true }) => {
  const [[currentIndex, direction], setSlide] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  
  // Function to go to next slide
  const nextSlide = useCallback(() => {
    setSlide(([current, _]) => [
      (current + 1) % features.length,
      1
    ]);
  }, [features.length]);
  
  // Function to go to previous slide
  const prevSlide = () => {
    setSlide(([current, _]) => [
      (current - 1 + features.length) % features.length,
      -1
    ]);
  };

  // Autoplay effect with pause on hover
  useEffect(() => {
    if (!autoPlay || isPaused) return;
    
    const timer = setTimeout(() => {
      nextSlide();
    }, interval);
    
    return () => clearTimeout(timer);
  }, [currentIndex, isPaused, interval, autoPlay, nextSlide]);
  
  // Get current feature to display
  const currentFeature = features[currentIndex];
  
  return (
    <div 
      className="feature-rotator"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="feature-slide"
        >
          <img 
            src={currentFeature.image} 
            alt={currentFeature.title} 
            className="feature-image iphone-screenshot" 
            style={imageStyle}
          />
          <div className="feature-indicator">
            <h3>{currentFeature.title}</h3>
            <p>{currentFeature.description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation dots */}
      <div className="nav-dots">
        {features.map((_, index) => (
          <button 
            key={index}
            className={`nav-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setSlide([index, index > currentIndex ? 1 : -1])}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Navigation buttons */}
      {showButtons && (
        <>
          <button 
            className="nav-button prev" 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            className="nav-button next" 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default FeatureRotator; 