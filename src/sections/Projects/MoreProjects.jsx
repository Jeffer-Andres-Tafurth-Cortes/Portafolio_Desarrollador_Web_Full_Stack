import ProjectCard from '../../common/ProjectCard'
import styles from './MoreProjects.module.css'
import ImgPro1 from '../../assets/ImgPro1.png'
import ImgPro2 from '../../assets/ImgPro2.png'
import ImgPro4 from '../../assets/ImgPro4.png'


function MoreProjects () {

  return (
    <section className={styles.container}>
      <h1 className='sectionTitle'>Más proyectos de desarrollo web</h1>
      <p className={styles.textCaption}>Aquí tienes otros proyectos que he desarrollado con HTML, CSS y React.</p>

      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={ImgPro1} 
          description=' React, TypeScript'
          link='https://aplicacion-tareas-react-ts-jeffur.netlify.app/'
          correoPrueba='No se necesita'
          contraseñaPrueba='autenticacion'
          title='Aplicacion de Tareas' 
        />

        <ProjectCard 
          src={ImgPro2} 
          description='HTML, CSS & JavaScript'
          link='https://jeffur-simple-gaming-website-template.netlify.app/'
          correoPrueba='No se necesita'
          contraseñaPrueba='autenticacion'
          title='Pagina de videojuegos' 
        />

        <ProjectCard 
          src={''} 
          description='HTML, CSS & TypeScript'
          link='https://jeffur-quote-machine-ts.netlify.app/'
          correoPrueba='No se necesita'
          contraseñaPrueba='autenticacion'
          title='Maquina de frases' 
        />

        <ProjectCard 
          src={ImgPro4} 
          description='HTML, CSS & TypeScript'
          link='https://jeffur-drum-machine-ts.netlify.app/'
          correoPrueba='No se necesita'
          contraseñaPrueba='autenticacion'
          title='Bateria virtual' 
        />

        <ProjectCard 
          src={''} 
          description='HTML, CSS & JavaScript'
          link=''
          correoPrueba='No se necesita'
          contraseñaPrueba='autenticacion'
          title='Calculadora' 
        />

      </div>

    </section>
  )
}

export default MoreProjects