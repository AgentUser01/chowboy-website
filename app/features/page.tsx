import type { Metadata } from 'next';
import Image from 'next/image';
import TrackedDownloadButton from '@/components/ui/TrackedDownloadButton';

export const metadata: Metadata = {
  title: 'Features | Save, Plan & Cook Smarter',
  description: 'Every feature in Chowboy: save recipes from Instagram & TikTok, scan cookbooks, plan meals, build grocery lists, get nutrition analysis, and cook with step-by-step instructions. Free recipe app.',
  alternates: {
    canonical: 'https://chowboy.io/features/',
  },
};

type Feature = {
  label: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  dark?: boolean;
};

const features: Feature[] = [
  {
    label: 'Social Media Import',
    title: 'Save recipes from Instagram & TikTok',
    description: 'See something delicious while scrolling? Share it straight to Chowboy. One tap — recipe saved, cleaned up, and ready to cook.',
    points: [
      'Works with Instagram Reels and posts',
      'Works with TikTok videos',
      'AI extracts the full recipe automatically',
      'Auto-formatted into a clean, readable card',
    ],
    image: '/images/save-recipes-social-media.png',
    imageAlt: 'Chowboy iOS share sheet showing how to save a recipe from Instagram directly to the app',
    dark: false,
  },
  {
    label: 'Cookbook Scanner',
    title: 'Import from photos & cookbooks',
    description: 'Point your camera at any recipe page — a cookbook, a printed card, a magazine — and Chowboy reads it for you. No typing required.',
    points: [
      'Scans printed recipe pages with your camera',
      'Works with cookbooks, cards, and clippings',
      'AI parses ingredients and instructions',
      'Stores everything in your digital collection',
    ],
    image: '/images/import-recipes-from-photos.png',
    imageAlt: 'Chowboy camera scanner importing a printed cookbook recipe from a physical book',
    dark: true,
  },
  {
    label: 'Recipe Discovery',
    title: 'Discover recipes you\'ll actually make',
    description: 'Chowboy learns what you like and surfaces recipes worth trying. Personalized picks, curated collections, and trending meals — updated daily.',
    points: [
      'Personalized "Chosen for You" picks',
      'Curated collections like Protein Picks and Cozy One-Pot Nights',
      'Follow friends to see what they\'re cooking',
      'Discover trending meals in your community',
    ],
    image: '/images/discover-recipes-app.png',
    imageAlt: 'Chowboy recipe discovery feed showing personalized recipe picks including Healthy Banana Muffins and Chicken with Rice',
    dark: false,
  },
  {
    label: 'AI Chef Assistant',
    title: 'Craft your own recipes with AI',
    description: 'Chat with your personal AI Chef. Ask it to plan a dinner party, generate a recipe from what\'s in your fridge, suggest substitutions, or explain a technique — it can do all of it.',
    points: [
      'Generate full recipes from a description',
      'Ask about knife skills, searing, internal temps',
      'Get substitutions with correct amounts',
      'Plan meals for any occasion or diet',
    ],
    image: '/images/ai-chef-recipe-generator.png',
    imageAlt: 'Chowboy AI Chef Assistant chat interface generating a custom Superbowl recipe',
    dark: true,
  },
  {
    label: 'Cooking Mode',
    title: 'Cook with step-by-step instructions',
    description: 'Follow along one step at a time. Ingredients for each step are highlighted, timers are detected automatically, and the screen stays on so you never lose your place.',
    points: [
      'One step at a time — no scrolling needed',
      'Per-step ingredient highlights',
      'Auto-detected timers you can start with a tap',
      'Screen stays on while you cook',
    ],
    image: '/images/step-by-step-cooking.png',
    imageAlt: 'Chowboy step-by-step cooking mode showing step 2 of 13 for One-Pan Lasagna with a timer detected',
    dark: false,
  },
  {
    label: 'Grocery Lists',
    title: 'Build grocery lists from recipes',
    description: 'Add a recipe to your list and Chowboy handles the rest. Ingredients are merged, de-duplicated, and sorted by store section so you can shop in one smooth pass.',
    points: [
      'Auto-organized by category: Produce, Dairy, Pantry…',
      'Build from one recipe or an entire meal plan',
      'Check off items as you shop',
      'Add custom items alongside recipe items',
    ],
    image: '/images/grocery-list-from-recipes.png',
    imageAlt: 'Chowboy grocery list organized by category showing Produce, Bakery, Dairy & Eggs sections with check-off capability',
    dark: true,
  },
  {
    label: 'Meal Planning',
    title: 'Customize your weekly meal plans',
    description: 'Plan breakfast, lunch, dinner, and dessert for the entire week. See your calorie totals per day at a glance, then generate your full grocery list in one tap.',
    points: [
      'Weekly view across all meal slots',
      'Daily calorie totals calculated automatically',
      'Add any saved recipe to any day',
      'Generate the grocery list for your whole week',
    ],
    image: '/images/meal-plan-customization.png',
    imageAlt: 'Chowboy weekly meal planner showing Monday and Tuesday with meals and calorie counts',
    dark: false,
  },
  {
    label: 'Nutrition Analysis',
    title: 'Get nutritional information instantly',
    description: 'Know exactly what you\'re eating. Every recipe in Chowboy comes with a full nutritional breakdown powered by AI — macros, minerals, and health benefits in plain language.',
    points: [
      'Calories, protein, carbs, fat, fiber, sodium, sugar',
      'Health benefits explained clearly',
      'Works on any recipe you save or create',
      'Supports dietary and fitness goals',
    ],
    image: '/images/nutrition-analysis-app.png',
    imageAlt: 'Chowboy nutrition analysis showing macronutrient breakdown with 53g protein, 765 calories, and health benefits',
    dark: true,
  },
  {
    label: 'Your Collection',
    title: 'All your recipes, in one place',
    description: 'Everything you\'ve ever saved, organized exactly how you want it. Create cookbooks, track what you\'ve cooked, build your cooking streak, and share your collection with friends.',
    points: [
      'Unlimited recipe storage',
      'Organize into custom cookbooks',
      'Track cooked recipes and build streaks',
      'Follow friends and share your favorites',
    ],
    image: '/images/all-recipes-one-place.png',
    imageAlt: 'Chowboy user profile showing 193 saved recipes across 3 cookbooks with a cooking streak',
    dark: false,
  },
];

export default function FeaturesPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="hero-gradient-bg container mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto animate-slideUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Every feature</span> you need to cook better
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            From saving a TikTok recipe to walking through every cooking step — Chowboy does it all.
          </p>
          <a
            href="https://apps.apple.com/ca/app/chowboy/id6741332753"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sage text-white px-8 py-3 rounded-full font-semibold hover:bg-sage-600 transition-all shadow-lg hover:scale-105"
          >
            Download Free on iOS
          </a>
        </div>
      </section>

      {/* Features List */}
      <div>
        {features.map((feature, index) => (
          <section
            key={index}
            className={feature.dark ? 'dark-feature-section py-20' : 'py-20 bg-white'}
          >
            <div className="container mx-auto px-6">
              <div
                className={`grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto ${
                  index % 2 === 0 ? '' : 'md:[&>*:first-child]:order-last'
                }`}
              >
                {/* Content */}
                <div className="space-y-6">
                  <div className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
                    feature.dark
                      ? 'bg-white/10 border border-white/20 text-white/80'
                      : 'bg-sage-100 text-sage-700'
                  }`}>
                    {feature.label}
                  </div>
                  <h2 className={`text-4xl font-bold leading-tight ${feature.dark ? 'text-white' : 'text-slate-700'}`}>
                    {feature.title}
                  </h2>
                  <p className={`text-lg leading-relaxed ${feature.dark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className={`mt-0.5 text-lg ${feature.dark ? 'text-icy-400' : 'text-sage'}`}>✓</span>
                        <span className={feature.dark ? 'text-slate-300' : 'text-slate-600'}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Screenshot */}
                <div className="relative w-full aspect-[9/16] max-w-[260px] mx-auto">
                  {!feature.dark && (
                    <div className="absolute -inset-4 bg-gradient-to-br from-sage/15 via-icy/15 to-mustard/15 rounded-3xl blur-2xl"></div>
                  )}
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    sizes="260px"
                    className={`object-contain relative z-10 ${feature.dark ? 'phone-glow-blue' : ''}`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="dark-feature-section py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to cook smarter?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Join <span className="font-bold text-icy-300">15,000+ home cooks</span> already using Chowboy — free to start.
            </p>
            <TrackedDownloadButton
              location="features_page_cta"
              className="inline-block bg-white text-slate-800 px-10 py-4 rounded-full font-bold text-lg hover:bg-sand-50 transition-all shadow-xl hover:scale-105"
            >
              Download Free on iOS
            </TrackedDownloadButton>
            <p className="text-sm text-slate-500 mt-4">Free to start · No credit card required</p>
          </div>
        </div>
      </section>
    </div>
  );
}
