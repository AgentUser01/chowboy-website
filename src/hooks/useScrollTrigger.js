import { useState, useEffect, useRef } from 'react';

// Custom hook to detect when an element is visible in viewport
const useScrollTrigger = (threshold = 0.1, once = true) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When element enters viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // If we only want to trigger once, unobserve
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          // If element leaves viewport and we want continuous tracking
          setIsVisible(false);
        }
      },
      {
        root: null, // viewport
        threshold, // % of element visible to trigger
        rootMargin: '0px 0px -50px 0px' // slightly earlier trigger
      }
    );

    observer.observe(element);
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, once]);

  return { ref, isVisible };
};

export default useScrollTrigger; 