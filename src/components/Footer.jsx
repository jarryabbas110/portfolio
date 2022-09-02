import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {RiBehanceFill} from 'react-icons/ri';
import {GrInstagram} from 'react-icons/gr';


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Jarry Abbas.</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="footer__socials">
      <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank"><FaGithub /></a>
        <a href="https://dribbble.com" target="_blank"><FaFacebookF /></a>
        <a href="https://dribbble.com" target="_blank"><RiBehanceFill /></a>
        <a href="https://dribbble.com" target="_blank"><GrInstagram /></a>
      </div>

      <div className="footer__copyright">
        <h4 style={{color: "white"}}>&copy; All rights reserved</h4>
      </div>
    </footer>
  )
}

export default Footer