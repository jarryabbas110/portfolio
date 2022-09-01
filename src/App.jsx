import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';


import React from 'react'

const App = () => {
  return (
    <render>
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            {/* <Testimonials /> */}
            <Contact />
            <Footer />
        </>
    </render>
  )
}

export default App
