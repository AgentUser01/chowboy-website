import type { Metadata } from 'next';
import { getRecipes } from '@/lib/recipes';
import ClientRecipesPage from './client-page';

export const metadata: Metadata = {
  title: 'Recipes',
  description: 'Discover delicious AI-generated and curated recipes with step-by-step instructions, nutrition information, and cooking tips.',
  alternates: {
    canonical: 'https://chowboy.io/recipes/',
  },
};

export default async function RecipesPage() {
  // Get static recipes only - API recipes will be fetched client-side
  const staticRecipes = await getRecipes();

  return <ClientRecipesPage staticRecipes={staticRecipes} />;
}

