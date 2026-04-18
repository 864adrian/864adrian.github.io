import { createContext, useState, useEffect } from "react"

const ContextoTema = createContext(null)

function ThemeManager({ children }) {
  const [tema, setTema] = useState(() => {
    return localStorage.getItem("theme") || "light"
  })

  const cambiarTema = () => {
    setTema(prev => (prev === "dark" ? "light" : "dark"))
  }

  useEffect(() => {
    const html = document.documentElement

    if (tema === "dark") {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }

    localStorage.setItem("theme", tema)
  }, [tema])

  return (
    <ContextoTema.Provider value={{ tema, cambiarTema }}>
      {children}
    </ContextoTema.Provider>
  )
}

export { ContextoTema, ThemeManager }