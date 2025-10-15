import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getRecipe, getRecipes } from '@/lib/recipes';
import { RecipeSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';

interface RecipePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const recipes = await getRecipes();
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export async function generateMetadata({ params }: RecipePageProps): Promise<Metadata> {
  const recipe = await getRecipe(params.slug);

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
  const recipe = await getRecipe(params.slug);

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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{recipe.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{recipe.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-sm text-gray-600">Prep Time</span>
              <p className="font-semibold text-gray-900">{recipe.prepTime} min</p>
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-sm text-gray-600">Cook Time</span>
              <p className="font-semibold text-gray-900">{recipe.cookTime} min</p>
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-sm text-gray-600">Total Time</span>
              <p className="font-semibold text-gray-900">{recipe.totalTime} min</p>
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-sm text-gray-600">Servings</span>
              <p className="font-semibold text-gray-900">{recipe.servings}</p>
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-sm text-gray-600">Difficulty</span>
              <p className="font-semibold text-gray-900">{recipe.difficulty}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <span
                key={tag}
                className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ingredients</h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span className="text-gray-700">
                    <span className="font-semibold">{ingredient.amount}</span> {ingredient.item}
                  </span>
                </li>
              ))}
            </ul>

            {recipe.nutrition && (
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Nutrition (per serving)</h3>
                <div className="space-y-2 text-sm">
                  {recipe.nutrition.calories && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Calories</span>
                      <span className="font-semibold text-gray-900">{recipe.nutrition.calories}</span>
                    </div>
                  )}
                  {recipe.nutrition.protein && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Protein</span>
                      <span className="font-semibold text-gray-900">{recipe.nutrition.protein}</span>
                    </div>
                  )}
                  {recipe.nutrition.carbohydrates && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Carbs</span>
                      <span className="font-semibold text-gray-900">{recipe.nutrition.carbohydrates}</span>
                    </div>
                  )}
                  {recipe.nutrition.fat && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fat</span>
                      <span className="font-semibold text-gray-900">{recipe.nutrition.fat}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Instructions</h2>
            <ol className="space-y-6">
              {recipe.instructions.map((instruction) => (
                <li key={instruction.step} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {instruction.step}
                  </span>
                  <p className="text-gray-700 pt-1">{instruction.instruction}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Want more recipes like this?</h3>
          <p className="text-gray-600 mb-6">
            Download Chowboy to discover personalized recipe recommendations and AI-powered cooking tips.
          </p>
          <a
            href="https://apps.apple.com/ca/app/chowboy/id6741332753"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors"
          >
            Download Chowboy
          </a>
        </div>
      </article>
    </div>
  );
}

