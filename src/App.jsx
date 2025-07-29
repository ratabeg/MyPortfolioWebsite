// import { useState } from 'react'
import AboutMe from './components/AboutMe.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.Jsx'
import Navbar from './components/Navbar.jsx'
import Education from './Education.jsx'
import Projects from './Projects.jsx'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Education/>
      <Footer/>
    </>
  )
}

export default App
