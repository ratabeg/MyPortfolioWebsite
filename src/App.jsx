// import { useState } from 'react'
import { useState } from 'react'
import AboutMe from './components/AboutMe.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.Jsx'
import Navbar from './components/Navbar.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import Projects from './Projects.jsx'
import DarkModeContext from './context/DarkModeContext.jsx'

function App() {

    const [isDark,setIsDark] = useState(false)


  return (
    <>
      <DarkModeContext.Provider value={{isDark,setIsDark}}>
      <body className={`${isDark ? "darkmode" : ""}`}>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Experience/>
      <Education/>
      <Footer/>
      </body>
      </DarkModeContext.Provider>
    </>
  )
}

export default App
