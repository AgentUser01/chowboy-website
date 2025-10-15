'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Recipe {
  slug: string;
  title: string;
  description: string;
  image?: string;
  totalTime: number;
  servings: number;
  difficulty: string;
  cuisine?: string;
  category: string;
  isAIGenerated?: boolean;
  rating?: number;
  ratingCount?: number;
}

export default function ClientRecipesPage({ staticRecipes }: { staticRecipes: Recipe[] }) {
  const [apiRecipes, setApiRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch AI recipes from API client-side
    async function fetchAIRecipes() {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.chowboy.io';
        const url = `${API_URL}/api/v1/public/recipes/chowboy-generated?limit=50`;
        console.log('🔍 Fetching AI recipes from:', url);
        
        const response = await fetch(url);
        console.log('📡 API Response status:', response.status);
        
        if (response.ok) {
          const data = await response.json();
          console.log('✅ Fetched AI recipes:', data.total, 'recipes');
          
          const converted = data.recipes.map((r: any) => ({
            slug: r.id,
            title: r.title,
            description: r.description,
            image: r.imageURL,
            totalTime: r.totalTime || 0,
            servings: r.servings || 0,
            difficulty: mapDifficulty(r.difficulty, r.level),
            cuisine: r.cuisine,
            category: r.category,
            isAIGenerated: true,
            rating: r.rating,
            ratingCount: r.ratingCount,
          }));
          console.log('🎯 Converted recipes:', converted.length);
          setApiRecipes(converted);
        } else {
          console.warn('❌ API returned error:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('❌ Error fetching AI recipes:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchAIRecipes();
  }, []);

  const allRecipes = [...staticRecipes, ...apiRecipes];

  return (
    <div className="pt-20">
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-700 mb-6">Recipes</h1>
          <p className="text-xl text-slate-600 mb-4">
            Explore recipes created by Chowboy AI and our curated collection with detailed instructions and nutrition information.
          </p>
          {apiRecipes.length > 0 && (
            <p className="text-sm text-sage-700 font-semibold mb-12">
              ✨ {apiRecipes.length} AI-generated recipes from Chowboy users
            </p>
          )}
          {loading && apiRecipes.length === 0 && (
            <p className="text-sm text-slate-400 mb-12">Loading AI recipes...</p>
          )}

          {allRecipes.length === 0 ? (
            <div className="bg-sand-50 p-12 rounded-2xl text-center border-2 border-sand-200">
              <p className="text-slate-600 text-lg">
                Recipes coming soon! We&apos;re preparing amazing recipes for you to try.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allRecipes.map((recipe) => (
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
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-2xl font-bold text-slate-700 group-hover:text-sage transition-colors flex-1">
                        {recipe.title}
                      </h2>
                      {recipe.isAIGenerated && (
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
                      {recipe.ratingCount && recipe.ratingCount > 0 && (
                        <>
                          <span>•</span>
                          <span>⭐ {(recipe.rating || 0).toFixed(1)}</span>
                        </>
                      )}
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

function mapDifficulty(difficulty: string, level: string): 'Easy' | 'Medium' | 'Hard' {
  const d = difficulty?.toLowerCase() || level?.toLowerCase() || '';
  if (d.includes('easy') || d.includes('beginner')) return 'Easy';
  if (d.includes('hard') || d.includes('advanced')) return 'Hard';
  return 'Medium';
}

