import fs from 'fs';
import path from 'path';

const contentDirectory = path.join(process.cwd(), 'content');

export interface RecipeIngredient {
  item: string;
  amount: string;
}

export interface RecipeInstruction {
  step: number;
  instruction: string;
}

export interface RecipeNutrition {
  calories?: number;
  protein?: string;
  carbohydrates?: string;
  fat?: string;
  fiber?: string;
}

export interface Recipe {
  slug: string;
  title: string;
  description: string;
  image?: string;
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  totalTime: number; // in minutes
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cuisine?: string;
  category: string;
  tags: string[];
  ingredients: RecipeIngredient[];
  instructions: RecipeInstruction[];
  nutrition?: RecipeNutrition;
  author: string;
  datePublished: string;
  isAIGenerated?: boolean;
}

export async function getRecipes(): Promise<Recipe[]> {
  const recipesDir = path.join(contentDirectory, 'recipes');
  const aiRecipesDir = path.join(contentDirectory, 'recipes', 'ai-generated');
  
  const allRecipes: Recipe[] = [];

  // Read static recipes
  if (fs.existsSync(recipesDir)) {
    const files = fs.readdirSync(recipesDir).filter(file => file.endsWith('.json') && !file.includes('/'));
    
    files.forEach((filename) => {
      const slug = filename.replace(/\.json$/, '');
      const filePath = path.join(recipesDir, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const recipe = JSON.parse(fileContents) as Recipe;
      allRecipes.push({ ...recipe, slug });
    });
  }

  // Read AI-generated recipes
  if (fs.existsSync(aiRecipesDir)) {
    const aiFiles = fs.readdirSync(aiRecipesDir).filter(file => file.endsWith('.json'));
    
    aiFiles.forEach((filename) => {
      const slug = filename.replace(/\.json$/, '');
      const filePath = path.join(aiRecipesDir, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const recipe = JSON.parse(fileContents) as Recipe;
      allRecipes.push({ ...recipe, slug, isAIGenerated: true });
    });
  }

  // Sort recipes by date (newest first)
  return allRecipes.sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());
}

export async function getRecipe(slug: string): Promise<Recipe | null> {
  const recipesDir = path.join(contentDirectory, 'recipes');
  const aiRecipesDir = path.join(contentDirectory, 'recipes', 'ai-generated');
  
  // Try regular recipes first
  let filePath = path.join(recipesDir, `${slug}.json`);
  let isAI = false;
  
  // If not found, try AI recipes
  if (!fs.existsSync(filePath)) {
    filePath = path.join(aiRecipesDir, `${slug}.json`);
    isAI = true;
  }

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const recipe = JSON.parse(fileContents) as Recipe;

  return {
    ...recipe,
    slug,
    isAIGenerated: isAI,
  };
}

export function getRecipesByCategory(category: string): Promise<Recipe[]> {
  return getRecipes().then(recipes => 
    recipes.filter(recipe => recipe.category === category)
  );
}

export function getRecipesByTag(tag: string): Promise<Recipe[]> {
  return getRecipes().then(recipes => 
    recipes.filter(recipe => recipe.tags.includes(tag))
  );
}

