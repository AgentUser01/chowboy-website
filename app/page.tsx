import type { Metadata } from 'next';
import Image from 'next/image';
import AppStoreBadge from '@/components/ui/AppStoreBadge';
import GooglePlayBadge from '@/components/ui/GooglePlayBadge';
import AndroidWaitlist from '@/components/ui/AndroidWaitlist';
import HowItWorks from '@/components/ui/HowItWorks';
import TrustBadges from '@/components/ui/TrustBadges';
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
      {/* Hero Section - ABOVE THE FOLD OPTIMIZED */}
      <section className="hero-gradient-bg container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Benefit-focused headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Cook smarter with
              <br />
              <span className="gradient-text">AI-powered recipes</span>
              <br />
              <span className="text-slate">at your fingertips</span>
            </h1>
            
            {/* Social proof immediately visible */}
            <UserAvatars />
            
            {/* Clear value proposition */}
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              Import recipes from Instagram, TikTok, or any website. Get instant nutrition analysis, cooking tips, and personalized meal plans. Join 15,000+ home cooks transforming their kitchen.
            </p>
            
            {/* PROMINENT CTAs - App Store + Android Waitlist ABOVE THE FOLD */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://apps.apple.com/ca/app/chowboy/id6741332753" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block hover:scale-105 transition-transform"
                >
                  <AppStoreBadge />
                </a>
                {/* Placeholder for Google Play - currently showing waitlist */}
              </div>
              
              <div className="md:max-w-md">
                <AndroidWaitlist />
              </div>
            </div>
            
            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 text-sm text-slate-600 pt-2">
              <span className="flex items-center gap-2">
                <span className="text-sage font-bold">✓</span> Free to download
              </span>
              <span className="flex items-center gap-2">
                <span className="text-sage font-bold">✓</span> No credit card needed
              </span>
              <span className="flex items-center gap-2">
                <span className="text-sage font-bold">✓</span> No spam, ever
              </span>
            </div>
          </div>
          
          {/* App Preview Image */}
          <div className="relative order-first md:order-last">
            <div className="relative w-full aspect-[9/16] max-w-sm mx-auto">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-sage/30 via-icy/30 to-mustard/30 rounded-3xl blur-3xl"></div>
              <Image
                src="/images/ai-recipe-discovery 3.png"
                alt="Chowboy App showing AI-powered recipe discovery and cooking tips"
                fill
                sizes="(max-width: 768px) 100vw, 384px"
                className="object-contain rounded-3xl shadow-2xl relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges - Immediately after hero */}
      <section className="container mx-auto px-6 py-12">
        <TrustBadges />
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

          {/* CTA repeated after features */}
          <div className="text-center mt-12 space-y-4">
            <TrackedDownloadButton
              location="features_section"
              className="inline-block bg-sage text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-sage-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Start Cooking Smarter – Download Free
            </TrackedDownloadButton>
            <div>
              <a href="/features" className="inline-block text-sage hover:text-sage-600 transition-colors font-medium">
                Explore All Features →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Stats Bar */}
      <StatsBar />

      {/* CTA after stats */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center">
          <TrackedDownloadButton
            location="after_stats"
            className="inline-block bg-icy text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-icy-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Join 15,000+ Home Cooks Today 🚀
          </TrackedDownloadButton>
        </div>
      </section>

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
        <div className="bg-gradient-to-br from-sage to-sage-600 text-white p-12 rounded-3xl text-center max-w-4xl mx-auto shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Cooking?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Join 15,000+ home cooks who save time, reduce food waste, and cook better meals with AI-powered recipe management.
          </p>
          
          {/* App Store + Android options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <TrackedDownloadButton
              location="footer_cta"
              className="inline-block bg-white text-sage px-10 py-4 rounded-full font-bold text-lg hover:bg-sand-50 transition-all shadow-xl hover:scale-105"
            >
              Download Free on iOS
            </TrackedDownloadButton>
            <button className="bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all border-2 border-white/40">
              Android Coming Soon
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
            <span className="flex items-center gap-2">
              ⭐ 4.8/5 App Store Rating
            </span>
            <span className="flex items-center gap-2">
              🔒 Privacy Protected
            </span>
            <span className="flex items-center gap-2">
              ✓ Free Forever Plan
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
