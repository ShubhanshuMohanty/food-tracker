import { IngridientsList } from "../components/header"
import { RecipesList } from "../components/recipes"
import { IngredientsInput } from "../components/searches"
import Title from "../components/utils/Title"

function Home() {
  return (
    <>
      <Title title="Home" description="This is the Home Page of My App" />
      <IngridientsList />
      <IngredientsInput />
      <RecipesList />
    </>
  )
}

export default Home