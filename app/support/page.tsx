import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with Chowboy. Contact our support team for questions about recipes, features, or your account.',
  alternates: {
    canonical: 'https://chowboy.io/support/',
  },
};

export default function SupportPage() {
  return (
    <div className="pt-20">
      <section className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Support</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Need help? We&apos;re here for you.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Contact Us</h2>
          <p>
            For questions, feedback, or technical support, please email us at:
          </p>
          <p className="text-indigo-600 font-semibold">
            <a href="mailto:support@chowboy.io">support@chowboy.io</a>
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Frequently Asked Questions</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">How do I import recipes?</h3>
          <p>
            Simply copy the link to any recipe from a website, Instagram, or TikTok, then paste it into Chowboy. 
            Our AI will automatically extract and format the recipe for you.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Can I use Chowboy offline?</h3>
          <p>
            Yes! Once you&apos;ve imported recipes, they&apos;re available offline so you can cook anytime, anywhere.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">How do I cancel my subscription?</h3>
          <p>
            You can manage your subscription through your App Store account settings. 
            Go to Settings → Your Name → Subscriptions on your iPhone or iPad.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Is my data secure?</h3>
          <p>
            Absolutely. We take your privacy seriously and use industry-standard encryption to protect your data. 
            Read our <a href="/privacy" className="text-indigo-600 hover:text-indigo-700">Privacy Policy</a> for more details.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Feature Requests</h2>
          <p>
            Have an idea for a new feature? We&apos;d love to hear it! Send your suggestions to{' '}
            <a href="mailto:support@chowboy.io" className="text-indigo-600">support@chowboy.io</a>
          </p>
        </div>
      </section>
    </div>
  );
}

