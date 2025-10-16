import type { Metadata } from 'next';
import Image from 'next/image';
import AppStoreBadge from '@/components/ui/AppStoreBadge';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Discover all the powerful features that make Chowboy the smartest cooking companion. Import recipes, get AI-powered tips, manage grocery lists, and more.',
  alternates: {
    canonical: 'https://chowboy.io/features/',
  },
};

export default function FeaturesPage() {
  const features = [
    {
      title: 'Import from any link',
      description: 'Paste a link. Get a clean recipe card.',
      points: [
        'Works with websites, Instagram, TikTok',
        'Auto-formatted into a clean card',
        'Save and organize in one place',
      ],
      image: '/images/import-from-anywhere.png',
    },
    {
      title: 'Recipe picks you\'ll love',
      description: 'Personalized to taste and diet.',
      points: [
        'Smart filters by ingredients and cuisine',
        'Learns your likes over time',
        'Save favorites for quick access',
      ],
      image: '/images/ai-recipe-discovery 3.png',
    },
    {
      title: 'Smarter grocery lists',
      description: 'Build lists from recipes or scratch.',
      points: [
        'Auto-categorized items',
        'From recipes or custom items',
        'Check off as you shop',
      ],
      image: '/images/chowboy_grocery-list-management.png',
    },
    {
      title: 'Nutrition, pairings, and more',
      description: 'On‑demand cooking intel.',
      points: [
        'Nutrition breakdowns that make sense',
        'Wine pairings by flavor profile',
        'Easy dietary swaps (vegan, gluten‑free)',
        'Seasonal twists and gourmet upgrades',
      ],
      image: '/images/ai-powered-features 3.png',
    },
    {
      title: 'Tips and swaps',
      description: 'Fixes and smart substitutes, right when you need them.',
      points: [
        'Clear technique help',
        'Substitutes with correct amounts',
        'Time‑saving tips and tools',
      ],
      image: '/images/cooking-tips 3.png',
    },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="hero-gradient-bg container mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto animate-slideUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Features</span> that make cooking effortless
          </h1>
          <p className="text-xl text-slate-600">
            Cook better, faster — with just what you need.
          </p>
        </div>
      </section>

      {/* Features List */}
      <section className="container mx-auto px-6 pb-20">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass-card p-8 md:p-12 rounded-3xl hover:shadow-2xl transition-all duration-500 ${
                index % 2 === 0 ? 'hover:translate-x-2' : 'hover:-translate-x-2'
              }`}
            >
              <div className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-12 items-center`}>
                <div className="flex-1 space-y-6">
                  <div>
                    <div className="inline-block bg-gradient-to-r from-sage to-icy text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                      Feature {index + 1}
                    </div>
                    <h2 className="text-4xl font-bold text-slate-700 mb-4">{feature.title}</h2>
                    <p className="text-xl text-slate-600">{feature.description}</p>
                  </div>
                  <ul className="space-y-3">
                    {feature.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3 group">
                        <span className="text-sage text-xl mt-1 group-hover:scale-125 transition-transform">✓</span>
                        <span className="text-slate-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex-1 max-w-sm">
                  <div className="relative w-full aspect-[9/16] mx-auto group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-sage via-icy to-mustard rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="relative object-contain rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient-bg py-20 my-20">
        <div className="container mx-auto px-6">
          <div className="glass-card max-w-3xl mx-auto text-center p-12 rounded-3xl">
            <div className="text-5xl mb-6">🚀</div>
            <h2 className="text-4xl font-bold text-slate-700 mb-4">Ready to cook smarter?</h2>
            <p className="text-xl text-slate-600 mb-8">
              Join <span className="font-bold text-sage">15,000+ home cooks</span> who are already using Chowboy
            </p>
            <a
              href="https://apps.apple.com/ca/app/chowboy/id6741332753"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-sage text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-sage-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Download Free 🎉
            </a>
            <p className="text-sm text-slate-500 mt-4">Free to start • No credit card required</p>
          </div>
        </div>
      </section>
    </div>
  );
}

