'use client';

import { useEffect, useState } from 'react';

interface Activity {
  id: number;
  action: string;
  user: string;
  location: string;
  time: string;
}

export default function SocialProof() {
  const [visible, setVisible] = useState(false);
  const [currentActivity, setCurrentActivity] = useState<Activity | null>(null);

  const activities: Activity[] = [
    { id: 1, action: 'saved a recipe', user: 'Sarah', location: 'Toronto', time: '2 min ago' },
    { id: 2, action: 'downloaded the app', user: 'Mike', location: 'Vancouver', time: '5 min ago' },
    { id: 3, action: 'imported 10 recipes', user: 'Emma', location: 'Montreal', time: '8 min ago' },
    { id: 4, action: 'got AI cooking tips', user: 'Alex', location: 'Calgary', time: '12 min ago' },
    { id: 5, action: 'created a grocery list', user: 'Olivia', location: 'Ottawa', time: '15 min ago' },
  ];

  useEffect(() => {
    // Show first activity after 3 seconds
    const initialTimeout = setTimeout(() => {
      setCurrentActivity(activities[0]);
      setVisible(true);
    }, 3000);

    // Rotate through activities
    const interval = setInterval(() => {
      setVisible(false);
      
      setTimeout(() => {
        const randomActivity = activities[Math.floor(Math.random() * activities.length)];
        setCurrentActivity(randomActivity);
        setVisible(true);
      }, 500);
    }, 8000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!currentActivity) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div className="glass-card rounded-2xl p-4 shadow-2xl max-w-sm">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sage to-icy flex items-center justify-center text-white font-bold">
            {currentActivity.user[0]}
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-700">
              <span className="text-sage">{currentActivity.user}</span> from {currentActivity.location}
            </p>
            <p className="text-xs text-slate-600">{currentActivity.action}</p>
            <p className="text-xs text-slate-400 mt-1">{currentActivity.time}</p>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="text-slate-400 hover:text-slate-600"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}

