import styles from './Projects.module.css'
import ProjectCard from '../../common/ProjectCard'
import ImaProject1 from '../../assets/ImagenProyectoTiendaOnline.png'
import ImaProject2 from '../../assets/ImagenProyectoClonGitHub.png'
import ImaProject3 from '../../assets/Proyecto_Clon_Red_Social.jpg'
import ImaProject4 from '../../assets/More Projects.png'
import { Link } from 'react-router-dom'

function Projects () {
  return (
    <>
      <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Proyectos</h1>
        <p className={styles.textCaption}>Posiblemente algun proyecto puede tardar algunos segundos en cargar</p>
        <div className={styles.projectsContainer}>

          <ProjectCard 
            src={ImaProject1} 
            title='Tienda Online' 
            description='MongoDB, ExpressJS, React, NodeJS'
            link='https://mi-tienda-mern.onrender.com'
            correoPrueba='No se necesita'
            contraseñaPrueba='autenticacion'
          />

          <ProjectCard 
            src={ImaProject2} 
            title='Clon de GitHub' 
            description='MongoDB, ExpressJS, React, NodeJS'
            link='https://clon-github-mern.onrender.com' 
            correoPrueba='Si tienes una cuenta de GitHub'
            contraseñaPrueba='puedes acceder con esa cuenta'
          />

          <ProjectCard 
            src={ImaProject3} 
            title='Clon de Instagram' 
            description='React, FireBase'
            link='https://clon-red-social-jeffur.vercel.app/auth'
            correoPrueba='correo prueba: johndoe.1@gmail.com' 
            contraseñaPrueba='contraseña: 12345678'
          />
        
          {/** Paginas extra donde estan los demas proyectos */}

          <Link 
            to='/'
            target='_blank' 
            className={styles.linkCard}
          >
            <ProjectCard
              src={ImaProject4}
              title='Mas Proyectos full stack'
              description="Ver más trabajos"
              correoPrueba="Click"
              contraseñaPrueba="para ver más"
            />
          </Link>

          <Link
            to='/more-projects'
            target='_blank'
            className={styles.linkCard}
          >
            <ProjectCard
              src={ImaProject4}
              title='Mas Proyectos frontend'
              description="Ver más trabajos"
              correoPrueba="Click"
              contraseñaPrueba="para ver más"
            />
          </Link>
        </div>
      </section>
    </>
  )
}


export default Projects