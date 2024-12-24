import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Flame,Wheat as Pizza, Droplet, Beef as Egg ,LucideIcon} from 'lucide-react'; // Correct icons

// Update NutritionDetail to allow value to be string or number
interface NutritionDetail {
  label: string;
  value: string | number;  // Allowing value to be string or number
  unit: string;
  bg: string;
  color: string;
  icon: LucideIcon;
}

function Nutrition() {
  const [nutrition, setNutrition] = useState<NutritionDetail[]>([]);
  const { id } = useParams<{ id: string }>();

  const fetchNutrition = async () => {
    const url: string = `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json`;
    const apiKey: string = 'e1567f12699e4d64b65deff4634c8b1b';
    try {
      const response = await axios.get(url, {
        params: {
          apiKey,
        },
      });

      const transformedData: NutritionDetail[] = [
        {
          label: 'Calories',
          value: response.data.calories,  // can be string or number
          unit: '',
          bg: 'bg-red-100',
          color: 'text-red-600',
          icon: Flame,
        },
        {
          label: 'Carbs',
          value: response.data.carbs,  // can be string or number
          unit: '',
          bg: 'bg-blue-100',
          color: 'text-blue-600',
          icon: Pizza,
        },
        {
          label: 'Fat',
          value: response.data.fat,  // can be string or number
          unit: '',
          bg: 'bg-yellow-100',
          color: 'text-yellow-600',
          icon: Droplet,
        },
        {
          label: 'Protein',
          value: response.data.protein,  // can be string or number
          unit: '',
          bg: 'bg-green-100',
          color: 'text-green-600',
          icon: Egg,
        },
      ];

      // Update state by converting value to string if needed
      const nutritionWithStringValues = transformedData.map(item => ({
        ...item,
        value: String(item.value), // Ensure value is a string
      }));

      setNutrition(nutritionWithStringValues);  // Now this works correctly
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchNutrition();
  }, []);

  return (
    <div className="w-full p-4  flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Nutrition Information
        </h2>
        {/* Change grid layout to show 4 rows with a column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
          {nutrition.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-300"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${item.bg} ${item.color}`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.label}
                    </p>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        {item.value}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Nutrition;

