import styles from './Projects.module.css'
import ProjectCard from '../../common/ProjectCard'
import ImaProject1 from '../../assets/ImagenProyectoTiendaOnline.png'
import ImaProject2 from '../../assets/ImagenProyectoClonGitHub.png'
import ImaProject3 from '../../assets/Proyecto_Clon_Red_Social.jpg'

function Projects () {
  return (
    <>
      <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Proyectos</h1>
        <div className={styles.projectsContainer}>

          <ProjectCard 
            src={ImaProject1} 
            title='Tienda Online' 
            description='MongoDB, ExpressJS, React, NodeJS'
            link='https://mi-tienda-mern.onrender.com'
            correoPrueba='No se necesita autenticacion'
            contraseñaPrueba='Puede tardar unos segundos'
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
        
        </div>
      </section>
    </>
  )
}


export default Projects