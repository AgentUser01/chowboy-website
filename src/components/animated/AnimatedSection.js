import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import useInView from '../../hooks/useInView';
import { fadeIn } from '../../utils/animations';

/**
 * AnimatedSection component that animates when it enters the viewport
 * @param {Object} props
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.variants - Framer Motion variants (defaults to fadeIn)
 * @param {number} props.delay - Animation delay in seconds
 * @param {number} props.duration - Animation duration in seconds
 * @param {boolean} props.once - Whether to animate only once
 * @param {number} props.threshold - IntersectionObserver threshold
 * @param {React.ReactNode} props.children - Child elements
 */
const AnimatedSection = ({
  className = '',
  variants = fadeIn,
  delay = 0,
  duration,
  once = true,
  threshold = 0.2,
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
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={customVariants}
      transition={{ 
        delay, 
        ...customVariants.visible?.transition 
      }}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection; 