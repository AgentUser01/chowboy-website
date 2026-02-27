import type { Metadata } from 'next';
import Image from 'next/image';
import AppStoreBadge from '@/components/ui/AppStoreBadge';
import AndroidWaitlist from '@/components/ui/AndroidWaitlist';
import HowItWorks from '@/components/ui/HowItWorks';
import TrustBadges from '@/components/ui/TrustBadges';
import { FAQSchema } from '@/components/seo/StructuredData';
import UserAvatars from '@/components/ui/UserAvatars';
import Testimonials from '@/components/ui/Testimonials';
import StatsBar from '@/components/ui/StatsBar';
import TrackedDownloadButton from '@/components/ui/TrackedDownloadButton';

export const metadata: Metadata = {
  title: 'Chowboy | Save Recipes from Anywhere. Cook Smarter.',
  description: 'Save recipes from Instagram, TikTok, websites, or photos of cookbooks. AI-powered meal planning, grocery lists, nutrition analysis, and step-by-step cooking instructions. Free recipe manager app.',
  alternates: {
    canonical: 'https://chowboy.io/',
  },
};

const faqs = [
  {
    question: 'How do I import recipes into Chowboy?',
    answer: 'Share any link directly from Instagram, TikTok, or any website straight to Chowboy. You can also point your camera at a cookbook page or recipe card and Chowboy will scan and import it automatically.',
  },
  {
    question: 'Does Chowboy have meal planning?',
    answer: 'Yes! Chowboy has a full weekly meal planner. Add any recipe to any day, track calories for each day, and build your grocery list automatically from your entire meal plan.',
  },
  {
    question: 'Can Chowboy help with grocery shopping?',
    answer: 'Absolutely. Chowboy auto-generates grocery lists from your saved recipes and meal plans, organized by category (Produce, Dairy, Pantry, etc.) so you can shop faster. Check off items as you go.',
  },
  {
    question: 'What makes Chowboy different from other recipe apps?',
    answer: 'Chowboy is the only app that combines social media recipe import, cookbook scanning, a full AI Chef assistant, meal planning, grocery lists, nutrition analysis, and step-by-step cooking mode — all in one place.',
  },
  {
    question: 'Can I use Chowboy for free?',
    answer: 'Yes! Chowboy is free to download with core features included. Premium features like unlimited AI tips, advanced nutrition analysis, and unlimited meal planning are available with a subscription.',
  },
];

export default function Home() {
  return (
    <div className="pt-20">
      <FAQSchema faqs={faqs} />

      {/* ===== HERO ===== */}
      <section className="hero-gradient-bg container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-icy-50 border border-icy-200 text-icy-700 px-4 py-1.5 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-icy-500 rounded-full animate-pulse inline-block"></span>
              Now on the App Store
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Save recipes from
              <br />
              <span className="gradient-text">anywhere. Cook</span>
              <br />
              <span className="text-slate">smarter every day.</span>
            </h1>

            <UserAvatars />

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Import from Instagram, TikTok, any website, or a photo of your cookbook. Get AI-powered meal plans, grocery lists, nutrition breakdowns, and step-by-step cooking guidance.
            </p>

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
              </div>
              <div className="md:max-w-md">
                <AndroidWaitlist />
              </div>
            </div>

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

          {/* Hero screenshot */}
          <div className="relative order-first md:order-last">
            <div className="relative w-full aspect-[9/16] max-w-[280px] mx-auto">
              <div className="absolute -inset-6 bg-gradient-to-br from-icy/20 via-sage/20 to-mustard/20 rounded-3xl blur-3xl"></div>
              <Image
                src="/images/discover-recipes-app.png"
                alt="Chowboy app showing recipe discovery feed with personalized picks"
                fill
                sizes="(max-width: 768px) 280px, 280px"
                className="object-contain relative z-10 phone-glow-blue"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BADGES ===== */}
      <section className="container mx-auto px-6 py-12">
        <TrustBadges />
      </section>

      {/* ===== DARK FEATURE: ALL YOUR RECIPES IN ONE PLACE ===== */}
      <section className="dark-feature-section py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="inline-block bg-sage/20 border border-sage/30 text-sage-300 px-4 py-1 rounded-full text-sm font-semibold">
                Recipe Manager
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                All your recipes,<br />
                <span className="text-icy-300">in one place</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Stop losing recipes across saved posts, browser tabs, and dog-eared cookbooks. Every recipe you&apos;ve ever saved lives in Chowboy — organized, searchable, and always a tap away. Build cookbooks, track streaks, and share with friends.
              </p>
              <ul className="space-y-3">
                {['193 recipes, 3 cookbooks — all yours', 'Track which recipes you\'ve cooked', 'Cooking streaks to keep you motivated', 'Follow friends and share discoveries'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-sage-400 mt-0.5 text-lg">✓</span>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
              <TrackedDownloadButton
                location="dark_section_recipes"
                className="inline-block bg-icy text-white px-8 py-3 rounded-full font-semibold hover:bg-icy-600 transition-all shadow-lg hover:scale-105"
              >
                Start Building Your Collection
              </TrackedDownloadButton>
            </div>
            <div className="relative w-full aspect-[9/16] max-w-[260px] mx-auto md:mx-0 md:ml-auto">
              <Image
                src="/images/all-recipes-one-place.png"
                alt="Chowboy app showing a user's recipe collection with 193 saved recipes"
                fill
                sizes="260px"
                className="object-contain phone-glow-blue"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== LIGHT FEATURE: MEAL PLANNING ===== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div className="relative w-full aspect-[9/16] max-w-[260px] mx-auto order-last md:order-first">
              <div className="absolute -inset-4 bg-gradient-to-br from-sage/15 via-icy/15 to-mustard/15 rounded-3xl blur-2xl"></div>
              <Image
                src="/images/meal-plan-customization.png"
                alt="Chowboy weekly meal planner showing customized daily meal plans with calorie tracking"
                fill
                sizes="260px"
                className="object-contain relative z-10 phone-glow-green"
                loading="lazy"
              />
            </div>
            <div className="space-y-6 order-first md:order-last">
              <div className="inline-block bg-sage-100 text-sage-700 px-4 py-1 rounded-full text-sm font-semibold">
                Meal Planning
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-700 leading-tight">
                Customize your<br />
                <span className="gradient-text">meal plans</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Plan your entire week in minutes. Drag any recipe to any day, see daily calorie totals automatically, and generate your full grocery list with one tap. Meal prepping has never been this effortless.
              </p>
              <ul className="space-y-3">
                {['Weekly view with calorie tracking per day', 'Add any saved recipe to any meal slot', 'Auto-generate grocery lists from your plan', 'Breakfast, lunch, dinner, and dessert support'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-sage font-bold mt-0.5 text-lg">✓</span>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DARK FEATURE: NUTRITION ===== */}
      <section className="dark-feature-section py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="inline-block bg-mustard/20 border border-mustard/30 text-mustard-300 px-4 py-1 rounded-full text-sm font-semibold">
                Nutrition Analysis
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Get nutritional<br />
                <span className="text-mustard-300">information instantly</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Know exactly what you&apos;re eating. Chowboy&apos;s AI breaks down every recipe into full macronutrient profiles — calories, protein, carbs, fat, fiber, sodium, and more. Plus health benefits explained in plain language.
              </p>
              <ul className="space-y-3">
                {['Full macronutrient breakdown per recipe', 'Health benefits explained clearly', 'AI-powered analysis for any recipe', 'Supports dietary goal tracking'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-mustard-400 mt-0.5 text-lg">✓</span>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
              <TrackedDownloadButton
                location="dark_section_nutrition"
                className="inline-block bg-mustard text-slate px-8 py-3 rounded-full font-semibold hover:bg-mustard-500 transition-all shadow-lg hover:scale-105"
              >
                Analyze Your Recipes
              </TrackedDownloadButton>
            </div>
            <div className="relative w-full aspect-[9/16] max-w-[260px] mx-auto md:mx-0 md:ml-auto">
              <Image
                src="/images/nutrition-analysis-app.png"
                alt="Chowboy nutrition analysis showing macronutrient breakdown with protein, carbs, fat and calories"
                fill
                sizes="260px"
                className="object-contain phone-glow-yellow"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
      <section className="py-20 bg-sand-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">
              Everything you need to cook smarter
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From saving that TikTok recipe to stepping through instructions while you cook, Chowboy has you covered.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: '/images/save-recipes-social-media.png',
                label: 'Save from Social',
                title: 'Save from Instagram & TikTok',
                desc: 'Share any recipe link directly to Chowboy. No more screenshots.',
                glow: 'from-icy/20 to-sage/20',
              },
              {
                image: '/images/import-recipes-from-photos.png',
                label: 'Cookbook Scanner',
                title: 'Import from Photos & Cookbooks',
                desc: 'Point your camera at any recipe page and Chowboy scans it in seconds.',
                glow: 'from-sage/20 to-mustard/20',
              },
              {
                image: '/images/ai-chef-recipe-generator.png',
                label: 'AI Chef',
                title: 'Craft Recipes with AI',
                desc: 'Chat with your AI Chef to generate custom recipes, get substitutes, or plan a meal.',
                glow: 'from-mustard/20 to-icy/20',
              },
              {
                image: '/images/grocery-list-from-recipes.png',
                label: 'Grocery Lists',
                title: 'Build Grocery Lists from Recipes',
                desc: 'Auto-categorized by section — Produce, Dairy, Pantry. Check off as you shop.',
                glow: 'from-icy/20 to-mustard/20',
              },
              {
                image: '/images/step-by-step-cooking.png',
                label: 'Cooking Mode',
                title: 'Cook with Step-by-Step Instructions',
                desc: 'Progress through each step hands-free with ingredient highlights and auto timers.',
                glow: 'from-sage/20 to-icy/20',
              },
              {
                image: '/images/discover-recipes-app.png',
                label: 'Discovery',
                title: 'Discover Recipes You\'ll Love',
                desc: 'Personalized recipe picks, curated collections, and trending meals.',
                glow: 'from-mustard/20 to-sage/20',
              },
            ].map((feat) => (
              <div key={feat.title} className="screenshot-card bg-white rounded-2xl overflow-hidden border border-sand-200">
                <div className={`relative h-44 bg-gradient-to-br ${feat.glow} overflow-hidden flex items-center justify-center`}>
                  <div className="relative h-full w-full max-w-[120px] mx-auto py-3">
                    <Image
                      src={feat.image}
                      alt={feat.title}
                      fill
                      sizes="120px"
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold text-icy-600 uppercase tracking-wide mb-1">{feat.label}</div>
                  <h3 className="text-base font-bold text-slate-700 mb-1">{feat.title}</h3>
                  <p className="text-sm text-slate-500">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 space-y-4">
            <TrackedDownloadButton
              location="features_grid"
              className="inline-block bg-sage text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-sage-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Download Free — Start Cooking Smarter
            </TrackedDownloadButton>
            <div>
              <a href="/features" className="inline-block text-sage hover:text-sage-600 transition-colors font-medium">
                See all features →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <HowItWorks />

      {/* ===== STATS ===== */}
      <StatsBar />

      {/* ===== CTA AFTER STATS ===== */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center">
          <TrackedDownloadButton
            location="after_stats"
            className="inline-block bg-icy text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-icy-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Join 15,000+ Home Cooks Today
          </TrackedDownloadButton>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <Testimonials />

      {/* ===== FAQ ===== */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white p-6 rounded-xl border-2 border-sand-200 hover:border-sage-300 transition-colors">
                <h3 className="text-lg font-bold text-slate mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEO CONTENT ===== */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate mb-6">
            The Best Recipe Manager App for Home Cooks
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6 text-lg">
            Chowboy is the recipe manager app that goes wherever your food inspiration does. Browsing TikTok and see something delicious? Share it straight to Chowboy. Scrolling through Instagram Reels? Same thing. Found a recipe on a food blog? One tap import. Inherited grandma&apos;s cookbook? Scan a photo of the page and it&apos;s in your collection in seconds.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6 text-lg">
            But Chowboy is more than a recipe saver app. Once your recipes are in, the AI Chef helps you meal plan for the week, builds your grocery list automatically, analyzes the nutrition of every dish, and walks you through cooking step by step. It&apos;s the complete AI cooking assistant that home cooks have been waiting for.
          </p>
          <p className="text-slate-600 leading-relaxed text-lg">
            Join thousands of home cooks already cooking smarter with Chowboy. Available free on the App Store.
          </p>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="container mx-auto px-6 py-16 mb-20">
        <div className="bg-gradient-to-br from-slate-900 to-slate-700 text-white p-12 rounded-3xl text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-icy/10 via-transparent to-sage/10 pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to cook smarter?
            </h2>
            <p className="text-xl mb-8 text-slate-300">
              Save recipes from anywhere, plan your meals, and cook with confidence — all for free.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <TrackedDownloadButton
                location="footer_cta"
                className="inline-block bg-white text-slate px-10 py-4 rounded-full font-bold text-lg hover:bg-sand-50 transition-all shadow-xl hover:scale-105"
              >
                Download Free on iOS
              </TrackedDownloadButton>
              <button className="bg-white/15 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/25 transition-all border border-white/30">
                Android Coming Soon
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <span>⭐ 4.8/5 App Store Rating</span>
              <span>🔒 Privacy Protected</span>
              <span>✓ Free Forever Plan</span>
              <span>🍁 Made in Montréal</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
