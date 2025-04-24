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
  threshold = 0.2,
  rootMargin = '0px',
  triggerOnce = true
} = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when element enters viewport
        if (entry.isIntersecting) {
          setIsInView(true);
          
          // Unobserve if we only want to trigger once
          if (triggerOnce) {
            observer.unobserve(currentRef);
          }
        } else if (!triggerOnce) {
          // Reset if we want to trigger multiple times
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );
    
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);
  
  return [ref, isInView];
};

export default useInView; 