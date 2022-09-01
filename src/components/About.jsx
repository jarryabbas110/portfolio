import React from 'react'
import './about.css'
import ME from '../assets/me-about.jpg'
import {RiAwardFill} from 'react-icons/ri'
import {FaUsers} from 'react-icons/fa'
import {IoLibrarySharp} from 'react-icons/io5'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="div about__content">
          <div className="about__cards">
            <article className='about__card'>
              <RiAwardFill className='about__icon' />
              <h5>Professional</h5>
              <small>2 Years</small>
            </article>
            <article className='about__card'>
              <FaUsers className='about__icon' />
              <h5>Adaptable</h5>
              <small>200+ World Wide</small>
            </article>
            <article className='about__card'>
              <IoLibrarySharp className='about__icon' />
              <h5>Team Player</h5>
              <small>80+</small>
            </article>
          </div>
          <p>
            something something
          </p>
          <a href="#contact" className='btn btn-primary'>Get in Touch</a>
        </div>
      </div>

    </section>
  )
}

export default About