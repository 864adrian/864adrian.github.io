import ThemeSelector from "./ThemeSelector"

export default function Navigation() {
  return (
    <nav className="
      w-full
      bg-black text-cyan-300
      py-4
    ">
      <div className="
        max-w-7xl mx-auto
        flex justify-between items-center
        px-6
      ">
        
        <span className="font-semibold">
          Mi Portfolio
        </span>

        <div className="
          flex gap-8
        ">
          <a href="#hero">Presentación</a>
          <a href="#about">Sobre mí</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </div>

        <ThemeSelector />
      </div>
    </nav>
  )
}
