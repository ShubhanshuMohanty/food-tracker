import React, { useState, ChangeEvent, useEffect } from "react";
import axios from "axios";
import ingridients_data from '../../constants/unique_ingridients.json'

// Define the type for the ingredient suggestions
interface Ingredient {
  id: number;
  name: string;
}
// const ingridients_data=[1];
const IngredientSearch: React.FC = () => {
  const [query, setQuery] = useState<string>(""); // User input
  const [suggestions, setSuggestions] = useState<Ingredient[]>([]); // Suggestions

  // Function to fetch suggestions from the API
  const fetchSuggestions = async (input: string) => {
    if (!input) {
      setSuggestions([]); // Clear suggestions if input is empty
      return;
    }

    try {
      const response = await axios.get<Ingredient[]>(
        "https://api.spoonacular.com/food/ingredients/autocomplete",
        {
          params: {
            query: input,
            number: 10,
            // apiKey: "e1567f12699e4d64b65deff4634c8b1b", // Replace with your Spoonacular API key
          },
        }
      );
      setSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching ingredients:", error);
    }
  };
  const smSuggestions = async(input: string)=>{
    if(!input) 
    {
      setSuggestions([]);
      return;
    }
    const data : Ingredient[]=ingridients_data.filter((i)=>{
      const regex = new RegExp(input, "i"); // 'i' flag for case-insensitive match
  return regex.test(i.name);
    }).slice(0,10);
    console.log("Indata", data);
    setSuggestions(data);
    


  }
  // Handle input change
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setQuery(input);
    // fetchSuggestions(input);
    smSuggestions(input)
  };
  useEffect(()=>{
    console.log("data",ingridients_data);
    fetchSuggestions("chicken");
  },[])
  return (
    <div>
      <h3>Search Ingredients</h3>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Type an ingredient..."
        style={{ padding: "10px", width: "300px" }}
      />
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {suggestions.map((item) => (
          <li key={item.id} style={{ padding: "5px 0" }}>
            {item.name}
          </li>
        ))}
      </ul>
      {/* <IngredientSearch/> */}
    </div>

  );
};

export default IngredientSearch;
