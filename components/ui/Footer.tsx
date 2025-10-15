import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-500 text-sand-200 py-12 border-t-4 border-sage">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center" aria-label="Made with love and coffee in Montreal">
            <p className="text-sm text-sand-100">made with ❤️ in montreal</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="mailto:support@chowboy.io" className="hover:text-mustard transition-colors" aria-label="Email support">
              support@chowboy.io
            </a>
            <Link href="/support" className="hover:text-mustard transition-colors" aria-label="Support">
              support
            </Link>
            <Link href="/privacy" className="hover:text-mustard transition-colors" aria-label="Privacy">
              privacy
            </Link>
            <Link href="/cookies" className="hover:text-mustard transition-colors" aria-label="Cookie policy">
              cookies
            </Link>
            <Link href="/terms" className="hover:text-mustard transition-colors" aria-label="Terms">
              terms
            </Link>
            <Link href="/blog" className="hover:text-mustard transition-colors" aria-label="Blog">
              blog
            </Link>
            <a href="https://apps.apple.com/ca/app/chowboy/id6741332753" target="_blank" rel="noopener noreferrer" className="hover:text-mustard transition-colors" aria-label="Download on the App Store">
              app store
            </a>
          </div>
          
          <div className="text-xs text-sand-300 text-center">
            <p>© {new Date().getFullYear()} Chowboy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

