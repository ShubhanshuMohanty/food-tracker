// import React from 'react'

import axios from "axios";
import { useSelector } from "react-redux";
import {RootState} from '../../redux/store'
import Card from "./Card";
import { useState } from "react";


interface CardState{
    id: number;
    image: string;
    title: string;
    ingredients: string[];
    // missedIngredients: string[];
}

function RecipesList() {
    const [resData,setResData] =useState<CardState[]>([])
    let recipesData: CardState[] ;

    const url: string="https://api.spoonacular.com/recipes/findByIngredients";
    const apiKey: string="e1567f12699e4d64b65deff4634c8b1b";
    const ingredients=useSelector((state:RootState)=>state.searchInput.searchValue)
    const fetchrecipesData=async()=>{
        try {
            const response= await axios.get(url,{
                params: {
                    ingredients: ingredients, // Comma-separated ingredients
                    number: 10,               // Number of recipes to fetch
                    apiKey          // Your API key
                  },
            })
            console.log("res",response);
            recipesData=response.data.map((recipe: any)=>({
                id: recipe.id,
                image: recipe.image,
                title: recipe.title,
                ingredients: [
                    ...recipe.usedIngredients.map((ingredient:any) => ingredient.name),
                    ...recipe.missedIngredients.map((ingredient:any) => ingredient.name),
                ]
                
            }) )
            setResData(recipesData);
            console.log("smgg",recipesData);
               
        } catch (error) {
            console.log("error",error);    
        }
    }
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        <button 
            onClick={fetchrecipesData} 
            className="col-span-full bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-200 px-4 py-2 rounded hover:bg-blue-600 dark:hover:bg-blue-800"
        >
            Search
        </button>
        {resData?.map((recipe: CardState) => (
            <div
                key={recipe.id}
                className="bg-white dark:bg-gray-800 text-black dark:text-gray-200 rounded shadow-lg p-4"
            >
                <Card 
                    image={recipe.image} 
                    name={recipe.title} 
                    ingredients={recipe.ingredients} 
                />
            </div>
        ))}
    </div>
</div>


  )
}

export default RecipesList