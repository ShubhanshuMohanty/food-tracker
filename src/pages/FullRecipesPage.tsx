import { useParams } from "react-router-dom"

function FullRecipesPage() {
    const {id}=useParams();
  return (
    <div>FullRecipesPage {id}</div>
  )
}

export default FullRecipesPage