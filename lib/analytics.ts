// Google Analytics event tracking utilities
// Ensures type-safe event tracking across the site

declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void;
  }
}

// Track when user clicks download CTA
export const trackDownloadClick = (location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'download_cta_click', {
      event_category: 'conversion',
      event_label: location, // e.g., 'hero', 'footer', 'recipe_page'
    });
  }
};

// Track recipe interactions
export const trackRecipeAction = (action: 'print' | 'share' | 'save' | 'rate', recipeTitle: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'recipe_action', {
      event_category: 'engagement',
      event_label: action,
      recipe_title: recipeTitle,
    });
  }
};

// Track ingredient checkbox interactions
export const trackIngredientCheck = (recipeTitle: string, checked: boolean) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'ingredient_checked', {
      event_category: 'engagement',
      event_label: checked ? 'checked' : 'unchecked',
      recipe_title: recipeTitle,
    });
  }
};

// Track exit intent modal
export const trackExitIntent = (action: 'shown' | 'submitted' | 'dismissed') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exit_intent', {
      event_category: action === 'submitted' ? 'conversion' : 'engagement',
      event_label: action,
    });
  }
};

// Track newsletter signups
export const trackNewsletterSignup = (location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'newsletter_signup', {
      event_category: 'conversion',
      event_label: location,
    });
  }
};

// Track social sharing
export const trackSocialShare = (platform: 'twitter' | 'facebook' | 'email' | 'copy', contentType: 'blog' | 'recipe', contentTitle: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'share', {
      event_category: 'engagement',
      method: platform,
      content_type: contentType,
      item_id: contentTitle,
    });
  }
};

// Track feature page interactions
export const trackFeatureView = (featureName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'feature_viewed', {
      event_category: 'engagement',
      event_label: featureName,
    });
  }
};

// Track scroll depth
export const trackScrollDepth = (depth: 25 | 50 | 75 | 100) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll_depth', {
      event_category: 'engagement',
      event_label: `${depth}%`,
      non_interaction: true,
    });
  }
};

// Track floating CTA
export const trackFloatingCTA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'floating_cta_click', {
      event_category: 'conversion',
      event_label: 'sticky_download',
    });
  }
};

// Track blog post reading time
export const trackBlogReadTime = (postTitle: string, timeSpent: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'blog_read_time', {
      event_category: 'engagement',
      event_label: postTitle,
      value: Math.floor(timeSpent / 1000), // Convert to seconds
    });
  }
};


