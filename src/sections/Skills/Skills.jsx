import styles from './Skills.module.css'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'
import {useTheme} from '../../common/ThemeContext'

function Skills(){

  const { theme } = useTheme()
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark

  return (
    <>
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Tecnologias</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='HTML5' />
        <SkillList src={checkMarkIcon} skill='CSS3' />
        <SkillList src={checkMarkIcon} skill='JavaScript' />
        <SkillList src={checkMarkIcon} skill='TypeScript' />
        <SkillList src={checkMarkIcon} skill='PHP' />
        <SkillList src={checkMarkIcon} skill='NodeJS' />
        <SkillList src={checkMarkIcon} skill='C#' />
      </div>
      <hr />
      <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill='React' />
      <SkillList src={checkMarkIcon} skill='Angular' />
      <SkillList src={checkMarkIcon} skill='Bootstrap' />
      <SkillList src={checkMarkIcon} skill='SASS' />
      <SkillList src={checkMarkIcon} skill='NextJS' />
      <SkillList src={checkMarkIcon} skill='MongoDB' />
      <SkillList src={checkMarkIcon} skill='PostgreSQL' />
      <SkillList src={checkMarkIcon} skill='ExpressJS' />
      </div>
      <hr />
      <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill='Git' />
      <SkillList src={checkMarkIcon} skill='GitHub' />
      <SkillList src={checkMarkIcon} skill='Visual Studio Code' />
      </div>
    </section>
    </>
  )
}

export default Skills