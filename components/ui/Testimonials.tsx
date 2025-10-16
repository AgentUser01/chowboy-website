'use client';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
  badge?: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Toronto, ON',
      rating: 5,
      text: 'Chowboy completely changed how I cook. I used to have recipes scattered across websites and notebooks. Now everything is in one place, and the AI tips are incredibly helpful!',
      avatar: 'S',
      badge: '🌟 Power User',
    },
    {
      id: 2,
      name: 'Mike Chen',
      location: 'Vancouver, BC',
      rating: 5,
      text: 'The Instagram import feature is a game-changer. I see a recipe on social media, paste the link, and boom - it\'s perfectly formatted in my app. So much better than screenshots!',
      avatar: 'M',
    },
    {
      id: 3,
      name: 'Emma Davis',
      location: 'Montreal, QC',
      rating: 5,
      text: 'As someone with dietary restrictions, the AI substitution suggestions are lifesaving. I can finally make all those recipes I bookmarked but couldn\'t eat before.',
      avatar: 'E',
      badge: '🥗 Healthy Eater',
    },
    {
      id: 4,
      name: 'Alex Rivera',
      location: 'Calgary, AB',
      rating: 5,
      text: 'The grocery list feature saves me so much time. It automatically groups ingredients by store section, and I can check things off as I shop. Genius!',
      avatar: 'A',
    },
    {
      id: 5,
      name: 'Olivia Brown',
      location: 'Ottawa, ON',
      rating: 5,
      text: 'I love how the app learns my preferences. The recipe recommendations get better every week. I\'ve discovered so many amazing dishes I would never have found otherwise.',
      avatar: 'O',
      badge: '👨‍🍳 Home Chef',
    },
    {
      id: 6,
      name: 'James Wilson',
      location: 'Halifax, NS',
      rating: 5,
      text: 'The wine pairing suggestions are spot-on. I\'ve impressed so many dinner guests with perfect pairings. It\'s like having a sommelier in my pocket!',
      avatar: 'J',
    },
  ];

  return (
    <section className="py-20 hero-gradient-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">
            Loved by home cooks everywhere
          </h2>
          <p className="text-xl text-slate-600">
            Join thousands of people cooking smarter with Chowboy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4 text-mustard">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 mb-6 italic">
                &quot;{testimonial.text}&quot;
              </p>

              {/* User info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sage to-icy flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-700">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.location}</p>
                </div>
                {testimonial.badge && (
                  <span className="text-xs bg-sage-100 text-sage-700 px-2 py-1 rounded-full font-medium">
                    {testimonial.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://apps.apple.com/ca/app/chowboy/id6741332753"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sage text-white px-8 py-4 rounded-full font-semibold hover:bg-sage-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Join 15,000+ Home Cooks
          </a>
        </div>
      </div>
    </section>
  );
}

