import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import useInView from '../../hooks/useInView';
import { textReveal } from '../../utils/animations';

/**
 * AnimatedText component that animates text when it enters the viewport
 * Works with any HTML text element (h1, h2, p, etc.)
 */
const AnimatedText = ({
  as = 'p',
  className = '',
  variants = textReveal,
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

  // Create the motion component based on the 'as' prop
  const Component = motion[as] || motion.p;

  return (
    <Component
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
    </Component>
  );
};

export default AnimatedText; 