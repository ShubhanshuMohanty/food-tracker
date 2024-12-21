import { Recipe } from "../components/recipes";
import Title from "../components/utils/Title";

function FullRecipesPage() {

  return (
    <>
      <Title title="Recipe" description="This is the Recipe Page of My App" />
      <Recipe/>
    </>
  );
}

export default FullRecipesPage;
