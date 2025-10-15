import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: 'export',
  
  // Image optimization
  images: {
    unoptimized: true,
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
