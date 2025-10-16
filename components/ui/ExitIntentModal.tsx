'use client';

import { useEffect, useState } from 'react';
import { trackExitIntent } from '@/lib/analytics';

export default function ExitIntentModal() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already seen the modal
    const hasSeenModal = localStorage.getItem('chowboy-exit-intent-seen');
    if (hasSeenModal) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves from top of viewport
      if (e.clientY <= 0) {
        setShow(true);
        trackExitIntent('shown');
        localStorage.setItem('chowboy-exit-intent-seen', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    trackExitIntent('submitted');
    
    // TODO: Integrate with your email service (Mailchimp, ConvertKit, etc.)
    console.log('Email submitted:', email);
    
    setSubmitted(true);
    
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  const handleClose = () => {
    trackExitIntent('dismissed');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative glass-card rounded-3xl p-8 max-w-md mx-4 shadow-2xl animate-fadeIn">
        {!submitted ? (
          <>
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl"
              aria-label="Close"
            >
              ×
            </button>

            {/* Content */}
            <div className="text-center">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-3xl font-bold text-slate-700 mb-4">
                Wait! Before you go...
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                Get <span className="font-bold text-sage">5 AI-generated recipes</span> delivered to your inbox
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-full border-2 border-sage-200 focus:border-sage focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-sage text-white px-8 py-3 rounded-full font-semibold hover:bg-sage-600 transition-all shadow-lg hover:shadow-xl"
                >
                  Send Me Recipes 🚀
                </button>
              </form>

              <p className="text-xs text-slate-500 mt-4">
                No spam. Unsubscribe anytime. Your email is safe with us.
              </p>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-sage mb-2">Success!</h3>
            <p className="text-slate-600">Check your inbox for your free recipes</p>
          </div>
        )}
      </div>
    </div>
  );
}

