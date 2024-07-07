import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import MyWorks from './components/MyWork/MyWorks'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWorks/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
