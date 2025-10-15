import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read our privacy policy to learn how Chowboy protects and handles your data.',
  alternates: {
    canonical: 'https://chowboy.io/privacy/',
  },
};

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-sm text-gray-500 mb-8">Last updated: January 15, 2025</p>

          <p className="text-xl mb-8">
            At Chowboy, we take your privacy seriously. This policy outlines how we collect, use, and protect your information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
          <p>When you use Chowboy, we may collect:</p>
          <ul>
            <li>Account information (email, name)</li>
            <li>Recipe data you save and create</li>
            <li>Usage data and preferences</li>
            <li>Device information for app functionality</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Personalize your recipe recommendations</li>
            <li>Send important updates and notifications</li>
            <li>Ensure security and prevent fraud</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your data, including encryption 
            and secure server infrastructure.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request data deletion</li>
            <li>Opt-out of marketing communications</li>
            <li>Export your recipe data</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p>
            For privacy-related questions, contact us at{' '}
            <a href="mailto:support@chowboy.io" className="text-indigo-600">support@chowboy.io</a>
          </p>
        </div>
      </section>
    </div>
  );
}

