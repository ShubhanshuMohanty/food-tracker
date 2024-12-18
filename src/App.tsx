import { BrowserRouter, Route, Routes } from "react-router-dom"
import { FullRecipesPage, Home } from "./pages"
import NotFoundPage from "./pages/NotFoundPages"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<FullRecipesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App