import foto from "../assets/ibai.png"

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        max-w-7xl mx-auto
        px-6 py-20
        flex flex-col md:flex-row
        items-center gap-16
      "
    >

      {/* Imagen */}
      <img
        src={foto}
        alt="yo"
        className="
          w-60 md:w-80
          rounded-2xl
          object-cover
        "
      />

      {/* Texto */}
      <div className="max-w-2xl space-y-4">

        <h1 className="text-4xl md:text-6xl font-bold">
          ADRIAN ORTEGA
        </h1>

        <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300">
          Desarrollador con muchas ganas de crear experiencias web modernas y funcionales.
        </h2>

        <p className="text-slate-600 dark:text-slate-300">
          Apasionado por el desarrollo frontend con React y la construcción de interfaces limpias, escalables y bien estructuradas.
        </p>

        <p className="text-slate-600 dark:text-slate-300">
          Experiencia en la creación de pruebas E2E utilizando <span className="font-semibold">Selenium con C#</span>,
          asegurando calidad y fiabilidad en aplicaciones web.
        </p>

      </div>
    </section>
  )
}