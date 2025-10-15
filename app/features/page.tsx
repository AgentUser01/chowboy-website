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
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Features</h1>
          <p className="text-xl text-gray-600">
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
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-12 items-center`}
            >
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{feature.title}</h2>
                  <p className="text-xl text-gray-600">{feature.description}</p>
                </div>
                <ul className="space-y-3">
                  {feature.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <span className="text-indigo-600 text-xl mt-1">✓</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex-1 max-w-sm">
                <div className="relative w-full aspect-[9/16] mx-auto">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain rounded-3xl shadow-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to cook smarter?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get Chowboy and start cooking your way.
          </p>
          <a
            href="https://apps.apple.com/ca/app/chowboy/id6741332753"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="bg-white rounded-xl p-2 inline-block hover:scale-105 transition-transform">
              <AppStoreBadge />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

