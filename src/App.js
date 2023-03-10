import "./App.css"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/pages/Layout"
import PlayGame from "./components/pages/PlayGame"
import EditHero from "./components/pages/EditHero"
import SaveLoadHero from "./components/pages/SaveLoadHero"

function App(props) {
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

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        {/* <Route
          path="*"
          element={<NoMatch />}
        /> */}
      </Route>
    </Routes>
  )
}

export default App
