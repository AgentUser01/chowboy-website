'use client';

import { useState } from 'react';
import type { RecipeNutrition } from '@/lib/recipes';

interface Ingredient {
  amount: string;
  item: string;
}

interface IngredientsListProps {
  ingredients: Ingredient[];
  nutrition?: RecipeNutrition;
}

export default function IngredientsList({ ingredients, nutrition }: IngredientsListProps) {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  const toggleIngredient = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

  return (
    <div className="glass-card p-6 rounded-3xl sticky top-24">
      <h2 className="text-3xl font-bold text-slate-700 mb-6 flex items-center gap-2">
        <span className="text-3xl">🥘</span> Ingredients
      </h2>
      <ul className="space-y-3">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="flex items-start gap-3 group">
            <input 
              type="checkbox" 
              checked={checkedItems.has(index)}
              onChange={() => toggleIngredient(index)}
              className="mt-1 w-5 h-5 rounded border-2 border-sage-300 text-sage focus:ring-sage cursor-pointer"
              aria-label={`${ingredient.amount} ${ingredient.item}`}
            />
            <span className={`text-slate-600 flex-1 transition-opacity ${checkedItems.has(index) ? 'opacity-50 line-through' : ''}`}>
              <span className="font-bold text-slate-700">{ingredient.amount}</span> {ingredient.item}
            </span>
          </li>
        ))}
      </ul>

      {nutrition && (
        <div className="mt-8 p-6 bg-gradient-to-br from-sage-50 to-icy-50 rounded-2xl border-2 border-sage-300">
          <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
            <span>📊</span> Nutrition (per serving)
          </h3>
          <div className="space-y-3 text-sm">
            {nutrition.calories && (
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Calories</span>
                <span className="font-bold text-sage text-lg">{nutrition.calories}</span>
              </div>
            )}
            {nutrition.protein && (
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Protein</span>
                <span className="font-bold text-icy text-lg">{nutrition.protein}</span>
              </div>
            )}
            {nutrition.carbohydrates && (
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Carbs</span>
                <span className="font-bold text-mustard text-lg">{nutrition.carbohydrates}</span>
              </div>
            )}
            {nutrition.fat && (
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Fat</span>
                <span className="font-bold text-slate-700 text-lg">{nutrition.fat}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

