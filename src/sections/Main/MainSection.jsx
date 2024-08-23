import styles from './MainSection.module.css'
import FotoPerfil from '../../Imagenes/FotoPerfil.jpg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import gitHubLight from '../../assets/github-light.svg'
import gitHubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import cv from '../../assets/CV Desarrollador Web Full Stack.pdf'
import { useTheme } from '../../common/ThemeContext'

function MainSection(){

  //Cambio del Theme dark/light usando hook useContext ( el hook se llama useTheme )
  const { theme, toogleTheme} = useTheme()

  //Operador ternario para aplicar Theme dark/light de acuerdo al backgroundColor que tenga
  const themeIcon = theme === 'light' ? sun : moon
  const githubIcon = theme === 'light' ? gitHubLight : gitHubDark
  const linkedinIcon = theme === 'light'? linkedinLight : linkedinDark

 
  return (
    <>
      <section id='mainSection' className={styles.container}>

        <div className={styles.colorModeContainer}>
          {/** Imagen de perfil */}
          <img className={styles.mainSection} src={FotoPerfil} alt='Foto Perfil' />

          {/** Imagen Clickeable para el cambio de theme dark/light */}
          <img className={styles.colorMode} src={themeIcon} alt='Cambiar dark-light' onClick={toogleTheme} />
        </div>

        <div className={styles.info}>
          <h1>Jeffer <br /> Tafurth</h1>
          <h2>Desarrollador Web Full Stack</h2>
          <span>
            {/** links de redes sociales: Linkedin y GitHub */}
            <a href='https://github.com/Jeffer-Andres-Tafurth-Cortes' target='_blank'>
              <img src={githubIcon} alt='Cuenta de Github' />
            </a>
            <a href='https://www.linkedin.com/in/jeffer-andres-tafurth-cortes-369518212/' target='_blank'>
              <img src={linkedinIcon} alt='Cuenta de Linkedin' />
            </a>
          </span>
          <p className={styles.description}>
            Desarrollador web Full stack Junior apasionado por la creación de aplicaciones web dinámicas y funcionales.
          </p>
          <a href={cv} download>
            {/** Boton para descargar CV */}
            <button className='hover'>Descarga mi CV</button>
          </a>
        </div>
      </section>
    </>    
  )
}

export default MainSection