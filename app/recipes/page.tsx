import type { Metadata } from 'next';
import Link from 'next/link';
import { getRecipes } from '@/lib/recipes';

export const metadata: Metadata = {
  title: 'Recipes',
  description: 'Discover delicious recipes with step-by-step instructions, nutrition information, and cooking tips.',
  alternates: {
    canonical: 'https://chowboy.io/recipes/',
  },
};

export default async function RecipesPage() {
  const recipes = await getRecipes();

  return (
    <div className="pt-20">
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-700 mb-6">Recipes</h1>
          <p className="text-xl text-slate-600 mb-12">
            Explore our curated collection of delicious recipes with detailed instructions and nutrition information.
          </p>

          {recipes.length === 0 ? (
            <div className="bg-sand-50 p-12 rounded-2xl text-center border-2 border-sand-200">
              <p className="text-slate-600 text-lg">
                Recipes coming soon! We&apos;re preparing amazing recipes for you to try.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recipes.map((recipe) => (
                <Link
                  key={recipe.slug}
                  href={`/recipes/${recipe.slug}`}
                  className="group bg-white border-2 border-sand-200 rounded-2xl overflow-hidden hover:border-sage-300 hover:shadow-xl transition-all"
                >
                  {recipe.image && (
                    <div className="aspect-video bg-sand-50 overflow-hidden">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-slate-700 mb-2 group-hover:text-sage transition-colors">
                      {recipe.title}
                    </h2>
                    <p className="text-slate-600 mb-4 line-clamp-2">{recipe.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-slate-300 mb-4">
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
          )}
        </div>
      </section>
    </div>
  );
}

