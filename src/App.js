import logo from "./logo.svg"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/pages/Layout"
import PlayGame from "./components/pages/PlayGame"
import EditCharacter from "./components/pages/EditCharacter"
import SaveLoadCharacter from "./components/pages/SaveLoadCharacter"

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
          element={<EditCharacter />}
        />
        <Route
          path="/save-load-character"
          element={<SaveLoadCharacter />}
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
