// import React from 'react'

import axios from "axios";
import { useSelector } from "react-redux";
import {RootState} from '../../redux/store'
import Card from "./Card";
import { useState } from "react";

interface CardState{
    image: string;
    title: string;
    ingredients: string[];
    missedIngredients: string[];
}

function RecipesList() {
    const [resData,setResData] =useState([])
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
            recipesData=response.data.map((recipe: any)=>{

            } )   
        } catch (error) {
            console.log("error",error);    
        }
    }
  return (
    <div>
        <button onClick={fetchrecipesData}>click</button>
        {/* <Card /> */}
    </div>
  )
}

export default RecipesList