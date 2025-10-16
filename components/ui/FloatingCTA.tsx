'use client';

import { useState, useEffect } from 'react';
import { trackFloatingCTA } from '@/lib/analytics';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Pulsing ring */}
        <div className="absolute inset-0 bg-sage rounded-full pulse-ring" />
        
        {/* Button */}
        <a
          href="https://apps.apple.com/ca/app/chowboy/id6741332753"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackFloatingCTA()}
          className="relative block bg-sage text-white p-4 rounded-full shadow-2xl hover:bg-sage-600 transition-all animate-float hover:scale-110"
          aria-label="Download Chowboy"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

