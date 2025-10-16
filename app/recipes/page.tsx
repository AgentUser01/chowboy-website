import type { Metadata } from 'next';
import Link from 'next/link';
import { getRecipes } from '@/lib/recipes';

export const metadata: Metadata = {
  title: 'Recipes',
  description: 'Discover delicious AI-generated and curated recipes with step-by-step instructions, nutrition information, and cooking tips.',
  alternates: {
    canonical: 'https://chowboy.io/recipes/',
  },
};

export default async function RecipesPage() {
  // Get all recipes (static + AI-generated from exported files)
  const recipes = await getRecipes();
  const aiRecipes = recipes.filter((r: any) => r.isAIGenerated);

  return (
    <div className="pt-20">
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-700 mb-6">Recipes</h1>
          <p className="text-xl text-slate-600 mb-4">
            Explore recipes created by Chowboy AI and our curated collection with detailed instructions and nutrition information.
          </p>
          {aiRecipes.length > 0 && (
            <p className="text-sm text-sage-700 font-semibold mb-12">
              ✨ {aiRecipes.length} AI-generated recipes from Chowboy users
            </p>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <Link
                key={recipe.slug}
                href={`/recipes/${recipe.slug}`}
                className="group glass-card rounded-2xl overflow-hidden hover:border-sage-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {recipe.image && (
                  <div className="aspect-video bg-sand-50 overflow-hidden relative">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Quick action buttons on hover */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors" aria-label="Save recipe">
                        💾
                      </button>
                      <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors" aria-label="Share recipe">
                        📤
                      </button>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-2xl font-bold text-slate-700 group-hover:text-sage transition-colors flex-1">
                      {recipe.title}
                    </h2>
                    {(recipe as any).isAIGenerated && (
                      <span className="text-xs bg-icy-100 text-icy-700 px-2 py-1 rounded-full font-semibold">
                        AI
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 mb-4 line-clamp-2">{recipe.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                    <span>⏱️ {recipe.totalTime} min</span>
                    <span>•</span>
                    <span>🍽️ {recipe.servings} servings</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      recipe.difficulty === 'Easy' ? 'bg-sage-100 text-sage-700' :
                      recipe.difficulty === 'Medium' ? 'bg-icy-100 text-icy-700' :
                      'bg-mustard-100 text-mustard-700'
                    }`}>
                      {recipe.difficulty}
                    </span>
                    {recipe.cuisine && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-sand-200 text-slate-700">
                        {recipe.cuisine}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

