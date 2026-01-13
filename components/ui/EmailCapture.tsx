'use client';

import { useState } from 'react';

interface EmailCaptureProps {
  variant?: 'default' | 'compact';
  leadMagnet?: string;
}

export default function EmailCapture({ variant = 'default', leadMagnet = 'Free AI Meal Planner' }: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Track email capture
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'email_signup', {
          event_category: 'engagement',
          event_label: leadMagnet,
          value: 1
        });
      }

      // TODO: Replace with your actual newsletter API endpoint
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, leadMagnet }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('✅ Check your email for your free meal planner!');
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

  if (variant === 'compact') {
    return (
      <div className="max-w-md">
        {status === 'success' ? (
          <div className="bg-sage-100 text-sage-700 p-4 rounded-lg font-medium text-center">
            {message}
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-full border-2 border-sand-200 focus:border-sage-400 focus:outline-none"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-sage text-white px-8 py-3 rounded-full font-semibold hover:bg-sage-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 whitespace-nowrap"
              >
                {status === 'loading' ? 'Sending...' : 'Get Free Plan'}
              </button>
            </form>
            {status === 'error' && (
              <p className="text-red-600 text-sm mt-2">{message}</p>
            )}
          </>
        )}
      </div>
    );
  }

  return (
    <div className="glass-card p-8 rounded-3xl border-2 border-sage-200 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <div className="text-5xl mb-4">🎁</div>
        <h3 className="text-3xl font-bold text-slate-700 mb-2">
          Get Your Free {leadMagnet}
        </h3>
        <p className="text-lg text-slate-600">
          Join 15,000+ home cooks and get weekly recipes, cooking tips, and exclusive AI-powered meal plans.
        </p>
      </div>
      
      {status === 'success' ? (
        <div className="bg-sage-100 text-sage-700 p-6 rounded-2xl text-center font-medium text-lg">
          {message}
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 rounded-full border-2 border-sand-200 focus:border-sage-400 focus:outline-none text-lg"
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-sage text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-sage-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 whitespace-nowrap"
            >
              {status === 'loading' ? 'Sending...' : 'Get My Free Plan 🚀'}
            </button>
          </form>
          {status === 'error' && (
            <p className="text-red-600 text-center mt-3">{message}</p>
          )}
          <p className="text-sm text-slate-500 text-center mt-4">
            🔒 No spam, ever. Unsubscribe anytime. Your privacy matters.
          </p>
        </>
      )}
    </div>
  );
}






