import React from 'react'
import Hero from './sections/Hero'
import { DarkModeProvider } from './components/DarkModeContext.jsx'
import Header from './components/Header'
import About from './sections/About'
import PopularAreas from './sections/PopularAreas'
import Properties from './sections/Properties'
import Services from './sections/Services'
import Clients from './sections/Clients'
import Contacts from './sections/Contacts'
import Footer from './components/Footer'

// Main Website //
const App = () => {
  return (
    <>
       <DarkModeProvider>
        <Header/>
        <Hero/>
        <About/>
        <PopularAreas/>
        <Properties/>
        <Services/>
        <Clients/>
        <Contacts/>
        <Footer/>
       </DarkModeProvider>
    </>
  )
}

export default App
