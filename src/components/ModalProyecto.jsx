export default function ModalProyecto({ proyecto, onClose }) {
  if (!proyecto) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Caja modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-full max-w-md
          rounded-2xl
          p-6
          bg-white dark:bg-slate-900
          text-slate-900 dark:text-slate-100
          shadow-xl
        "
      >
        <h2 className="text-xl font-bold">
          {proyecto.nombre}
        </h2>

        <p className="mt-3 text-slate-700 dark:text-slate-300">
          {proyecto.descripcion}
        </p>

        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Tecnologías: {proyecto.tecnologias.join(", ")}
        </p>

        <a
          href={proyecto.github}
          target="_blank"
          className="block mt-4 text-blue-500 hover:underline"
        >
          Ver repositorio
        </a>

        <button
          onClick={onClose}
          className="
            mt-5 px-4 py-2
            rounded-lg
            bg-slate-200 dark:bg-slate-700
            text-black dark:text-white
          "
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}