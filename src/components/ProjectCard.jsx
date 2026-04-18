export default function ProjectCard({ proyecto, onClick }) {
  return (
    <div onClick={() => onClick(proyecto)}>
      <h3>{proyecto.nombre}</h3>
      <p>{proyecto.descripcion}</p>
    </div>
  )
}