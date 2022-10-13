import React, { useEffect, useReducer } from 'react'
import Container from './components/Container'
import Navbar from './components/Navbar'
import Services from './components/Services'
import './style.css'
import './contact.css'
import './gallery.css'
import './responsive.css'
import './Skills.css'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {

    return (
      <div>
        <Navbar />
        <Container />
        <Services />
        <Skills  />
        <Projects />
        <Contact />
      </div>
    )
}

export default App