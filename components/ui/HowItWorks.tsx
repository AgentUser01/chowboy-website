'use client';

import Image from 'next/image';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Import Any Recipe',
      description: 'Copy a link from Instagram, TikTok, or any website. Paste it in Chowboy. Done.',
      icon: '🔗',
      image: '/images/import-from-anywhere.png',
    },
    {
      number: '2',
      title: 'Get AI-Powered Help',
      description: 'Nutrition analysis, cooking tips, wine pairings, and ingredient substitutions—all powered by AI.',
      icon: '✨',
      image: '/images/ai-recipe-discovery.png',
    },
    {
      number: '3',
      title: 'Cook Smarter',
      description: 'Step-by-step guidance, auto-generated grocery lists, and personalized recipe recommendations.',
      icon: '👨‍🍳',
      image: '/images/chowboy_grocery-list-management.png',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">
            How Chowboy Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Three simple steps to transform your cooking experience
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
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sage to-icy flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {step.number}
                  </div>
                  <span className="text-5xl">{step.icon}</span>
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
                      Start Cooking Smarter 🚀
                    </a>
                  </div>
                )}
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <div className="relative w-full aspect-[9/16] max-w-sm mx-auto">
                  <div className="absolute -inset-4 bg-gradient-to-br from-sage/20 via-icy/20 to-mustard/20 rounded-3xl blur-2xl"></div>
                  <Image
                    src={step.image}
                    alt={`Step ${step.number}: ${step.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-contain rounded-3xl shadow-2xl relative z-10"
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






