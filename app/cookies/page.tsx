import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn about how Chowboy uses cookies and similar technologies.',
  alternates: {
    canonical: 'https://chowboy.io/cookies/',
  },
};

export default function CookiesPage() {
  return (
    <div className="pt-20">
      <section className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-5xl font-bold text-slate mb-8">Cookie Policy</h1>
        
        <div className="prose prose-lg max-w-none text-slate-700">
          <p className="text-sm text-gray-500 mb-8">Last updated: January 15, 2025</p>

          <p className="text-xl mb-8">
            This policy explains how Chowboy uses cookies and similar technologies.
          </p>

          <h2 className="text-2xl font-bold text-slate mt-8 mb-4">What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device that help websites remember your preferences 
            and improve your experience.
          </p>

          <h2 className="text-2xl font-bold text-slate mt-8 mb-4">How We Use Cookies</h2>
          <p>We use cookies to:</p>
          <ul>
            <li>Remember your preferences and settings</li>
            <li>Understand how you use our website</li>
            <li>Improve website performance</li>
            <li>Provide personalized content</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate mt-8 mb-4">Types of Cookies We Use</h2>
          
          <h3 className="text-xl font-semibold text-slate mt-6 mb-3">Essential Cookies</h3>
          <p>
            Required for the website to function properly. These cannot be disabled.
          </p>

          <h3 className="text-xl font-semibold text-slate mt-6 mb-3">Analytics Cookies</h3>
          <p>
            Help us understand how visitors interact with our website by collecting anonymous information.
          </p>

          <h3 className="text-xl font-semibold text-slate mt-6 mb-3">Functionality Cookies</h3>
          <p>
            Remember your preferences and provide enhanced features.
          </p>

          <h2 className="text-2xl font-bold text-slate mt-8 mb-4">Managing Cookies</h2>
          <p>
            You can control cookies through your browser settings. Note that blocking some cookies may 
            affect website functionality.
          </p>

          <h2 className="text-2xl font-bold text-slate mt-8 mb-4">Contact</h2>
          <p>
            Questions about our cookie policy? Contact us at{' '}
            <a href="mailto:support@chowboy.io" className="text-indigo-600">support@chowboy.io</a>
          </p>
        </div>
      </section>
    </div>
  );
}

