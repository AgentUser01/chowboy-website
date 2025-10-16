'use client';

import { useEffect, useState, useRef } from 'react';

export default function StatsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: 15000, label: 'Active Users', suffix: '+', color: 'text-sage' },
    { value: 50000, label: 'Recipes Saved', suffix: '+', color: 'text-icy' },
    { value: 100000, label: 'AI Tips Generated', suffix: '+', color: 'text-mustard' },
    { value: 4.8, label: 'App Store Rating', decimals: 1, color: 'text-sage' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2500; // 2.5 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(currentStep * increment, stat.value);
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <div ref={statsRef} className="stats-bar bg-white py-16 border-y border-sage-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className={`text-4xl md:text-5xl font-bold ${stat.color}`}>
                {stat.decimals 
                  ? counts[index].toFixed(stat.decimals)
                  : Math.floor(counts[index]).toLocaleString()
                }
                {stat.suffix}
              </div>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

