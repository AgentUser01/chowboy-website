// Fetch AI-generated recipes from Chowboy server API
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.chowboy.io';

export interface APIRecipeIngredient {
  name: string;
  amount: string;
  unit?: string;
}

export interface APIRecipe {
  id: string;
  title: string;
  description: string;
  imageURL?: string;
  prepTime: number;
  cookingTime: number;
  totalTime: number;
  servings: number;
  difficulty: string;
  level: string;
  calories: number;
  cuisine: string;
  category: string;
  tags: string[];
  ingredients: APIRecipeIngredient[];
  instructions: string[];
  rating: number;
  ratingCount: number;
}

export interface APIRecipesResponse {
  recipes: APIRecipe[];
  total: number;
}

// Cache for API recipes to avoid hitting API on every build
let cachedRecipes: APIRecipe[] | null = null;
let cacheTime: number | null = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function getChowboyGeneratedRecipes(limit: number = 50): Promise<APIRecipe[]> {
  // Return cache if valid
  if (cachedRecipes && cacheTime && Date.now() - cacheTime < CACHE_DURATION) {
    return cachedRecipes;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/public/recipes/chowboy-generated?limit=${limit}`, {
      next: { revalidate: 300 }, // Revalidate every 5 minutes
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      console.warn(`Failed to fetch Chowboy-generated recipes: ${response.status}`);
      return [];
    }

    const data: APIRecipesResponse = await response.json();
    
    // Update cache
    cachedRecipes = data.recipes || [];
    cacheTime = Date.now();
    
    return data.recipes || [];
  } catch (error) {
    // During build time or if API is down, gracefully return empty array
    console.warn('Error fetching Chowboy-generated recipes (API may be unavailable during build):', error);
    return [];
  }
}

export async function getChowboyRecipeById(id: string): Promise<APIRecipe | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/public/recipes/${id}`, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return null;
    }

    const recipe: APIRecipe = await response.json();
    return recipe;
  } catch (error) {
    console.error(`Error fetching recipe ${id}:`, error);
    return null;
  }
}

// Convert API recipe to website recipe format
export function convertAPIRecipeToWebFormat(apiRecipe: APIRecipe) {
  return {
    slug: apiRecipe.id,
    title: apiRecipe.title,
    description: apiRecipe.description,
    image: apiRecipe.imageURL,
    prepTime: apiRecipe.prepTime,
    cookTime: apiRecipe.cookingTime,
    totalTime: apiRecipe.totalTime,
    servings: apiRecipe.servings,
    difficulty: mapDifficulty(apiRecipe.difficulty, apiRecipe.level),
    cuisine: apiRecipe.cuisine,
    category: apiRecipe.category,
    tags: apiRecipe.tags || [],
    ingredients: apiRecipe.ingredients.map(ing => ({
      amount: `${ing.amount}${ing.unit ? ' ' + ing.unit : ''}`,
      item: ing.name,
    })),
    instructions: apiRecipe.instructions.map((inst, idx) => ({
      step: idx + 1,
      instruction: inst,
    })),
    nutrition: {
      calories: apiRecipe.calories,
    },
    author: 'Chowboy AI',
    datePublished: new Date().toISOString().split('T')[0], // Use today's date for now
    rating: apiRecipe.rating,
    ratingCount: apiRecipe.ratingCount,
    isAIGenerated: true,
  };
}

function mapDifficulty(difficulty: string, level: string): 'Easy' | 'Medium' | 'Hard' {
  // Map from app difficulty/level to website format
  const d = difficulty?.toLowerCase() || level?.toLowerCase() || '';
  if (d.includes('easy') || d.includes('beginner')) return 'Easy';
  if (d.includes('hard') || d.includes('advanced')) return 'Hard';
  return 'Medium';
}

