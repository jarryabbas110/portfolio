import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
// import Portfolio from './components/Portfolio';
import Portfolio from './components/portfolio/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';


import React from 'react'

const App = () => {
  return (
          <div>
            <Header />
            <Nav />
            <About />
            <Services />
            <Experience />
            <Portfolio />
            {/* <Testimonials /> */}
            <Contact />
            <Footer />
            </div>
  )
}

export default App
