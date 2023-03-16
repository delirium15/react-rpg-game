import "./App.css"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/pages/Layout"
import PlayGame from "./components/pages/PlayGame"
import EditHero from "./components/pages/EditHero"
import SaveLoadHero from "./components/pages/SaveLoadHero"

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<PlayGame />}
        />
        <Route
          path="/edit-character"
          element={<EditHero />}
        />
        <Route
          path="/save-load-character"
          element={<SaveLoadHero />}
        />
      </Route>
    </Routes>
  )
}

export default App
