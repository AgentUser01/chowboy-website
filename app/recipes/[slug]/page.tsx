import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getRecipe, getRecipes } from '@/lib/recipes';
import { getChowboyRecipeById, convertAPIRecipeToWebFormat, getChowboyGeneratedRecipes } from '@/lib/api-recipes';
import { RecipeSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import IngredientsList from '@/components/recipe/IngredientsList';
import RecipeActionButtons from '@/components/recipe/RecipeActionButtons';

interface RecipePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const staticRecipes = await getRecipes();
  const apiRecipes = await getChowboyGeneratedRecipes(20); // Reduced for faster builds
  
  return [
    ...staticRecipes.map((recipe) => ({ slug: recipe.slug })),
    ...apiRecipes.map((recipe) => ({ slug: recipe.id })),
  ];
}

// Revalidate every 5 minutes for new AI recipes
export const revalidate = 300;

export async function generateMetadata({ params }: RecipePageProps): Promise<Metadata> {
  const { slug } = await params;
  
  // Try static recipe first
  let recipe = await getRecipe(slug);
  
  // If not found, try API (AI-generated)
  if (!recipe) {
    const apiRecipe = await getChowboyRecipeById(slug);
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
      canonical: `https://chowboy.io/recipes/${slug}/`,
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
  const { slug } = await params;
  
  // Try static recipe first
  let recipe = await getRecipe(slug);
  let isAIGenerated = false;
  
  // If not found, try API (AI-generated)
  if (!recipe) {
    const apiRecipe = await getChowboyRecipeById(slug);
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
    { name: recipe.title, url: `/recipes/${slug}` },
  ];

  return (
    <div className="pt-20">
      <RecipeSchema recipe={recipe} />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 pt-8">
        <nav className="flex items-center gap-2 text-sm text-slate-500">
          <a href="/" className="hover:text-sage transition-colors">Home</a>
          <span>›</span>
          <a href="/recipes" className="hover:text-sage transition-colors">Recipes</a>
          <span>›</span>
          <span className="text-slate-700 font-medium">{recipe.title}</span>
        </nav>
      </div>

      <article className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Header */}
        <header className="mb-12 animate-slideUp">
          <div className="flex items-start gap-4 mb-6">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-700 flex-1 leading-tight">
              {recipe.title}
            </h1>
            {isAIGenerated && (
              <span className="glass-card bg-icy-100 text-icy-700 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 border-2 border-icy-200">
                ✨ AI-Generated
              </span>
            )}
          </div>
          
          {/* Action Buttons */}
          <RecipeActionButtons title={recipe.title} slug={slug} />

          <p className="text-xl text-slate-600 mb-6 leading-relaxed">{recipe.description}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            <div className="glass-card px-4 py-3 rounded-xl border-2 border-sage-200 text-center hover:border-sage-400 transition-all">
              <div className="text-2xl mb-1">⏱️</div>
              <span className="text-xs text-slate-500 block">Prep Time</span>
              <p className="font-bold text-slate-700 text-lg">{recipe.prepTime} min</p>
            </div>
            <div className="glass-card px-4 py-3 rounded-xl border-2 border-icy-200 text-center hover:border-icy-400 transition-all">
              <div className="text-2xl mb-1">🔥</div>
              <span className="text-xs text-slate-500 block">Cook Time</span>
              <p className="font-bold text-slate-700 text-lg">{recipe.cookTime} min</p>
            </div>
            <div className="glass-card px-4 py-3 rounded-xl border-2 border-mustard-200 text-center hover:border-mustard-400 transition-all">
              <div className="text-2xl mb-1">⏰</div>
              <span className="text-xs text-slate-500 block">Total Time</span>
              <p className="font-bold text-slate-700 text-lg">{recipe.totalTime} min</p>
            </div>
            <div className="glass-card px-4 py-3 rounded-xl border-2 border-sage-200 text-center hover:border-sage-400 transition-all">
              <div className="text-2xl mb-1">🍽️</div>
              <span className="text-xs text-slate-500 block">Servings</span>
              <p className="font-bold text-slate-700 text-lg">{recipe.servings}</p>
            </div>
            <div className="glass-card px-4 py-3 rounded-xl border-2 border-icy-200 text-center hover:border-icy-400 transition-all">
              <div className="text-2xl mb-1">📊</div>
              <span className="text-xs text-slate-500 block">Difficulty</span>
              <p className="font-bold text-slate-700 text-lg">{recipe.difficulty}</p>
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
          <div className="mb-12 rounded-3xl overflow-hidden relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-sage via-icy to-mustard rounded-3xl opacity-30 group-hover:opacity-50 blur-lg transition-opacity duration-500" />
            <img
              src={recipe.image}
              alt={recipe.title}
              className="relative w-full h-auto object-cover rounded-3xl shadow-2xl"
            />
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-12">
          {/* Ingredients */}
          <div className="md:col-span-1">
            <IngredientsList ingredients={recipe.ingredients} nutrition={recipe.nutrition} />
          </div>

          {/* Instructions */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-slate-700 mb-8 flex items-center gap-2">
              <span className="text-3xl">👨‍🍳</span> Instructions
            </h2>
            <ol className="space-y-6">
              {recipe.instructions.map((instruction) => (
                <li key={instruction.step} className="glass-card p-6 rounded-2xl flex gap-4 hover:shadow-lg transition-all">
                  <span className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sage to-icy text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {instruction.step}
                  </span>
                  <div className="flex-1 pt-2">
                    <p className="text-slate-700 text-lg leading-relaxed">{instruction.instruction}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 hero-gradient-bg p-12 rounded-3xl text-center">
          <div className="max-w-2xl mx-auto glass-card p-8 rounded-3xl">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-3xl font-bold text-slate-700 mb-4">Love this recipe?</h3>
            <p className="text-lg text-slate-600 mb-6">
              Download Chowboy to discover <span className="font-bold text-sage">thousands more</span> personalized recipes and get AI-powered cooking tips
            </p>
            <a
              href="https://apps.apple.com/ca/app/chowboy/id6741332753"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-sage text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-sage-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Download Free 🚀
            </a>
            <p className="text-sm text-slate-500 mt-4">Join 15,000+ home cooks • Free to start</p>
          </div>
        </div>
      </article>
    </div>
  );
}

