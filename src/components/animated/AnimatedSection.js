import React, { useEffect, memo, useState, useRef } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
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
 * @param {boolean} props.parallax - Enable parallax scrolling effect
 * @param {number} props.parallaxFactor - Intensity of parallax effect (0-1)
 * @param {React.ReactNode} props.children - Child elements
 */
const AnimatedSection = ({
  className = '',
  variants = fadeIn,
  delay = 0,
  duration,
  once = true,
  threshold = 0.05,
  parallax = false,
  parallaxFactor = 0.2,
  children,
  ...props
}) => {
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const [ref, inView] = useInView({ 
    threshold, 
    triggerOnce: once,
    rootMargin: '25% 0px' 
  });

  // Always setup scroll progress tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Always call useTransform, but only use the value when parallax is enabled
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    [parallaxFactor * 100, parallaxFactor * -100]
  );

  // Combine refs
  const combinedRef = (node) => {
    // Apply both refs properly based on their type
    if (ref) {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref.hasOwnProperty('current')) {
        ref.current = node;
      }
    }
    
    sectionRef.current = node;
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
    if (inView && !hasAnimated) {
      // Ensure animation plays smoothly
      controls.start('visible');
      setHasAnimated(true);
    } else if (!once && !inView) {
      controls.start('hidden');
      setHasAnimated(false);
    }
  }, [controls, inView, once, hasAnimated]);

  // Apply a style with will-change for hardware acceleration
  const style = {
    willChange: 'opacity, transform',
    // Create a stacking context for better rendering
    opacity: 0.999
  };

  // If parallax is enabled, apply the y transform
  if (parallax) {
    return (
      <motion.div
        ref={combinedRef}
        className={className}
        initial="hidden"
        animate={controls}
        variants={customVariants}
        transition={{ 
          delay, 
          ...customVariants.visible?.transition 
        }}
        style={{
          ...style,
          y
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

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
      style={style}
      {...props}
    >
      {children}
    </motion.section>
  );
};

// Memoize to prevent unnecessary re-renders
export default memo(AnimatedSection); 