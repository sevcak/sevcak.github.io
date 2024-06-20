import { HashRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Home, About } from "./pages"

const App = () => {
  return (
    <main className="bg-zinc-100">
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={'Blog'} />
      </Routes>
    </HashRouter>
    </main>
  )
}

export default App