import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../assets/me.png'
import Social from './Socials'
import Nav from './Nav'

const Header = () => {
  return (
   <header>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Jarry Abbas Naqvi</h1>
      <h5 className="text-light">Frontend Developer</h5>
      <CTA />
      <Social />

      <div className="me">
        <img src={ME} alt="me" />
      </div>
  
      {/* <a href="#contact" className='scroll__down'>Scroll Down</a>  1:04*/}
     



    </div>
   </header>
  )
}

export default Header