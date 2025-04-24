import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import useInView from '../../hooks/useInView';
import { staggerContainer } from '../../utils/animations';

/**
 * AnimatedList component that animates list items with a staggered effect
 * @param {Object} props
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.containerVariants - Framer Motion variants for container
 * @param {Object} props.itemVariants - Framer Motion variants for items
 * @param {number} props.staggerDelay - Delay between each item animation (seconds)
 * @param {boolean} props.as - HTML element to render as (ul or ol)
 * @param {React.ReactNode} props.children - Child elements
 */
const AnimatedList = ({
  className = '',
  containerVariants = staggerContainer,
  itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  },
  staggerDelay = 0.1,
  as = 'ul',
  once = true,
  threshold = 0.2,
  children,
  ...props
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: once });

  // Custom container variants with specific stagger delay
  const customContainerVariants = {
    ...containerVariants,
    visible: {
      ...containerVariants.visible,
      transition: {
        ...containerVariants.visible.transition,
        staggerChildren: staggerDelay,
      }
    }
  };

  // Start animation when the element enters the viewport
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  // Wrap each child in a motion component with the item variants
  const animatedChildren = React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child;
    
    return (
      <motion.li variants={itemVariants}>
        {child}
      </motion.li>
    );
  });

  const ListComponent = as === 'ol' ? motion.ol : motion.ul;

  return (
    <ListComponent
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={customContainerVariants}
      {...props}
    >
      {animatedChildren}
    </ListComponent>
  );
};

export default AnimatedList; 