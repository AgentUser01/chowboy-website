import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/mdx';
import { getRecipes } from '@/lib/recipes';
import { getChowboyGeneratedRecipes } from '@/lib/api-recipes';

export const dynamic = 'force-static';
export const revalidate = 300; // Revalidate every 5 minutes

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://chowboy.io';
  const currentDate = new Date();

  // Static pages with realistic lastModified dates
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate, // Homepage updated frequently
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/features/`,
      lastModified: new Date('2025-10-01'), // Updated when features change
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: currentDate, // Blog index updated with new posts
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/recipes/`,
      lastModified: currentDate, // Recipe index updated with new recipes
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/support/`,
      lastModified: new Date('2025-09-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy/`,
      lastModified: new Date('2025-09-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms/`,
      lastModified: new Date('2025-09-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies/`,
      lastModified: new Date('2025-09-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ];

  // Dynamic blog posts
  const blogPosts = await getBlogPosts();
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic recipes (static + API)
  const staticRecipes = await getRecipes();
  const apiRecipes = await getChowboyGeneratedRecipes(100);
  
  const staticRecipePages = staticRecipes.map((recipe) => ({
    url: `${baseUrl}/recipes/${recipe.slug}/`,
    lastModified: new Date(recipe.datePublished),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  
  const apiRecipePages = apiRecipes.map((recipe) => ({
    url: `${baseUrl}/recipes/${recipe.id}/`,
    lastModified: currentDate, // AI recipes are dynamic, use current date
    changeFrequency: 'weekly' as const,
    priority: 0.85, // High priority for AI recipes
  }));

  return [...staticPages, ...blogPages, ...staticRecipePages, ...apiRecipePages];
}

