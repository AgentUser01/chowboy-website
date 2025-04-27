import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for detecting when an element is in the viewport
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Percentage of element that needs to be visible (0-1)
 * @param {string} options.rootMargin - Margin around the root element
 * @param {boolean} options.triggerOnce - Whether to trigger only once
 * @returns {Array} [ref, isInView] - Reference to attach to element and boolean indicating if element is in view
 */
const useInView = ({
  threshold = 0.05,
  rootMargin = '25% 0px', // More aggressive rootMargin to start animations earlier
  triggerOnce = true
} = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const observerRef = useRef(null);
  // Track if we're in a touch device for different animation thresholds
  const isTouchDevice = useRef(
    typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)
  );
  
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    
    // Cleanup previous observer before creating a new one
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    // Handle the intersection with animation frame timing
    const handleIntersection = (entries) => {
      const [entry] = entries;
      
      if (entry.isIntersecting) {
        // Use requestAnimationFrame for smoother animation aligned with browser rendering
        requestAnimationFrame(() => {
          // Introduce a tiny delay for sequential elements
          setTimeout(() => {
            setIsInView(true);
            
            // Unobserve if we only want to trigger once
            if (triggerOnce && observerRef.current) {
              observerRef.current.unobserve(currentRef);
            }
          }, 10); // Very slight delay helps with sequencing
        });
      } else if (!triggerOnce) {
        // Reset if we want to trigger multiple times, but with a transition out
        requestAnimationFrame(() => {
          setIsInView(false);
        });
      }
    };
    
    // Adjust threshold and rootMargin for touch devices if needed
    const config = {
      threshold: isTouchDevice.current ? Math.min(threshold, 0.05) : threshold,
      rootMargin: isTouchDevice.current ? '15% 0px' : rootMargin 
    };
    
    observerRef.current = new IntersectionObserver(handleIntersection, config);
    observerRef.current.observe(currentRef);
    
    return () => {
      if (observerRef.current && currentRef) {
        observerRef.current.unobserve(currentRef);
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, triggerOnce]);
  
  return [ref, isInView];
};

export default useInView; 