import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../assets/me.png'
import Social from './Socials'


const Header = () => {
  return (


    
   <header>

      <div className="me">
        <img src={ME} alt="me" />
      </div>
    
    <div className="banner">
         <div className="banner-text">
            <h5>Hello I'm</h5>
            <h1>Jarry Abbas.</h1>
            <h3>Frontend Developer | DevOps Engineer | Ui & Ux Designer</h3>
            <CTA />
            <hr />
            {/* <ul className="social">
            
            </ul> */}
         </div>
       
      </div>
      <Social />


    {/* <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Jarry Abbas Naqvi</h1>
      <h5 className="text-light">Frontend Developer</h5>
      <CTA />
      <Social />

      <div className="me">
        <img src={ME} alt="me" />
      </div> */}
  

      <a href="#about" className='scroll__down'>Scroll Down</a>
      {/* </div> */}
   </header>
  )
}

export default Header