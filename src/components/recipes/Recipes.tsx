import React, { useEffect, useState } from 'react';
import { Clock, Users, ChefHat, Leaf, Badge } from 'lucide-react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Measure {
  amount: number;
  unitShort: string;
  unitLong: string;
}

interface Measures {
  us: Measure;
  metric: Measure;
}

interface Ingredient {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: Measures;
}

interface Step {
  number: number;
  step: string;
  ingredients: {
    id: number;
    name: string;
    localizedName: string;
    image: string;
  }[];
  equipment: {
    id: number;
    name: string;
    localizedName: string;
    image: string;
  }[];
  length?: {
    number: number;
    unit: string;
  };
}

interface Instruction {
  name: string;
  steps: Step[];
}

interface RecipeData {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  title: string;
  readyInMinutes: number;
  servings: number;
  image: string;
  summary: string;
  extendedIngredients: Ingredient[];
  analyzedInstructions: Instruction[];
}

// interface RecipePageProps {
//   recipeData: RecipeData;
// }

const RecipePage: React.FC = () => {
  const [recipeData, setRecipeData] = useState<RecipeData | null>(null);
  const { id } = useParams();
  const apiKey: string = "e1567f12699e4d64b65deff4634c8b1b";

  const getRecipe = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information`,
        {
          params: {
            apiKey,
          },
        }
      );
      console.log("Response:", response.data);
      setRecipeData(response.data);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  useEffect(() => {
    getRecipe();
  }, [id]);
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <img
          src={recipeData?.image}
          alt={recipeData?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{recipeData?.title}</h1>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-5 h-5" />
                <span>{recipeData?.readyInMinutes} mins</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Users className="w-5 h-5" />
                <span>{recipeData?.servings} servings</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                {recipeData?.vegetarian ? (
                  <Leaf className="w-5 h-5 text-green-400" />
                ) : (
                  <Badge className="w-5 h-5 text-red-400" />
                )}
                <span>
                  {recipeData?.vegan ? 'Vegan' : recipeData?.vegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ingredients Section */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <ChefHat className="w-6 h-6" />
                Ingredients
              </h2>
              <ul className="space-y-3">
                {recipeData?.extendedIngredients.map((ingredient, index) => (
                  <li key={`${ingredient.id}-${index}`} className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span>{ingredient.original}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Instructions</h2>
              <ol className="space-y-6">
                {recipeData?.analyzedInstructions[0]?.steps.map((step, index) => (
                  <li key={`step-${index}`} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-500 dark:bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <p className="mt-1">{step.step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mt-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            {recipeData?.summary && (
              <div
                className="prose dark:prose-invert prose-blue max-w-none"
                dangerouslySetInnerHTML={{ __html: recipeData.summary }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
