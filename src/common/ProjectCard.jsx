
function ProjectCard({src, title, description, link, correoPrueba, contraseñaPrueba}){
  return (
    <>
      {/** Diseño de lo que contiene el mostrario de un proyecto, se usan props para poder aplicarlo en 
       * varios proyectos */}
        <a href={link} target='_blank'>
          <h3>{title}</h3>
          <img src={src} alt={title} className='hover' />
          <p>{description}</p>
          <br />
          {correoPrueba && contraseñaPrueba ? <p>{correoPrueba}<br/>{contraseñaPrueba}</p> : null}
          {!correoPrueba && !contraseñaPrueba && <br />}
        </a>
    </>
  )
}

export default ProjectCard
