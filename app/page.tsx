import type { Metadata } from 'next';
import Image from 'next/image';
import AppStoreBadge from '@/components/ui/AppStoreBadge';
import { FAQSchema } from '@/components/seo/StructuredData';
import UserAvatars from '@/components/ui/UserAvatars';
import Testimonials from '@/components/ui/Testimonials';
import StatsBar from '@/components/ui/StatsBar';
import TrackedDownloadButton from '@/components/ui/TrackedDownloadButton';

export const metadata: Metadata = {
  title: 'Chowboy | AI-Powered Recipe Manager & Cooking Companion',
  description: 'Import recipes from any website, Instagram, or TikTok. Get AI-powered cooking tips, manage grocery lists, and discover personalized recipe recommendations. Your smartest cooking companion.',
  alternates: {
    canonical: 'https://chowboy.io/',
  },
};

const faqs = [
  {
    question: 'How do I import recipes into Chowboy?',
    answer: 'Simply copy the link to any recipe from a website, Instagram, or TikTok, then paste it into Chowboy. Our AI automatically extracts and formats the recipe for you. No typing needed!',
  },
  {
    question: 'Can Chowboy help me use ingredients I already have?',
    answer: "Yes! Chowboy's AI suggests recipes based on your preferences and helps you cook with what you have. It learns your taste over time and recommends meals you'll actually want to make, reducing food waste.",
  },
  {
    question: 'What makes Chowboy different from other recipe apps?',
    answer: "Chowboy imports recipes from social media (Instagram, TikTok), provides AI-powered cooking tips, wine pairings, and nutrition analysis. It's not just a recipe app—it's your complete cooking companion.",
  },
  {
    question: 'Can I use Chowboy for free?',
    answer: 'Yes! Chowboy is free to download with core features included. Premium features like unlimited AI tips and advanced nutrition analysis are available with a subscription.',
  },
];

export default function Home() {
  return (
    <div className="pt-20">
      <FAQSchema faqs={faqs} />
      {/* Hero Section */}
      <section className="hero-gradient-bg container mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Your recipes,
              <br />
              <span className="gradient-text">organized & upgraded</span>
              <br />
              <span className="text-slate">by AI</span>
            </h1>
            
            {/* Add social proof immediately */}
            <UserAvatars />
            
            <p className="text-xl text-slate-700">
              Find, plan, and cook recipes you&apos;ll love — personalized by AI.
            </p>
            
            <div className="glass-card p-6 rounded-2xl border-2 border-sage-300">
              <span className="inline-block bg-sage text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                ✨ Effortless
              </span>
              <h3 className="text-2xl font-bold text-slate mb-2">
                Import recipes from anywhere
              </h3>
              <p className="text-slate-600">
                Paste a link. Get a clean recipe card — from websites, Instagram, or TikTok.
              </p>
            </div>
            
            {/* CTA */}
            <div>
              <TrackedDownloadButton 
                location="hero"
                className="inline-flex items-center justify-center bg-sage text-white px-8 py-4 rounded-full font-semibold hover:bg-sage-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Download Free 🚀
              </TrackedDownloadButton>
            </div>
            
            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <span className="text-sage">✓</span> Free to start
              </span>
              <span className="flex items-center gap-2">
                <span className="text-sage">✓</span> No credit card
              </span>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full aspect-[9/16] max-w-sm mx-auto">
              <Image
                src="/images/ai-recipe-discovery 3.png"
                alt="Chowboy App Preview showing AI-powered recipe discovery"
                fill
                sizes="(max-width: 768px) 100vw, 384px"
                className="object-contain rounded-3xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="bg-sand-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">
              Everything you need to cook smarter
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From recipe discovery to cooking tips, Chowboy is your all-in-one cooking companion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card feature-card p-8 rounded-2xl border-2 border-sage-100 hover:border-sage-300 transition-all">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">Smart Discovery</h3>
              <p className="text-slate-600">
                AI-powered recipe recommendations based on your taste, dietary preferences, and cooking habits.
              </p>
            </div>

            <div className="glass-card feature-card p-8 rounded-2xl border-2 border-icy-100 hover:border-icy-300 transition-all">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">Grocery Lists</h3>
              <p className="text-slate-600">
                Auto-generated shopping lists from your recipes, organized by store section.
              </p>
            </div>

            <div className="glass-card feature-card p-8 rounded-2xl border-2 border-mustard-100 hover:border-mustard-300 transition-all">
              <div className="text-4xl mb-4">🍷</div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">Wine Pairing</h3>
              <p className="text-slate-600">
                Get expert wine pairing suggestions for any dish, powered by AI.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/features" className="inline-block bg-sage text-white px-8 py-3 rounded-full font-semibold hover:bg-sage-600 transition-colors shadow-lg hover:shadow-xl hover:scale-105">
              Explore All Features
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-20 bg-sand-50 rounded-3xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border-2 border-sand-200 hover:border-sage-300 transition-colors">
              <h3 className="text-xl font-bold text-slate mb-3">
                How do I import recipes into Chowboy?
              </h3>
              <p className="text-slate-600">
                Simply copy the link to any recipe from a website, Instagram, or TikTok, then paste it into Chowboy. 
                Our AI automatically extracts and formats the recipe for you. No typing needed!
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-sand-200 hover:border-sage-300 transition-colors">
              <h3 className="text-xl font-bold text-slate mb-3">
                Can Chowboy help me use ingredients I already have?
              </h3>
              <p className="text-slate-600">
                Yes! Chowboy's AI suggests recipes based on your preferences and helps you cook with what you have. 
                It learns your taste over time and recommends meals you'll actually want to make, reducing food waste.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-sand-200 hover:border-sage-300 transition-colors">
              <h3 className="text-xl font-bold text-slate mb-3">
                What makes Chowboy different from other recipe apps?
              </h3>
              <p className="text-slate-600">
                Chowboy imports recipes from social media (Instagram, TikTok), provides AI-powered cooking tips, 
                wine pairings, and nutrition analysis. It's not just a recipe app—it's your complete cooking companion.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-sand-200 hover:border-sage-300 transition-colors">
              <h3 className="text-xl font-bold text-slate mb-3">
                Can I use Chowboy for free?
              </h3>
              <p className="text-slate-600">
                Yes! Chowboy is free to download with core features included. Premium features like unlimited AI tips 
                and advanced nutrition analysis are available with a subscription.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate mb-6">
            The Modern Way to Manage Your Recipes
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6 text-lg">
            Chowboy revolutionizes how you discover, save, and cook recipes. Whether you&apos;re browsing food blogs, 
            scrolling through Instagram, or watching TikTok cooking videos, Chowboy makes it effortless to import 
            and organize recipes from anywhere on the internet.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6 text-lg">
            Our AI-powered cooking assistant helps you with nutrition analysis, ingredient substitutions, cooking 
            tips, and even wine pairing suggestions. Say goodbye to recipe notebooks and scattered bookmarks – 
            everything you need is in one beautifully designed app.
          </p>
          <p className="text-slate-600 leading-relaxed text-lg">
            Join thousands of home cooks who are already cooking smarter with Chowboy. Available now on the App Store.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 py-16 mb-20">
        <div className="bg-sage text-white p-12 rounded-3xl text-center max-w-3xl mx-auto shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Cooking?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Download Chowboy and discover why thousands of home cooks can't cook without it.
          </p>
          <TrackedDownloadButton
            location="footer_cta"
            className="inline-block bg-white text-sage px-10 py-4 rounded-full font-bold text-lg hover:bg-sand-50 transition-colors shadow-xl"
          >
            Download Free on App Store
          </TrackedDownloadButton>
        </div>
      </section>
    </div>
  );
}
