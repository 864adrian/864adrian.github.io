import foto from "../assets/ibai.jpg"
        
export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <h2 className="text-2xl font-bold mb-10">Contacto</h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src={foto}
            alt="Perfil"
            className="w-72 md:w-96 rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Texto */}
        <div>

          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            ¿Te gustaría trabajar conmigo o tienes una idea en mente?
            Estoy abierto a proyectos, colaboraciones y nuevas oportunidades 🚀
          </p>

          <p className="mb-6 text-slate-600 dark:text-slate-400">
            Puedes encontrarme en mis redes sociales:
          </p>

          {/* Redes */}
          <div className="flex gap-8 items-center mb-10">

            {/* GitHub */}
            <a href="https://github.com/864adrian" target="_blank" className="hover:scale-125 transition">
              <svg className="w-12 h-12 fill-current text-slate-700 dark:text-white" viewBox="0 0 24 24">
                <path d="M12 .5C5.7.5.7 5.6.7 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 1.7 3.1 1.2.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0C16.9 4.8 17.9 5 17.9 5c.6 1.6.2 2.8.1 3.1.7.8 1.2 1.9 1.2 3.2 0 4.5-2.6 5.5-5.1 5.8.4.4.8 1.1.8 2.2v3.2c0 .4.2.7.8.6A11.5 11.5 0 0 0 23.3 12C23.3 5.6 18.3.5 12 .5z"/>
              </svg>
            </a>

            {/* LinkedIn no tengo perfil, link generico*/}
            <a href="https://www.linkedin.com/feed/" target="_blank">
              <svg className="w-12 h-12 fill-current text-blue-600 hover:scale-125 transition" viewBox="0 0 24 24">
                <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.7H9.1V9h3.4v1.6h.1c.5-1 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v5.7zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.4H3.5V9h3.6v11.4z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/ibaillanos/" target="_blank">
              <svg className="w-12 h-12 fill-current text-pink-500" viewBox="0 0 24 24">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zm5.8-3.3a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2z"/>
              </svg>
            </a>

          </div>

          {/* INFO EXTRA */}
          <div className="space-y-3 text-slate-700 dark:text-slate-300">

            <p>📧 Email: <a href="mailto:tu@email.com" className="text-blue-500 hover:underline">aortega102@ikasle.ehu.eus</a></p>

            <p>📍 Ubicación: España</p>

          </div>
        </div>
      </div>
    </section>
  )
}