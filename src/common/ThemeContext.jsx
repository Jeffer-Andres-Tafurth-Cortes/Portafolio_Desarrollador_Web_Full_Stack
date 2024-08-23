import {createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext() //Crear el contexto para poder hacer el cambio de theme dark/light

export const useTheme = () => useContext(ThemeContext) //Ek hook se llama useTheme

//Function para ejecutar el Provider del contexto useTheme
export function ThemeProvider({ children }){

  //Uso del useState para determinar el theme inicial de la pagina
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  )

  //Uso del useEffect para asignarle un atributo al body de la pagina y emplear asi el cambio del theme dark/light
  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toogleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}