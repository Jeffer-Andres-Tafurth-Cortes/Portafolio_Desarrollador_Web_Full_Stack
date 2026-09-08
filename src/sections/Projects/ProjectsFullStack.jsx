import ProjectCard from '../../common/ProjectCard'
import styles from './MoreProjects.module.css'
import ImgPro1 from '../../assets/ImgPro1.png'

function ProjectsFullStack () {

  return (
    <section className={styles.container}>
      <h1 className='sectionTitle'>Más proyectos de desarrollo web full stack</h1>
      <p className={styles.textCaption}>Aquí tienes otros proyectos que he desarrollado con diferentes tecnologias Front End</p>

      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={ImgPro1} 
          description=' Next.js, FastAPI, PostgreSQL'
          link=''
          correoPrueba='No se necesita'
          contraseñaPrueba='autenticacion'
          title='Dashboard Spotify' 
        />

        <ProjectCard 
          src={''} 
          description='HTML, CSS & JavaScript'
          link='https://jeffur-simple-gaming-website-template.netlify.app/'
          correoPrueba='No se necesita'
          contraseñaPrueba='autenticacion'
          title='Dashboard Financiero' 
        />

        <ProjectCard 
          src={''} 
          description='React & TypeScript'
          link='https://jeffur-quote-machine-ts.netlify.app/'
          correoPrueba='No se necesita'
          contraseñaPrueba='autenticacion'
          title='Dashboard de Ventas' 
        />

        <ProjectCard 
          src={''} 
          description='React & TypeScript'
          link='https://jeffur-drum-machine-ts.netlify.app/'
          correoPrueba='No se necesita'
          contraseñaPrueba='autenticacion'
          title='HR Analytics' 
        />

      </div>

    </section>
  )
}

export default ProjectsFullStack