import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import useInView from '../../hooks/useInView';
import { scaleUp } from '../../utils/animations';
import '../../styles/AnimatedImage.css';

/**
 * AnimatedImage component that animates images when they enter the viewport
 * Adds rounded corners and hover effects
 */
const AnimatedImage = ({
  src,
  alt,
  className = '',
  variants = scaleUp,
  delay = 0,
  duration,
  once = true,
  threshold = 0.2,
  borderRadius = '12px',
  shadow = true,
  hoverEffect = true,
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
      className={`animated-image-container ${className}`}
      initial="hidden"
      animate={controls}
      variants={customVariants}
      transition={{ 
        delay, 
        ...customVariants.visible?.transition 
      }}
      whileHover={hoverEffect ? { scale: 1.03, transition: { duration: 0.3 } } : undefined}
      style={{
        borderRadius,
        overflow: 'hidden',
        boxShadow: shadow ? '0 8px 30px rgba(0, 0, 0, 0.12)' : 'none',
      }}
      {...props}
    >
      <img 
        src={src} 
        alt={alt} 
        className="animated-image"
        style={{ borderRadius }}
      />
    </motion.div>
  );
};

export default AnimatedImage; 