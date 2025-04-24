import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import useInView from '../../hooks/useInView';
import { fadeInUp, hoverElevate } from '../../utils/animations';
import '../../styles/AnimatedCard.css';

/**
 * AnimatedCard component that animates cards when they enter the viewport
 * Adds subtle shadow and hover effects
 */
const AnimatedCard = ({
  className = '',
  variants = fadeInUp,
  delay = 0,
  duration,
  once = true,
  threshold = 0.2,
  hoverEffect = true,
  children,
  ...props
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: once });

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
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  return (
    <motion.div
      ref={ref}
      className={`animated-card ${className}`}
      initial="hidden"
      animate={controls}
      variants={customVariants}
      transition={{ 
        delay, 
        ...customVariants.visible?.transition 
      }}
      whileHover={hoverEffect ? hoverElevate : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard; 