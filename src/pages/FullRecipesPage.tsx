import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { Recipe } from "../components/recipes";


function FullRecipesPage() {
    const {id}=useParams();
    const apiKey: string="e1567f12699e4d64b65deff4634c8b1b";
    const getRecipe=async()=>{
      try {
        const response= await axios.get(`https://api.spoonacular.com/recipes/${id}/information`,{
          params: {
            apiKey          // Your API key
          },
        })
        console.log("sm res",response);
      } catch (error) {
        console.log("error",error);
      }
    }
    useEffect(()=>{
      // getRecipe()
    },[])
  return (
    <>
    {/* <div>FullRecipesPage {id}</div> */}
    <Recipe />
    </>
    
  )
}

export default FullRecipesPage