import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {FaUser} from 'react-icons/fa'
import {FaBookOpen} from 'react-icons/fa'
import {MdHomeRepairService} from 'react-icons/md'
import {AiFillMessage} from 'react-icons/ai'
import {AiFillProject} from 'react-icons/ai'
import { useState } from 'react'


const Nav = () => {
 const [activeNav, setActiveNav] = useState('#')
  return (
    
    <nav className='nav__container'>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><ImHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser /></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdHomeRepairService /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBookOpen /></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiFillProject /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage /></a>
    </nav>
  )
}

export default Nav