// Animation variants for consistent use across components
// These follow the Framer Motion variant pattern

// Basic fade animations with different directions
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] // Gentle ease-out curve for smoother motion
    }
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20, transform: 'translateZ(0)' },
  visible: { 
    opacity: 1, 
    y: 0,
    transform: 'translateZ(0)',
    transition: { 
      duration: 0.9, 
      ease: [0.16, 1, 0.3, 1] // Apple-style spring curve
    }
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -20, transform: 'translateZ(0)' },
  visible: { 
    opacity: 1, 
    y: 0,
    transform: 'translateZ(0)',
    transition: { 
      duration: 0.9, 
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -20, transform: 'translateZ(0)' },
  visible: { 
    opacity: 1, 
    x: 0,
    transform: 'translateZ(0)',
    transition: { 
      duration: 0.9, 
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 20, transform: 'translateZ(0)' },
  visible: { 
    opacity: 1, 
    x: 0,
    transform: 'translateZ(0)',
    transition: { 
      duration: 0.9, 
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Staggered children animations
export const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Smoother staggering
      delayChildren: 0.1,
    }
  }
};

// Scale animations
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 }, // Less dramatic scale change
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.75, 
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Text reveal animations
export const textReveal = {
  hidden: { 
    opacity: 0,
    y: 15, // Smaller distance for more subtle animation
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Apple-style curve
    }
  }
};

// Breathe animation for subtle movement
export const breathe = {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.01, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

// Hover animations
export const hoverScale = {
  scale: 1.02, // More subtle scale
  transition: { duration: 0.4 }
};

export const hoverElevate = {
  y: -4, // More subtle lift
  boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
  transition: { duration: 0.4 }
};

// Page transitions
export const pageTransition = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  }
};

// Helper function to create variants with custom duration
export const createVariantWithDuration = (variant, duration) => {
  return {
    ...variant,
    visible: {
      ...variant.visible,
      transition: {
        ...variant.visible.transition,
        duration
      }
    }
  };
};

// Helper for reduced motion
export const getReducedMotionVariants = (preferReducedMotion) => {
  if (preferReducedMotion) {
    // Simple variants that don't involve movement
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.3 } },
      exit: { opacity: 0, transition: { duration: 0.2 } }
    };
  }
  return null; // Use regular variants
};

// Card appearance (Pinterest-style)
export const cardAppear = {
  hidden: { 
    opacity: 0, 
    y: 25,
    scale: 0.97
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 220, // Reduced stiffness for smoother animation
      damping: 26,    // Increased damping to prevent bouncing
      duration: 0.9
    }
  }
};

// Image loading animation
export const imageLoad = {
  hidden: { 
    opacity: 0,
    scale: 1.05, // Reduced scale for more subtle effect
    filter: "blur(8px)" 
  },
  visible: { 
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { 
      duration: 1,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Parallax scroll effect for images - new
export const parallaxScroll = {
  hidden: { y: 0 },
  visible: { 
    y: 0,
    transition: { 
      duration: 0.1, // Fast response to scroll
    }
  }
};

// Smooth content reveal group - new
export const contentGroup = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
      when: "beforeChildren" // Ensures parent is visible before children animate
    }
  }
}; 