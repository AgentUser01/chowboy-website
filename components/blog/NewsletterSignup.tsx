'use client';

import { useState, FormEvent } from 'react';
import { trackNewsletterSignup } from '@/lib/analytics';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    trackNewsletterSignup('blog_page');
    
    // TODO: Integrate with your email service
    console.log('Newsletter signup:', email);
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 rounded-3xl text-center">
          <div className="text-4xl mb-4">📧</div>
          <h3 className="text-2xl font-bold text-slate-700 mb-2">
            Get cooking tips in your inbox
          </h3>
          <p className="text-slate-600 mb-6">
            Join our newsletter for weekly recipes, tips, and exclusive content
          </p>
          {status === 'success' ? (
            <div className="max-w-md mx-auto p-4 bg-sage-100 text-sage-700 rounded-full font-semibold">
              ✅ Thanks for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                disabled={status === 'loading'}
                className="flex-1 px-4 py-3 rounded-full border-2 border-sage-200 focus:border-sage focus:outline-none disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="bg-sage text-white px-6 py-3 rounded-full font-semibold hover:bg-sage-600 transition-all shadow-lg hover:shadow-xl whitespace-nowrap disabled:opacity-50"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

