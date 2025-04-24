import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { pageTransition } from '../utils/animations';

/**
 * PageTransition component that wraps page content 
 * and provides smooth transitions between routes
 */
const PageTransition = ({ children }) => {
  const location = useLocation();
  
  return (
    <motion.div
      key={location.pathname}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 