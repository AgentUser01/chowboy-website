'use client';

export default function TrustBadges() {
  const badges = [
    {
      icon: '⭐',
      text: '4.8/5 Rating',
      subtext: 'App Store',
    },
    {
      icon: '🔒',
      text: 'Privacy First',
      subtext: 'Your data stays yours',
    },
    {
      icon: '🍁',
      text: 'Made in Canada',
      subtext: 'With ❤️ in Montréal',
    },
    {
      icon: '✓',
      text: 'Free to Start',
      subtext: 'No credit card required',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="glass-card p-4 rounded-xl text-center hover:scale-105 transition-transform"
        >
          <div className="text-3xl mb-2">{badge.icon}</div>
          <div className="font-bold text-slate-700 text-sm">{badge.text}</div>
          <div className="text-xs text-slate-500 mt-1">{badge.subtext}</div>
        </div>
      ))}
    </div>
  );
}


