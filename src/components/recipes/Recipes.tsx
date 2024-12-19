import React from 'react';
import { Clock, Users, ChefHat, Leaf, Badge } from 'lucide-react';

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

const RecipePage: React.FC = () => {
  const recipeData = {
    vegetarian: false,
    vegan: false,
    glutenFree: true,
    dairyFree: false,
    title: "Square Deviled Eggs",
    readyInMinutes: 45,
    servings: 6,
    image: "https://img.spoonacular.com/recipes/661447-556x370.jpg",
    summary: "If you have around <b>45 minutes</b> to spend in the kitchen, Square Deviled Eggs might be an outstanding <b>gluten free and primal</b> recipe to try. One serving contains <b>212 calories</b>, <b>19g of protein</b>, and <b>15g of fat</b>. This recipe serves 6. For <b>30 cents per serving</b>, this recipe <b>covers 9%</b> of your daily requirements of vitamins and minerals. 25 people found this recipe to be scrumptious and satisfying.",
    extendedIngredients: [
      {
        id: 1129,
        aisle: "Milk, Eggs, Other Dairy",
        image: "hard-boiled-egg.png",
        consistency: "SOLID",
        name: "eggs",
        nameClean: "hard boiled egg",
        original: "Hard boiled eggs",
        originalName: "Hard boiled eggs",
        amount: 6.0,
        unit: "servings",
        meta: ["hard", "boiled"],
        measures: {
          us: {
            amount: 6.0,
            unitShort: "servings",
            unitLong: "servings"
          },
          metric: {
            amount: 6.0,
            unitShort: "servings",
            unitLong: "servings"
          }
        }
      },
      {
        id: 1017,
        aisle: "Cheese",
        image: "cream-cheese.jpg",
        consistency: "SOLID",
        name: "cream cheese",
        nameClean: "cream cheese",
        original: "Cream cheese",
        originalName: "Cream cheese",
        amount: 6.0,
        unit: "servings",
        meta: [],
        measures: {
          us: {
            amount: 6.0,
            unitShort: "servings",
            unitLong: "servings"
          },
          metric: {
            amount: 6.0,
            unitShort: "servings",
            unitLong: "servings"
          }
        }
      },
      {
        id: 10151,
        aisle: "Meat",
        image: "ham-whole.jpg",
        consistency: "SOLID",
        name: "ham",
        nameClean: "ham",
        original: "Ham",
        originalName: "Ham",
        amount: 6.0,
        unit: "servings",
        meta: [],
        measures: {
          us: {
            amount: 6.0,
            unitShort: "servings",
            unitLong: "servings"
          },
          metric: {
            amount: 6.0,
            unitShort: "servings",
            unitLong: "servings"
          }
        }
      }
    ],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "To make square hard boiled eggs, you'll need an Egg cuber or Square Egg Press. (See note in About section on where to purchase)",
            ingredients: [{
              id: 1129,
              name: "hard boiled egg",
              localizedName: "hard boiled egg",
              image: "hard-boiled-egg.png"
            }],
            equipment: []
          },
          {
            number: 2,
            step: "First boil your eggs, then slide the egg inside the press and screw the top down so it pushes the egg into the corners.",
            ingredients: [{
              id: 1123,
              name: "egg",
              localizedName: "egg",
              image: "egg.png"
            }],
            equipment: []
          },
          {
            number: 3,
            step: "Let the egg cool and remove it from the mold. For better results use medium size eggs.",
            ingredients: [{
              id: 1123,
              name: "egg",
              localizedName: "egg",
              image: "egg.png"
            }],
            equipment: []
          },
          {
            number: 4,
            step: "If you intend to prepare this for a party, I suggest you buy several cubers, this way you can boil and chill several eggs at a time, or it will take you a lot of time.",
            ingredients: [{
              id: 1123,
              name: "egg",
              localizedName: "egg",
              image: "egg.png"
            }],
            equipment: []
          },
          {
            number: 5,
            step: "To prepare hard boiled eggs, place eggs in a saucepan, cover with cold water and bring to a boil over medium heat. As soon as the water comes to a full boil, let the eggs boil for 5 minutes, and then remove from heat and let stand covered in hot water 10 minutes.",
            ingredients: [{
              id: 1129,
              name: "hard boiled egg",
              localizedName: "hard boiled egg",
              image: "hard-boiled-egg.png"
            }],
            equipment: [{
              id: 404669,
              name: "sauce pan",
              localizedName: "sauce pan",
              image: "sauce-pan.jpg"
            }]
          },
          {
            number: 6,
            step: "Filling is made with cream cheese, ham and egg yolk, it tastes very soft, it is ideal for kids.",
            ingredients: [{
              id: 1017,
              name: "cream cheese",
              localizedName: "cream cheese",
              image: "cream-cheese.jpg"
            }],
            equipment: []
          }
        ]
      }
    ]
  };

  return (
    <div className=" min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <img
          src={recipeData.image}
          alt={recipeData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{recipeData.title}</h1>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-5 h-5" />
                <span>{recipeData.readyInMinutes} mins</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Users className="w-5 h-5" />
                <span>{recipeData.servings} servings</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                {recipeData.vegetarian ? (
                  <Leaf className="w-5 h-5 text-green-400" />
                ) : (
                  <Badge className="w-5 h-5 text-red-400" />
                )}
                <span>
                  {recipeData.vegan ? 'Vegan' : recipeData.vegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
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
                {recipeData.extendedIngredients.map((ingredient, index) => (
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
                {recipeData.analyzedInstructions[0]?.steps.map((step, index) => (
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
            <div 
              className="prose dark:prose-invert prose-blue max-w-none"
              dangerouslySetInnerHTML={{ __html: recipeData.summary }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;