'use client';

import Image from 'next/image';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      label: 'Save',
      title: 'Save from anywhere',
      description: 'Share any recipe link from Instagram, TikTok, or any website directly to Chowboy. Or point your camera at a cookbook page. Your recipe is saved and cleaned up in seconds.',
      icon: '📲',
      image: '/images/save-recipes-social-media.png',
      imageAlt: 'Saving a recipe from Instagram to Chowboy via the iOS share sheet',
      glowClass: 'from-icy/20 via-sage/20 to-transparent',
    },
    {
      number: '2',
      label: 'Plan',
      title: 'Let AI do the heavy lifting',
      description: 'Chat with your AI Chef to generate recipes, plan your week, understand nutrition, and get expert cooking tips. Smart grocery lists are built automatically from your plans.',
      icon: '✨',
      image: '/images/ai-chef-recipe-generator.png',
      imageAlt: 'Chowboy AI Chef Assistant crafting a custom recipe in a chat interface',
      glowClass: 'from-mustard/20 via-icy/20 to-transparent',
    },
    {
      number: '3',
      label: 'Cook',
      title: 'Cook with confidence',
      description: 'Follow step-by-step instructions one at a time. Ingredients are highlighted per step, timers start with a tap, and the screen stays on so your hands stay clean.',
      icon: '👨‍🍳',
      image: '/images/step-by-step-cooking.png',
      imageAlt: 'Chowboy step-by-step cooking mode showing step 2 of One-Pan Lasagna with an auto-detected timer',
      glowClass: 'from-sage/20 via-mustard/20 to-transparent',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">
            How Chowboy works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Three simple steps from &ldquo;that looks delicious&rdquo; to &ldquo;dinner is served&rdquo;
          </p>
        </div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sage to-icy flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0">
                    {step.number}
                  </div>
                  <span className="inline-block bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {step.label}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-slate-700">
                  {step.title}
                </h3>

                <p className="text-xl text-slate-600 leading-relaxed">
                  {step.description}
                </p>

                {index === steps.length - 1 && (
                  <div className="pt-4">
                    <a
                      href="https://apps.apple.com/ca/app/chowboy/id6741332753"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-sage text-white px-8 py-4 rounded-full font-semibold hover:bg-sage-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      Start Cooking Smarter
                    </a>
                  </div>
                )}
              </div>

              {/* Screenshot */}
              <div className={`relative ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <div className="relative w-full aspect-[9/16] max-w-[260px] mx-auto">
                  <div className={`absolute -inset-4 bg-gradient-to-br ${step.glowClass} rounded-3xl blur-2xl`}></div>
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    sizes="(max-width: 768px) 260px, 260px"
                    className="object-contain rounded-3xl shadow-2xl relative z-10"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
