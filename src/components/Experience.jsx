import React from 'react'
import './experience.css'
import {BsFillBookmarkCheckFill} from 'react-icons/bs'
import { GrWordpress } from 'react-icons/gr';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaAws } from 'react-icons/fa';
import { SiPhp } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import { FaCss3Alt, FaReact, FaGithubSquare, FaDocker} from 'react-icons/fa';
import {
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiRabbitmq,
  SiSublimetext,SiOracle, SiJava, SiShopify, SiFigma, SiAdobexd, SiBitbucket, SiVisualstudio} from 'react-icons/si';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
        <h3>Tech Paradigms</h3>
          <div className="experience__content">
          <article className='experience__details'>
            <FaAws className='experience__details-icons'/>
            <div>
            <h4>AWS</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <FaReact className='experience__details-icons' />
            <div>
              <h4>React</h4>
            <small className="text-light">Intermediate</small></div>
          </article>

          <article className='experience__details'>
            <AiFillHtml5 className='experience__details-icons' />
            <div>
            <h4>HTML</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <FaCss3Alt className='experience__details-icons'/>
            <div>
            <h4>CSS</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <SiJavascript className='experience__details-icons'/>
            <div>
            <h4>Js</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <SiBootstrap className='experience__details-icons'/>
            <div>
            <h4>Bootstrap</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <SiPhp className='experience__details-icons'/>
            <div>
            <h4>PHP</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <DiMysql className='experience__details-icons'/>
            <div>
            <h4>MySQL</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <SiOracle className='experience__details-icons'/>
            <div>
            <h4>Oracle</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <SiJava className='experience__details-icons'/>
            <div>
            <h4>Java</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>
        </div>
      </div>


      <div className="experience__backend">
        <h3>Tools</h3>
          <div className="experience__content">
          <article className='experience__details'>
            <GrWordpress className='experience__details-icons'/>
            <div>
            <h4>Wordpress</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <SiShopify className='experience__details-icons'/>
            <div>
            <h4>Shopify</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <FaDocker className='experience__details-icons'/>
            <div>
            <h4>Docker</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <SiFigma className='experience__details-icons'/>
            <div>
            <h4>Figma</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <SiAdobexd className='experience__details-icons' />
            <div>
            <h4>Adobe XD</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>



          <article className='experience__details'>
            <SiVisualstudio className='experience__details-icons' />
            <div>
            <h4>Vs Code</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>


          <article className='experience__details'>
            <FaGithubSquare className='experience__details-icons' />
            <div>
            <h4>Github</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <SiBitbucket className='experience__details-icons' />
            <div>
            <h4>BitBucket</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
        </div>
      </div>


      </div>
    </section>
  )
}

export default Experience