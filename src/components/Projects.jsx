import { useState } from "react"
import { projects } from "../data/projects"
import ModalProyecto from "./ModalProyecto"

export default function Projects() {
  const [proyectoActivo, setProyectoActivo] = useState(null)
  const [filtro, setFiltro] = useState("Todos")

  const filtros = ["Todos", "React", "WEB", "API"]

  const proyectosFiltrados =
    filtro === "Todos"
      ? projects
      : projects.filter(p =>
          p.tecnologias.includes(filtro)
        )

  return (
    <section id="projects" className="px-6 py-16 max-w-7xl mx-auto">

      <h2 className="text-2xl font-bold mb-6">Proyectos</h2>

      {/* FILTROS */}
      <div className="flex flex-wrap gap-3 mb-8">

        {filtros.map(f => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            className={`
              px-4 py-2 rounded-full text-sm transition
              ${
                filtro === f
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              }
            `}
          >
            {f}
          </button>
        ))}

      </div>

      {/* PROYECTOS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {proyectosFiltrados.map(p => (
          <div
            key={p.id}
            onClick={() => setProyectoActivo(p)}
            className="
              cursor-pointer
              p-6 rounded-xl
              border border-slate-200 dark:border-slate-700
              bg-white dark:bg-slate-900
              text-slate-800 dark:text-slate-100
              hover:shadow-lg
              transition
            "
          >
            <h3 className="font-bold text-lg">{p.nombre}</h3>

            {/* tags */}
            <div className="flex gap-2 mt-3 flex-wrap">
              {p.tecnologias.map(t => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>

      <ModalProyecto
        proyecto={proyectoActivo}
        onClose={() => setProyectoActivo(null)}
      />

    </section>
  )
}