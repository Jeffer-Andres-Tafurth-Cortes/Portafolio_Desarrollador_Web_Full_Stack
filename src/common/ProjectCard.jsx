
import styles from './ProjectCard.module.css'
function ProjectCard({src, title, description, link, correoPrueba, contraseñaPrueba, children}){
  return (
    <div className={styles.container} >
      {/** Diseño de lo que contiene el mostrario de un proyecto, se usan props para poder aplicarlo en 
       * varios proyectos */}
       {link ?(

         <a href={link} target='_blank' rel="noopener noreferrer" className={styles.card}>
          <h3>{title}</h3>
          <img src={src} alt={title} />
          <p>{description}</p>
          <br />
          {correoPrueba && contraseñaPrueba ? <p>{correoPrueba}<br/>{contraseñaPrueba}</p> : null}
          {!correoPrueba && !contraseñaPrueba && <br />}
        </a>
      ) : (
        <div className={styles.card}>
          <h3>{title}</h3>
          <img src={src} alt={title} />
          <p>{description}</p>
          <br />
          {correoPrueba && contraseñaPrueba ? (
            <p>
              {correoPrueba}
              <br />
              {contraseñaPrueba}
            </p>
          ): null}
          {children}
        </div>
      )}
    </div>
  )
}

export default ProjectCard
