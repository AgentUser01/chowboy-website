import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/mdx';
import { getRecipes } from '@/lib/recipes';
import { getChowboyGeneratedRecipes } from '@/lib/api-recipes';

export const dynamic = 'force-static';
export const revalidate = 300; // Revalidate every 5 minutes

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://chowboy.io';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/features/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/recipes/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/support/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies/`,
      lastModified: new Date(),
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
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9, // Higher priority for fresh AI recipes
  }));

  return [...staticPages, ...blogPages, ...staticRecipePages, ...apiRecipePages];
}

