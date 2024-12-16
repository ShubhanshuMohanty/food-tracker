import { IngridientsList } from "../components/header"
import { RecipesList } from "../components/recipes"
import { IngredientsInput } from "../components/searches"

function Home() {
  return (
    <>
        <IngridientsList/>
        <IngredientsInput/>
        <RecipesList/>
    </>
  )
}

export default Home