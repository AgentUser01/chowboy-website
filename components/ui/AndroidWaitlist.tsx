'use client';

import { useState } from 'react';

export default function AndroidWaitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Track waitlist signup
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'android_waitlist_signup', {
          event_category: 'engagement',
          event_label: 'Android Waitlist',
          value: 1
        });
      }

      // TODO: Replace with your actual API endpoint
      const response = await fetch('/api/android-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('🎉 You\'re on the list! We\'ll notify you when Android launches.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Oops! Something went wrong. Please try again.');
    }
  };

  return (
    <div className="glass-card p-6 rounded-2xl border-2 border-icy-300">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">🤖</span>
        <div>
          <h3 className="text-lg font-bold text-slate-700">
            Want Chowboy on Android?
          </h3>
          <p className="text-sm text-slate-600">
            Join the waitlist and be first to know!
          </p>
        </div>
      </div>
      
      {status === 'success' ? (
        <div className="bg-sage-100 text-sage-700 p-3 rounded-lg text-sm font-medium">
          {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-2 rounded-lg border-2 border-sand-200 focus:border-icy-400 focus:outline-none text-sm"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-icy text-white px-6 py-2 rounded-lg font-semibold hover:bg-icy-600 transition-colors disabled:opacity-50 text-sm whitespace-nowrap"
          >
            {status === 'loading' ? 'Joining...' : 'Notify Me'}
          </button>
        </form>
      )}
      
      {status === 'error' && (
        <p className="text-red-600 text-sm mt-2">{message}</p>
      )}
    </div>
  );
}






