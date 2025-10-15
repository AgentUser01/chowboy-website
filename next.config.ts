import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static exports for better performance
  output: 'export',
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
  },

  // Trailing slashes for SEO consistency
  trailingSlash: true,

  // Optimize production builds
  productionBrowserSourceMaps: false,
  
  // React strict mode for better development
  reactStrictMode: true,

  // Configure page extensions to include MDX
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  // Experimental features
  experimental: {
    mdxRs: true,
  },
};

export default nextConfig;
