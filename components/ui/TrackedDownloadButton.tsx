'use client';

import { trackDownloadClick } from '@/lib/analytics';

interface TrackedDownloadButtonProps {
  location: string;
  className?: string;
  children: React.ReactNode;
}

export default function TrackedDownloadButton({ location, className, children }: TrackedDownloadButtonProps) {
  const handleClick = () => {
    trackDownloadClick(location);
  };

  return (
    <a 
      href="https://apps.apple.com/ca/app/chowboy/id6741332753" 
      target="_blank" 
      rel="noopener noreferrer" 
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}


