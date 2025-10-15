import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getRecipe, getRecipes } from '@/lib/recipes';
import { getChowboyRecipeById, convertAPIRecipeToWebFormat, getChowboyGeneratedRecipes } from '@/lib/api-recipes';
import { RecipeSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';

interface RecipePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const staticRecipes = await getRecipes();
  const apiRecipes = await getChowboyGeneratedRecipes(100);
  
  return [
    ...staticRecipes.map((recipe) => ({ slug: recipe.slug })),
    ...apiRecipes.map((recipe) => ({ slug: recipe.id })),
  ];
}

// Revalidate every 5 minutes for new AI recipes
export const revalidate = 300;

export async function generateMetadata({ params }: RecipePageProps): Promise<Metadata> {
  // Try static recipe first
  let recipe = await getRecipe(params.slug);
  
  // If not found, try API (AI-generated)
  if (!recipe) {
    const apiRecipe = await getChowboyRecipeById(params.slug);
    if (apiRecipe) {
      recipe = convertAPIRecipeToWebFormat(apiRecipe);
    }
  }

  if (!recipe) {
    return {
      title: 'Recipe Not Found',
    };
  }

  return {
    title: recipe.title,
    description: recipe.description,
    alternates: {
      canonical: `https://chowboy.io/recipes/${params.slug}/`,
    },
    openGraph: {
      title: recipe.title,
      description: recipe.description,
      type: 'article',
      images: recipe.image ? [recipe.image] : undefined,
    },
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  // Try static recipe first
  let recipe = await getRecipe(params.slug);
  let isAIGenerated = false;
  
  // If not found, try API (AI-generated)
  if (!recipe) {
    const apiRecipe = await getChowboyRecipeById(params.slug);
    if (apiRecipe) {
      recipe = convertAPIRecipeToWebFormat(apiRecipe);
      isAIGenerated = true;
    }
  }

  if (!recipe) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Recipes', url: '/recipes' },
    { name: recipe.title, url: `/recipes/${params.slug}` },
  ];

  return (
    <div className="pt-20">
      <RecipeSchema recipe={recipe} />
      <BreadcrumbSchema items={breadcrumbs} />

      <article className="container mx-auto px-6 py-20 max-w-5xl">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-start gap-4 mb-4">
            <h1 className="text-5xl font-bold text-slate-700 flex-1">{recipe.title}</h1>
            {isAIGenerated && (
              <span className="bg-icy-100 text-icy-700 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                ✨ AI-Generated
              </span>
            )}
          </div>
          <p className="text-xl text-slate-600 mb-6">{recipe.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-sand-100 px-4 py-2 rounded-lg border border-sage-200">
              <span className="text-sm text-slate-300">Prep Time</span>
              <p className="font-semibold text-slate-700">{recipe.prepTime} min</p>
            </div>
            <div className="bg-sand-100 px-4 py-2 rounded-lg border border-icy-200">
              <span className="text-sm text-slate-300">Cook Time</span>
              <p className="font-semibold text-slate-700">{recipe.cookTime} min</p>
            </div>
            <div className="bg-sand-100 px-4 py-2 rounded-lg border border-mustard-200">
              <span className="text-sm text-slate-300">Total Time</span>
              <p className="font-semibold text-slate-700">{recipe.totalTime} min</p>
            </div>
            <div className="bg-sand-100 px-4 py-2 rounded-lg border border-sage-200">
              <span className="text-sm text-slate-300">Servings</span>
              <p className="font-semibold text-slate-700">{recipe.servings}</p>
            </div>
            <div className="bg-sand-100 px-4 py-2 rounded-lg border border-icy-200">
              <span className="text-sm text-slate-300">Difficulty</span>
              <p className="font-semibold text-slate-700">{recipe.difficulty}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <span
                key={tag}
                className="bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {recipe.image && (
          <div className="mb-12 rounded-2xl overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-12">
          {/* Ingredients */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-slate-700 mb-6">Ingredients</h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-sage mt-1">•</span>
                  <span className="text-slate-600">
                    <span className="font-semibold">{ingredient.amount}</span> {ingredient.item}
                  </span>
                </li>
              ))}
            </ul>

            {recipe.nutrition && (
              <div className="mt-8 p-6 bg-sand-50 rounded-xl border-2 border-sage-200">
                <h3 className="text-lg font-bold text-slate-700 mb-4">Nutrition (per serving)</h3>
                <div className="space-y-2 text-sm">
                  {recipe.nutrition.calories && (
                    <div className="flex justify-between">
                      <span className="text-slate-300">Calories</span>
                      <span className="font-semibold text-slate-700">{recipe.nutrition.calories}</span>
                    </div>
                  )}
                  {recipe.nutrition.protein && (
                    <div className="flex justify-between">
                      <span className="text-slate-300">Protein</span>
                      <span className="font-semibold text-slate-700">{recipe.nutrition.protein}</span>
                    </div>
                  )}
                  {recipe.nutrition.carbohydrates && (
                    <div className="flex justify-between">
                      <span className="text-slate-300">Carbs</span>
                      <span className="font-semibold text-slate-700">{recipe.nutrition.carbohydrates}</span>
                    </div>
                  )}
                  {recipe.nutrition.fat && (
                    <div className="flex justify-between">
                      <span className="text-slate-300">Fat</span>
                      <span className="font-semibold text-slate-700">{recipe.nutrition.fat}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-slate-700 mb-6">Instructions</h2>
            <ol className="space-y-6">
              {recipe.instructions.map((instruction) => (
                <li key={instruction.step} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-sage text-white rounded-full flex items-center justify-center font-semibold">
                    {instruction.step}
                  </span>
                  <p className="text-slate-600 pt-1">{instruction.instruction}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-sand-100 rounded-2xl text-center border-2 border-sage-200">
          <h3 className="text-2xl font-bold text-slate-700 mb-4">Want more recipes like this?</h3>
          <p className="text-slate-600 mb-6">
            Download Chowboy to discover personalized recipe recommendations and AI-powered cooking tips.
          </p>
          <a
            href="https://apps.apple.com/ca/app/chowboy/id6741332753"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sage text-white px-8 py-3 rounded-full font-semibold hover:bg-sage-600 transition-colors shadow-lg"
          >
            Download Chowboy
          </a>
        </div>
      </article>
    </div>
  );
}

