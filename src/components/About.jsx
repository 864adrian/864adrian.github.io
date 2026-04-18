export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-2xl font-bold mb-8">Sobre mí</h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Aptitudes */}
        <div>
          <h3 className="font-semibold mb-3">Tecnologías</h3>

          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>Java</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>C#</li>
          </ul>
        </div>

        {/* Formación */}
        <div>
          <h3 className="font-semibold mb-3">Titulación</h3>

          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li>
              Grado en Ingeniería Informática de Gestión y Sistemas de Información  
              <br />
              <span className="text-sm text-slate-500">
                ESCUELA DE INGENIEROS DE VITORIA
              </span>
            </li>

            <li>
              Microsoft Office Specialist: Excel Associate (Office 2019)  
              <br />
              <span className="text-sm text-slate-500">
                Obtenido en 2022
              </span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}