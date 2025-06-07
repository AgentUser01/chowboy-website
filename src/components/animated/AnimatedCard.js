import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import useInView from '../../hooks/useInView';
import { fadeInUp, hoverElevate } from '../../utils/animations';
import '../../styles/AnimatedCard.css';

/**
 * AnimatedCard component that animates cards when they enter the viewport
 * Adds subtle shadow and hover effects with Apple-style smoothness
 */
const AnimatedCard = ({
  className = '',
  variants = fadeInUp,
  delay = 0,
  duration,
  once = true,
  threshold = 0.1, // Lower threshold to trigger earlier
  hoverEffect = true,
  scrollEffect = false, // Enable scroll-based subtle effects
  scrollIntensity = 0.05, // How intense the scroll effect is
  children,
  ...props
}) => {
  const controls = useAnimation();
  const cardRef = useRef(null);
  const [ref, inView] = useInView({ 
    threshold, 
    triggerOnce: once,
    rootMargin: '25% 0px' // Start animation earlier
  });

  // Always set up scroll effect, but only apply it when enabled
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  // Always call useTransform, but only use the values when scrollEffect is true
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.98, 1, 0.98]
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.95, 1, 0.95]
  );

  // Combine refs
  const combinedRef = (node) => {
    // Handle ref based on its type
    if (ref) {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref.hasOwnProperty('current')) {
        ref.current = node;
      }
    }
    
    cardRef.current = node;
  };

  // Customize the variants if duration is provided
  const customVariants = duration 
    ? {
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            ...variants.visible.transition,
            duration
          }
        }
      }
    : variants;

  // Start animation when the element enters the viewport
  useEffect(() => {
    if (inView) {
      // Use staggered animation for children if using contentGroup
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  return (
    <motion.div
      ref={combinedRef}
      className={`animated-card ${className}`}
      initial="hidden"
      animate={controls}
      variants={customVariants}
      transition={{ 
        delay, 
        ...customVariants.visible?.transition 
      }}
      whileHover={hoverEffect ? hoverElevate : undefined}
      style={scrollEffect ? { scale, opacity } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard; 