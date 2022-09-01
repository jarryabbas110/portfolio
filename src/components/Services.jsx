import React from 'react';
import './services.css';
import {BsFillBookmarkCheckFill} from 'react-icons/bs';
import {FaReact} from 'react-icons/fa';
import {VscSymbolInterface} from 'react-icons/vsc';
import {FaAws} from 'react-icons/fa';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        <div className="experience__frontend">
          <h3><FaAws size={45} className='service__details-icons'/></h3>
        <h3>DevOps</h3>
          <div className="service__content">
            <article className='service__details'>
              <div>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ex voluptate? Quisquam earum officiis atque. Eos amet culpa eum placeat dolore! Laboriosam cumque tenetur debitis quasi voluptates error soluta expedita?</h4>
                    <small className="text-light">Experienced</small>
              </div>
           </article>
          </div>
        </div>

      <div className="experience__frontend">
        <h3><FaReact size={45} className='service__details-icons'/></h3>
        <h3>Frontend Developer</h3>
        <div className="service__content">
          <article className='service__details'>
            
            <div>
            <h4>Node JS</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>


        </div>
      </div>

      

      <div className="experience__backend">
        <h3><VscSymbolInterface size={45}  className='service__details-icons'/></h3>
        <h3>User Interface & Experience</h3>
          <div className="service__content">


          <article className='service__details'>
            
            <div>
            <h4>MongoDB</h4>
            <small className="text-light">Intermediate</small>
            </div>
            <div>
            <h4>MongoDB</h4>
            <small className="text-light">Intermediate</small>
            </div>
            <div>
            <h4>MongoDB</h4>
            <small className="text-light">Intermediate</small>
            </div>
            <div>
            <h4>MongoDB</h4>
            <small className="text-light">Intermediate</small>
            </div>
            
          </article>


        </div>
      </div>


      </div>
    </section>
  )
}

export default Services