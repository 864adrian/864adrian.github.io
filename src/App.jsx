import { ThemeManager } from "./components/ThemeManager"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <ThemeManager>
      <Navigation />

      <div className="pb-20">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </ThemeManager>
  )
}

export default App