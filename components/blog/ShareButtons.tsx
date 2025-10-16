'use client';

import { trackSocialShare } from '@/lib/analytics';

interface ShareButtonsProps {
  title: string;
  url: string;
  description: string;
}

export default function ShareButtons({ title, url, description }: ShareButtonsProps) {
  const fullUrl = `https://chowboy.io${url}`;
  
  const shareOnTwitter = () => {
    trackSocialShare('twitter', 'blog', title);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
  };

  const shareOnFacebook = () => {
    trackSocialShare('facebook', 'blog', title);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`;
    window.open(facebookUrl, '_blank', 'width=550,height=420');
  };

  const shareViaEmail = () => {
    trackSocialShare('email', 'blog', title);
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(`Check out this article: ${title}\n\n${description}\n\nRead more: ${fullUrl}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const copyLink = () => {
    trackSocialShare('copy', 'blog', title);
    navigator.clipboard.writeText(fullUrl).then(() => {
      alert('Link copied to clipboard! 📋');
    });
  };

  return (
    <div className="glass-card p-6 rounded-2xl text-center">
      <p className="text-slate-600 mb-4">Found this helpful? Share it with your friends!</p>
      <div className="flex justify-center gap-3 flex-wrap">
        <button 
          onClick={shareOnTwitter}
          className="glass-card px-6 py-2 rounded-full hover:border-sage-300 transition-all font-medium hover:scale-105"
          aria-label="Share on Twitter"
        >
          𝕏 Twitter
        </button>
        <button 
          onClick={shareOnFacebook}
          className="glass-card px-6 py-2 rounded-full hover:border-sage-300 transition-all font-medium hover:scale-105"
          aria-label="Share on Facebook"
        >
          📘 Facebook
        </button>
        <button 
          onClick={shareViaEmail}
          className="glass-card px-6 py-2 rounded-full hover:border-sage-300 transition-all font-medium hover:scale-105"
          aria-label="Share via Email"
        >
          📧 Email
        </button>
        <button 
          onClick={copyLink}
          className="glass-card px-6 py-2 rounded-full hover:border-sage-300 transition-all font-medium hover:scale-105"
          aria-label="Copy link"
        >
          🔗 Copy Link
        </button>
      </div>
    </div>
  );
}

