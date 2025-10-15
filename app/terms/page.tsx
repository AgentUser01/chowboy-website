import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the terms of service for using Chowboy app and website.',
  alternates: {
    canonical: 'https://chowboy.io/terms/',
  },
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-5xl font-bold text-slate mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none text-slate-700">
          <p className="text-sm text-gray-500 mb-8">Last updated: January 15, 2025</p>

          <p className="text-xl mb-8">
            By using Chowboy, you agree to these terms. Please read them carefully.
          </p>

          <h2 className="text-2xl font-bold text-slate mt-8 mb-4">Acceptance of Terms</h2>
          <p>
            By accessing and using Chowboy, you accept and agree to be bound by these Terms of Service.
          </p>

          <h2 className="text-2xl font-bold text-slate mt-8 mb-4">Use License</h2>
          <p>
            We grant you a personal, non-transferable license to use Chowboy for personal, non-commercial purposes.
          </p>

          <h2 className="text-2xl font-bold text-slate mt-8 mb-4">User Content</h2>
          <p>
            You retain ownership of recipes and content you create. By using our service, you grant us permission 
            to store and process your content to provide our services.
          </p>

          <h2 className="text-2xl font-bold text-slate mt-8 mb-4">Prohibited Uses</h2>
          <p>You may not:</p>
          <ul>
            <li>Use the service for any illegal purpose</li>
            <li>Attempt to access unauthorized areas</li>
            <li>Interfere with the service&apos;s operation</li>
            <li>Impersonate others or provide false information</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate mt-8 mb-4">Subscriptions</h2>
          <p>
            Some features require a paid subscription. Subscriptions auto-renew unless canceled. 
            Refunds are handled according to App Store policies.
          </p>

          <h2 className="text-2xl font-bold text-slate mt-8 mb-4">Disclaimer</h2>
          <p>
            Chowboy is provided &quot;as is&quot; without warranties. We are not responsible for any damages 
            arising from use of the service.
          </p>

          <h2 className="text-2xl font-bold text-slate mt-8 mb-4">Contact</h2>
          <p>
            Questions about these terms? Contact us at{' '}
            <a href="mailto:support@chowboy.io" className="text-indigo-600">support@chowboy.io</a>
          </p>
        </div>
      </section>
    </div>
  );
}

