'use client';

import { trackRecipeAction } from '@/lib/analytics';

interface RecipeActionButtonsProps {
  title: string;
  slug: string;
}

export default function RecipeActionButtons({ title, slug }: RecipeActionButtonsProps) {
  const fullUrl = `https://chowboy.io/recipes/${slug}`;

  const handlePrint = () => {
    trackRecipeAction('print', title);
    window.print();
  };

  const handleShare = async () => {
    trackRecipeAction('share', title);
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Check out this recipe: ${title}`,
          url: fullUrl,
        });
      } catch (err) {
        // User cancelled or error occurred
        if ((err as Error).name !== 'AbortError') {
          // Fallback to copying link
          copyLink();
        }
      }
    } else {
      // Fallback for browsers without share API
      copyLink();
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(fullUrl).then(() => {
      alert('Link copied to clipboard! 📋');
    });
  };

  const handleSaveToApp = () => {
    trackRecipeAction('save', title);
    // Deep link to app
    const appUrl = `chowboy://recipe/${slug}`;
    window.location.href = appUrl;
    
    // Fallback to App Store after a delay
    setTimeout(() => {
      window.open('https://apps.apple.com/ca/app/chowboy/id6741332753', '_blank');
    }, 1500);
  };

  const handleRate = () => {
    trackRecipeAction('rate', title);
    // Scroll to bottom where rating would be, or open modal
    alert('⭐ Rating feature coming soon! Download the app to rate recipes.');
  };

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <button 
        onClick={handlePrint}
        className="glass-card px-4 py-2 rounded-full font-medium hover:border-sage-300 transition-all flex items-center gap-2 hover:scale-105"
        aria-label="Print recipe"
      >
        🖨️ Print
      </button>
      <button 
        onClick={handleShare}
        className="glass-card px-4 py-2 rounded-full font-medium hover:border-sage-300 transition-all flex items-center gap-2 hover:scale-105"
        aria-label="Share recipe"
      >
        📤 Share
      </button>
      <button 
        onClick={handleSaveToApp}
        className="glass-card px-4 py-2 rounded-full font-medium hover:border-sage-300 transition-all flex items-center gap-2 hover:scale-105"
        aria-label="Save to Chowboy app"
      >
        💾 Save to App
      </button>
      <button 
        onClick={handleRate}
        className="glass-card px-4 py-2 rounded-full font-medium hover:border-sage-300 transition-all flex items-center gap-2 hover:scale-105"
        aria-label="Rate recipe"
      >
        ⭐ Rate Recipe
      </button>
    </div>
  );
}

